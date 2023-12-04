<script setup lang="ts">
import type {HttpResponse} from "~/types";
import {statusCodes} from "~/types";
import {readStream} from "~/helpers.client";

const summary = ref('')
const transcription = ref('')
const loadingTranscription = ref(false)
const loadingSummary = ref(false)
const isTranscriptionDone = ref(false)
const isSummaryFetched = ref(false)

const route = useRoute()
const details = route.query.url

const urlObj = JSON.parse(decodeURIComponent(details?.toString() || '')) as {fileUrl: string; meetingId: string}
const fileUrl = urlObj?.fileUrl ?? null

if (!fileUrl) {
  if (process.client) {
    alert('Malformed URL | You aren\'t supposed to access this page directly')
    window.history.back()
  }
}

async function getTranscription() {
  const transcriptionResponse = await $fetch('/api/transcriptions/transcript', {
    method: 'POST',
    responseType: 'stream',
    body: JSON.stringify({
      url: fileUrl
    })
  }).catch(err => {
    console.error(err)
    alert('Transcription: Fetch error')
    loadingTranscription.value = false
    return ''
  })

  const transcriptionReader = await transcriptionResponse?.getReader() ?? null
  if (!transcriptionReader) return alert('Transcription: Reader not found')

  let res: HttpResponse[]
  await readStream(transcriptionReader, (text: string) => {
    try {
      const data = text
          .replace(/\n/g, '')
          .replace(/}{/g, '}\n{')
          .split('\n')
          .filter(line => line !== '')

      res = data.map(line => JSON.parse(line))

      for (const response of res) {
        switch (response.status) {
          case statusCodes.transcriptionError:
            console.error(response.body)
            break
          case statusCodes.transcriptionUpdate:
            transcription.value += response.body
            break
          case statusCodes.mp3conversionUpdate:
          case statusCodes.mp3conversionEnd:
            // TODO: add mp3 conversion progress bar
            console.log(response.body)
            break
          case statusCodes.mp3conversionError:
            alert('Error converting audio')
            break
          case statusCodes.startedStream:
            loadingTranscription.value = true
            break
          case statusCodes.transcriptionSuccess:
            isTranscriptionDone.value = true
            loadingTranscription.value = false
            transcription.value += response.body
            break
          default:
            console.log("Unknown status")
            console.warn(response)
            break
        }
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      console.log(text);
    }
  })

  isTranscriptionDone.value = true
}

async function getSummaries() {
  if (!isTranscriptionDone.value) return console.error('Transcription not done')
  if (isSummaryFetched.value) return console.warn('Summaries already fetched')
  const summaryResponse = await $fetch('/api/transcriptions/summary', {
    method: 'POST',
    body: JSON.stringify({
      text: transcription.value ?? ''
    }),
    responseType: 'stream'
  }).catch(err => {
    console.error(err)
    alert('Summaries: Fetch error')
    loadingSummary.value = false
    return ''
  })

  const summaryReader = await summaryResponse?.getReader() ?? null
  if (!summaryReader) return alert('Summary: Reader not found')

  let res: HttpResponse[]
  await readStream(summaryReader, (text: string) => {
    try {
      // TODO: is this really the best way to parse the chunks json?
      const data = text
          .replace(/\n/g, '')
          .replace(/}{/g, '}\n{')
          .split('\n')
          .filter(line => line !== '')
      res = data.map(line => JSON.parse(line))
      for (const response of res) {
        switch (response.status) {
          case statusCodes.summaryError:
            console.error(response.body)
            break
          case statusCodes.summaryUpdate:
            summary.value += response.body
            break
          case statusCodes.startedStream:
            loadingSummary.value = true
            break
          default:
            console.log("Unknown status")
            console.warn(response)
            break
        }
      }
    } catch (error) {
      console.error("Error parsing JSON:", error);
      console.log(text);
    }
  })

  loadingSummary.value = false
  isSummaryFetched.value = true
}

onMounted(async () => {
  await getTranscription().then(() => {
    useFetch('/api/transcriptions/store/transcript', {
      method: 'POST',
      body: {text: transcription.value, meetingId: urlObj.meetingId}
    }).catch(err => {
      console.error(err)
      alert('Transcription: Store error')
    })
  }).then(() => getSummaries().then(() => {
    useFetch('/api/transcriptions/store/summary', {
      method: 'POST',
      body: {text: summary.value, meetingId: urlObj.meetingId}
    }).catch(err => {
      console.error(err)
      alert('Summary: Store error')
    })
  }))
})
</script>

<template>
  <Title>Demo</Title>
  <div class="text-container">
    <div class="text-highlight">
      <h2>Transcription</h2>
      <div class="spinner-box" v-if="loadingTranscription && !isTranscriptionDone">
        <div class="pulse-container">
          <div class="pulse-bubble pulse-bubble-1"></div>
          <div class="pulse-bubble pulse-bubble-2"></div>
          <div class="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
      <MdRenderer :markdown-text="transcription"/>
      <h2>Summary</h2>
      <MdRenderer :markdown-text="summary" class="summary"/>
      <div class="spinner-box" v-if="!isTranscriptionDone">
        <div class="three-quarter-spinner"></div>
      </div>
      <div class="spinner-box" v-if="!isSummaryFetched && isTranscriptionDone">
        <div class="pulse-container">
          <div class="pulse-bubble pulse-bubble-1"></div>
          <div class="pulse-bubble pulse-bubble-2"></div>
          <div class="pulse-bubble pulse-bubble-3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.text-container {
  display: grid;
  place-items: center;
  height: 100vh;
  padding-top: 5px;

  .text-highlight {
    background-color: rgba(245, 245, 245, 0.7);
    padding: 2rem;
    border-radius: 0.5rem;
    width: 100%;
    max-width: 40rem;
    max-height: 85vh;
    max-height: 85dvh;

    h2 {
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 1.5;
    }

    .summary {
      max-height: 35vh;
    }
  }
}

@keyframes spin {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(359deg);
  }
}

@keyframes pulse {
  from {
    opacity: 1;
    transform: scale(1);
  }

  to {
    opacity: .25;
    transform: scale(.75);
  }
}

.three-quarter-spinner {
  margin: auto;
  width: 50px;
  height: 50px;
  border: 3px solid #705a71;
  border-top: 3px solid transparent;
  border-radius: 50%;
  animation: spin .5s linear 0s infinite;
}

.pulse-container {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pulse-bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #4381b4;
}

.pulse-bubble-1 {
  animation: pulse .4s ease 0s infinite alternate;
}

.pulse-bubble-2 {
  animation: pulse .4s ease .2s infinite alternate;
}

.pulse-bubble-3 {
  animation: pulse .4s ease .4s infinite alternate;
}
</style>