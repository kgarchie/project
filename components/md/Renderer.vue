<template>
  <component is="style">
    .markdown-container {
      max-height: {{ maxHeight }};
      overflow: auto;
    }
  </component>
  <div class="markdown-container">
    <div class="markdown" v-html="html"></div>
  </div>
</template>
<script setup lang="ts">
import MarkdownIt from 'markdown-it'

const props = defineProps({
  markdownText: {
    type: String,
    required: true
  },
  maxHeight: {
    type: String,
    default: '50vh'
  }
})

const md = new MarkdownIt({
  html: true,
  breaks: true,
  xhtmlOut: true,
  linkify: true,
  typographer: true
})

const html = computed(() => md.render(props.markdownText))


nextTick(() =>{
  console.log('nextTick')
})
</script>

<style scoped>
.markdown-container {
  background-color: rgba(245, 245, 245, 1);
  padding: 1rem;
  border-radius: 0.5rem;
  width: 100%;
  max-width: 40rem;
}

.markdown{
  cursor: pointer;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  margin: 0;
  background-color: rgba(245, 245, 245, 1);
  max-height: 35vh;
  overflow: auto;
}
</style>