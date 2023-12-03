<template>
  <Title>Meeting</Title>
  <div class="wrapper">
    <div class="app-container">
      <div class="left-side">
        <div class="navigation">
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-home" viewBox="0 0 24 24">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
              <path d="M9 22V12h6v10"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-message-square">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-phone-call"
                 viewBox="0 0 24 24">
              <path
                  d="M15.05 5A5 5 0 0119 8.95M15.05 1A9 9 0 0123 8.94m-1 7.98v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-hard-drive">
              <line x1="22" y1="12" x2="2" y2="12"/>
              <path
                  d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
              <line x1="6" y1="16" x2="6.01" y2="16"/>
              <line x1="10" y1="16" x2="10.01" y2="16"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 class="feather feather-users">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-folder"
                 viewBox="0 0 24 24">
              <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/>
            </svg>
          </a>
          <a href="#" class="nav-link icon">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                 stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"
                 viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="3"/>
              <path
                  d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-2 2 2 2 0 01-2-2v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 01-2-2 2 2 0 012-2h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 010-2.83 2 2 0 012.83 0l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 012-2 2 2 0 012 2v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 0 2 2 0 010 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 012 2 2 2 0 01-2 2h-.09a1.65 1.65 0 00-1.51 1z"/>
            </svg>
          </a>
        </div>
      </div>
      <div class="app-main">
        <div class="video-call-wrapper">
          <Feed :feed="{image_url: self.image_url, srcObject: self.srcObject}">
            <div class="participant-actions">
              <button class="btn-mute"></button>
              <button class="btn-camera"></button>
            </div>
          </Feed>
          <Feed
              :feed="{image_url: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80', video_url: null}">
            <div class="participant-actions">
              <button class="btn-mute"></button>
              <button class="btn-camera"></button>
            </div>
          </Feed>
        </div>
      </div>
    </div>
  </div>
  <button class="tests" @click="start">Start</button>
  <button class="tests" @click="end">End</button>
  <Footer show-default="false">
    <li>
      <div class="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
              d="M16.4259 17.839L21.1935 22.6066L22.6077 21.1924L2.80874 1.3934L1.39453 2.80761L7.00113 8.41421V10C7.00113 12.7614 9.23971 15 12.0011 15C12.4835 15 12.9499 14.9317 13.3912 14.8042L14.9413 16.3544C14.0474 16.7688 13.0513 17 12.0011 17C8.47466 17 5.55725 14.3923 5.07202 11H3.05606C3.51721 15.1716 6.82952 18.4839 11.0011 18.9451V23H13.0011V18.9451C14.2351 18.8087 15.3939 18.4228 16.4259 17.839ZM11.5538 12.9669C10.2551 12.7727 9.22843 11.7461 9.03426 10.4473L11.5538 12.9669ZM19.3757 15.1604L17.9333 13.7179C18.4417 12.9084 18.789 11.9874 18.9302 11H20.9462C20.7763 12.5366 20.2197 13.9565 19.3757 15.1604ZM16.4668 12.2514L14.9183 10.703C14.9725 10.4775 15.0011 10.2421 15.0011 10V6C15.0011 4.34315 13.658 3 12.0011 3C10.7069 3 9.60408 3.81956 9.18335 4.96802L7.68672 3.47139C8.55524 1.99268 10.1623 1 12.0011 1C14.7626 1 17.0011 3.23858 17.0011 6V10C17.0011 10.8099 16.8086 11.5748 16.4668 12.2514Z"></path>
        </svg>
      </div>
    </li>
    <li>
      <div class="button">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path
              d="M19.5869 21.0002H3.00113C2.44885 21.0002 2.00113 20.5524 2.00113 20.0002V6.00016C2.00113 5.44787 2.44885 5.00016 3.00113 5.00016H3.58692L1.39453 2.80777L2.80874 1.39355L22.6077 21.1925L21.1935 22.6068L19.5869 21.0002ZM5.58692 7.00016H4.00113V19.0002H17.5869L15.4063 16.8196C14.4698 17.5589 13.287 18.0002 12.0011 18.0002C8.96357 18.0002 6.50113 15.5377 6.50113 12.5002C6.50113 11.2143 6.94239 10.0315 7.68173 9.09497L5.58692 7.00016ZM9.11149 10.5247C8.72641 11.0869 8.50113 11.7672 8.50113 12.5002C8.50113 14.4332 10.0681 16.0002 12.0011 16.0002C12.734 16.0002 13.4143 15.7749 13.9766 15.3898L9.11149 10.5247ZM22.0011 17.786L20.0011 15.786V7.00016H16.1727L14.1727 5.00016H9.82956L9.52245 5.30727L8.10823 3.89306L9.00113 3.00016H15.0011L17.0011 5.00016H21.0011C21.5534 5.00016 22.0011 5.44787 22.0011 6.00016V17.786ZM11.2643 7.04909C11.5053 7.01682 11.7513 7.00016 12.0011 7.00016C15.0387 7.00016 17.5011 9.46259 17.5011 12.5002C17.5011 12.75 17.4845 12.996 17.4522 13.237L15.1143 10.8991C14.7804 10.2512 14.2501 9.72089 13.6022 9.38698L11.2643 7.04909Z"></path>
        </svg>
      </div>
    </li>
  </Footer>
</template>
<style scoped lang="scss">
button {
  outline: none;
  transition: .2s;
  cursor: pointer;

  &:hover {
    opacity: .7;
  }
}

.wrapper {
  --app-background: #eaebf5;
  --chat-background: #fff;
  --link-color: #c0c1c5;
  --navigation-bg: #fff;
  --navigation-box-shadow: 0 2px 6px 0 rgba(136, 148, 171, 0.2), 0 24px 20px -24px rgba(71, 82, 107, 0.1);
  --main-color: #3d42df;
  --message-bg: #f3f4f9;
  --message-bg-2: #3d42df;
  --message-text: #2c303a;
  --placeholder-text: #a2a4bc;
  --button-bg: #fff;

  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.app-container {
  background-color: var(--app-background);
  width: 100%;
  height: 100%;
  font-family: 'DM Sans', sans-serif;
  display: flex;
  transition: .2s;

  padding: 5rem 2rem;
}

.left-side {
  position: relative;
  padding: 16px;
  flex-basis: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.navigation {
  display: flex;
  flex-direction: column;
  background-color: var(--navigation-bg);
  padding: 24px;
  border-radius: 10px;
  box-shadow: var(--navigation-box-shadow);
}

.nav-link + .nav-link {
  margin-top: 32px;
}

.nav-link:hover svg {
  color: #3d42df;
}

.icon svg {
  width: 24px;
  height: 24px;
  color: var(--link-color);
  transition: .2s ease-in;
}

.profile-picture {
  border-radius: 8px;
  width: 32px;
  height: 32px;
  overflow: hidden;
  margin-right: 12px;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.send-button {
  color: #fff;
  background-color: var(--main-color);
  border-radius: 8px;
  border: none;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    width: 20px;
    height: 20px;
  }
}

.app-main {
  flex: 1;
  width: 100%;
  padding: 72px 32px 16px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.video-call-wrapper {
  width: 100%;
  height: 100%;
  margin-top: -5%;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

.name-tag {
  position: absolute;
  bottom: 12px;
  right: 12px;
  font-size: 12px;
  color: #fff;
  background-color: rgba(0, 15, 47, 0.5);
  border-radius: 4px;
  padding: 4px 12px;
}

.participant-actions {
  position: absolute;
  display: flex;
  left: 12px;
  top: 12px;
}

.btn-mute,
.btn-camera {
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background-color: rgba(0, 15, 47, 0.5);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16px;
  border: none;
}

.btn-mute {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-mic-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M9 9v3a3 3 0 005.12 2.12M15 9.34V4a3 3 0 00-5.94-.6'/%3E%3Cpath d='M17 16.95A7 7 0 015 12v-2m14 0v2a7 7 0 01-.11 1.23M12 19v4M8 23h8'/%3E%3C/svg%3E%0A");
  margin-right: 4px;
}

.btn-camera {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' stroke='%23fff' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='feather feather-camera-off' viewBox='0 0 24 24'%3E%3Cpath d='M1 1l22 22M21 21H3a2 2 0 01-2-2V8a2 2 0 012-2h3m3-3h6l2 3h4a2 2 0 012 2v9.34m-7.72-2.06a4 4 0 11-5.56-5.56'/%3E%3C/svg%3E%0A");
}

.participants {
  display: flex;
  background-color: var(--button-bg);
  box-shadow: var(--navigation-box-shadow);
  margin-top: 16px;
  padding: 12px;
  border-radius: 8px;
  max-width: 232px;
  margin-left: auto;
}

@media screen and (max-width: 900px) {
  .expand-btn {
    display: block;
  }

  .right-side {
    position: absolute;
    right: 0px;
    background-color: var(--chat-background);
    transform: translateX(100%);
    z-index: 2;
    width: 100%;

    &.show {
      transform: translateX(0);
    }
  }

  .btn-close-right {
    display: block;
  }
}

@media screen and (max-width: 520px) {
  .left-side {
    display: none;
  }

  .app-main {
    padding: 72px 16px 16px 16px;
  }

  .expand-btn {
    right: 16px;
  }

  .mode-switch {
    left: 16px;
  }
}
</style>
<script setup lang="ts">
const self = reactive<{
  image_url: string
  srcObject: MediaStream | null
}>({
  image_url: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
  srcObject: null
})

async function startStream() {
  const stream = await navigator.mediaDevices.getUserMedia({
    video: false,
    audio: true
  })
  self.srcObject = stream

  return stream
}

async function endStream() {
  if (self.srcObject) {
    self.srcObject.getTracks().forEach(track => track.stop())
    self.srcObject = null
  }
}

async function createSdpOffer(){
  const peerConnection = new RTCPeerConnection()
  const stream = await startStream()

  stream.getTracks().forEach(track => {
    peerConnection.addTrack(track, stream)
  })

  const offer = await peerConnection.createOffer()
  await peerConnection.setLocalDescription(offer)

  return peerConnection.localDescription
}

async function createSdpAnswer(offer: RTCSessionDescriptionInit){
  const peerConnection = new RTCPeerConnection()
  const stream = await startStream()

  stream.getTracks().forEach(track => {
    peerConnection.addTrack(track, stream)
  })

  await peerConnection.setRemoteDescription(offer)
  const answer = await peerConnection.createAnswer()
  await peerConnection.setLocalDescription(answer)

  return peerConnection.localDescription
}


</script>