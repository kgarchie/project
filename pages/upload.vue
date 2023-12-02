<template>
  <Title>Upload</Title>
  <div id="container">
    <div id="upload" class="modal" data-state="0" data-ready="false">
      <div class="modal__header">
        <button class="modal__close-button" type="button">
          <svg class="modal__close-icon" viewBox="0 0 16 16" width="16px" height="16px" aria-hidden="true">
            <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <polyline points="1,1 15,15"/>
              <polyline points="15,1 1,15"/>
            </g>
          </svg>
          <span class="modal__sr">Close</span>
        </button>
      </div>
      <div class="modal__body">
        <div class="modal__col">
          <!-- up -->
          <svg class="modal__icon modal__icon--primary" viewBox="0 0 24 24" width="24px" height="24px"
               aria-hidden="true">
            <g fill="none" stroke="hsl(223,90%,50%)" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
              <circle class="modal__icon-sdo69" cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12"/>
              <polyline class="modal__icon-sdo14" points="7 12 12 7 17 12" stroke-dasharray="14.2 14.2"/>
              <line class="modal__icon-sdo10" x1="12" y1="7" x2="12" y2="17" stroke-dasharray="10 10"/>
            </g>
          </svg>
          <!-- error -->
          <svg class="modal__icon modal__icon--red" viewBox="0 0 24 24" width="24px" height="24px"
               aria-hidden="true" display="none">
            <g fill="none" stroke="hsl(3,90%,50%)" stroke-width="2" stroke-linecap="round">
              <circle class="modal__icon-sdo69" cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12"/>
              <line class="modal__icon-sdo14" x1="7" y1="7" x2="17" y2="17" stroke-dasharray="14.2 14.2"/>
              <line class="modal__icon-sdo14" x1="17" y1="7" x2="7" y2="17" stroke-dasharray="14.2 14.2"/>
            </g>
          </svg>
          <!-- check -->
          <svg class="modal__icon modal__icon--green" viewBox="0 0 24 24" width="24px" height="24px"
               aria-hidden="true" display="none">
            <g fill="none" stroke="hsl(138,90%,50%)" stroke-width="2" stroke-linecap="round"
               stroke-linejoin="round">
              <circle class="modal__icon-sdo69" cx="12" cy="12" r="11" stroke-dasharray="69.12 69.12"/>
              <polyline class="modal__icon-sdo14" points="7 12.5 10 15.5 17 8.5"
                        stroke-dasharray="14.2 14.2"/>
            </g>
          </svg>
        </div>
        <div class="modal__col">
          <div class="modal__content">
            <h2 class="modal__title">Upload a File</h2>
            <p class="modal__message">Select a file to upload from your computer or device.</p>
            <div class="modal__actions">
              <button class="modal__button modal__button--upload" type="button" data-action="file">Choose
                Audio
                File
              </button>
              <input id="file" type="file" hidden>
            </div>
            <div class="modal__actions" hidden>
              <svg class="modal__file-icon" viewBox="0 0 24 24" width="24px" height="24px" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                   stroke-linejoin="round">
                  <polygon points="4 1 12 1 20 8 20 23 4 23"/>
                  <polyline points="12 1 12 8 20 8"/>
                </g>
              </svg>
              <div class="modal__file" data-file></div>
              <button class="modal__close-button" type="button" data-action="fileReset">
                <svg class="modal__close-icon" viewBox="0 0 16 16" width="16px" height="16px"
                     aria-hidden="true" data-action="fileReset">
                  <g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                    <polyline points="4,4 12,12"/>
                    <polyline points="12,4 4,12"/>
                  </g>
                </svg>
                <span class="modal__sr">Remove</span>
              </button>
              <button class="modal__button" type="button" data-action="upload">Upload</button>
            </div>
          </div>
          <div class="modal__content" hidden>
            <h2 class="modal__title">Uploading…</h2>
            <p class="modal__message">Just give us a moment to process your file.</p>
            <div class="modal__actions">
              <div class="modal__progress">
                <div class="modal__progress-value" data-progress-value>0%</div>
                <div class="modal__progress-bar">
                  <div class="modal__progress-fill" data-progress-fill></div>
                </div>
              </div>
              <button class="modal__button" type="button" data-action="cancel">Cancel</button>
            </div>
          </div>
          <div class="modal__content" hidden>
            <h2 class="modal__title">Oops!</h2>
            <p class="modal__message">Your file could not be uploaded due to an error. Try uploading it again?
            </p>
            <div class="modal__actions modal__actions--center">
              <button class="modal__button" type="button" data-action="upload">Retry</button>
              <button class="modal__button" type="button" data-action="cancel">Cancel</button>
            </div>
          </div>
          <div class="modal__content" hidden>
            <h2 class="modal__title">Upload Successful!</h2>
            <p class="modal__message">Your file has been uploaded. You can copy the link to your clipboard.</p>
            <div class="modal__actions modal__actions--center">
              <button class="modal__button" type="button" data-action="copy">Copy Link</button>
              <button class="modal__button" type="button" data-action="done">Done</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
class UploadModal {
  filename = "";
  fileURL = "";
  isCopying = false;
  isUploading = false;
  progress = 0;
  progressTimeout = null;
  state = 0;

  constructor(el) {
    this.el = document.querySelector(el);
    this.el?.addEventListener("click", this.action.bind(this));
    this.el?.querySelector("#file")?.addEventListener("change", this.fileHandle.bind(this));
  }

  action(e) {
    this[e.target?.getAttribute("data-action")]?.();
    this.stateDisplay();
  }

  cancel() {
    this.isUploading = false;
    this.progress = 0;
    this.progressTimeout = null;
    this.state = 0;
    this.stateDisplay();
    this.progressDisplay();
    this.fileReset();
  }

  async copy() {
    const copyButton = this.el?.querySelector("[data-action='copy']");

    if (!this.isCopying && copyButton) {
      this.isCopying = true;
      copyButton.style.width = `${copyButton.offsetWidth}px`;
      copyButton.disabled = true;
      await navigator.clipboard.writeText(this.fileURL);
      copyButton.textContent = "Copied!";
      await new Promise(res => setTimeout(res, 1000));
      this.isCopying = false;
      copyButton.removeAttribute("style");
      copyButton.disabled = false;
      copyButton.textContent = "Copy Link";
    }
  }

  fail() {
    this.isUploading = false;
    this.progress = 0;
    this.progressTimeout = null;
    this.state = 2;
    this.stateDisplay();
  }

  file() {
    this.el?.querySelector("#file").click();
  }

  fileDisplay(name = "") {
    this.filename = name;

    const fileValue = this.el?.querySelector("[data-file]");
    if (fileValue) fileValue.textContent = this.filename;

    this.el?.setAttribute("data-ready", this.filename ? "true" : "false");
  }

  fileHandle(e) {
    return new Promise(() => {
      const {target} = e;
      if (target?.files.length) {
        let reader = new FileReader();
        reader.onload = e2 => {
          this.fileDisplay(target.files[0].name);
        };
        reader.readAsDataURL(target.files[0]);
      }
    });
  }

  fileReset() {
    const fileField = this.el?.querySelector("#file");
    if (fileField) fileField.value = null;

    this.fileDisplay();
  }

  progressDisplay() {
    const progressValue = this.el?.querySelector("[data-progress-value]");
    const progressFill = this.el?.querySelector("[data-progress-fill]");
    const progressTimes100 = Math.floor(this.progress * 100);

    if (progressValue) progressValue.textContent = `${progressTimes100}%`;
    if (progressFill) progressFill.style.transform = `translateX(${progressTimes100}%)`;
  }

  async progressLoop() {
    this.progressDisplay();

    if (this.isUploading) {
      if (this.progress === 0) {
        const xhr = new XMLHttpRequest();

        xhr.open("POST", "/api/transcriptions/upload", true);

        xhr.upload.onprogress = e => {
          this.progress = e.loaded / e.total;
          this.progressDisplay();
        };

        xhr.onload = () => {
          if (xhr.status === 200) {
            this.success();
          } else {
            this.fail();
          }
        };

        xhr.onreadystatechange = () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            this.fileURL = response.body[0];
          }
        };

        const formData = new FormData();

        const upload_file = this.el?.querySelector("#file");

        if (upload_file?.files.length) {
          for (let i = 0; i < upload_file.files.length; i++) {
            formData.append("file", upload_file.files[i]);
          }
        }

        xhr.send(formData);
      }
      if (this.progress < 1) {
        this.progress += 0.01;
        this.progressTimeout = setTimeout(this.progressLoop.bind(this), 50);
      } else if (this.progress >= 1) {
        this.progressTimeout = setTimeout(() => {
          if (this.isUploading) {
            this.success();
            this.stateDisplay();
            this.progressTimeout = null;
          }
        }, 250);
      }
    }
  }

  stateDisplay() {
    this.el?.setAttribute("data-state", `${this.state}`);
  }

  success() {
    this.isUploading = false;
    this.state = 3;
    this.stateDisplay();
  }

  upload() {
    if (!this.isUploading) {
      this.isUploading = true;
      this.progress = 0;
      this.state = 1;
      this.progressLoop();
    }
  }

  percentEncodeUrl(){
    return encodeURIComponent(this.fileURL)
  }

  async done() {
    await navigateTo({
      path: '/transcription',
      query: {
        url: this.percentEncodeUrl()
      }
    })
  }
}

onMounted(async () => {
  new UploadModal("#upload");
})
</script>
<style lang="scss">
#container {
  display: grid;
  place-items: center;
  height: 100%;
}


#upload {
  --hue: 0;
  --bg: hsl(var(--hue), 10%, 85%);
  --fg: hsl(var(--hue), 10%, 5%);
  --trans-dur: 0.3s;
}

button {
  border: none;
  background-color: inherit;
}

.modal {
  margin-top: -10%;
  background-color: hsl(var(--hue), 10%, 95%);
  border-radius: 1em;
  box-shadow: 0 0.75em 1em hsla(var(--hue), 10%, 5%, 0.3);
  color: hsl(var(--hue), 10%, 5%);
  width: calc(100% - 3em);
  max-width: 34.5em;
  overflow: hidden;
  position: relative;
  transition: background-color var(--trans-dur), color var(--trans-dur);

  &:before {
    background-color: rgb(76 49 78 / 0.9);
    border-radius: 50%;
    content: "";
    filter: blur(60px);
    opacity: 0.15;
    position: absolute;
    top: -8em;
    right: -15em;
    width: 25em;
    height: 25em;
    z-index: 0;
    transition: background-color var(--trans-dur);
  }

  &__actions {
    animation-delay: 0.2s;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__body,
  &__header {
    position: relative;
    z-index: 1;
  }

  &__body {
    display: flex;
    flex-direction: column;
    padding: 0 2em 1.875em 1.875em;
  }

  &__button,
  &__close-button {
    color: currentColor;
    cursor: pointer;
    -webkit-tap-highlight-color: transparent;
  }

  &__button {
    background-color: hsla(var(--hue), 10%, 50%, 0.2);
    border-radius: 0.25rem;
    font-size: 0.75em;
    padding: 0.5rem 2rem;
    transition: background-color var(--trans-dur), border-color var(--trans-dur), opacity var(--trans-dur);
    width: 100%;

    & + & {
      margin-top: 0.75em;
    }

    &:disabled {
      opacity: 0.5;
    }

    &:focus,
    &__close-button:focus {
      outline: transparent;
    }

    &:hover,
    &:focus-visible {
      background-color: hsla(var(--hue), 10%, 60%, 0.2);
    }

    &--upload {
      background-color: transparent;
      border: 0.125rem dashed hsla(var(--hue), 10%, 50%, 0.4);
      flex: 1;
      padding: 0.375rem 2rem;
    }
  }

  &__col + &__col {
    flex: 1;
    margin-top: 1.875em;
  }

  &__close-button,
  &__message,
  &__progress-value {
    color: rgb(50, 50, 100);
    transition: color var(--trans-dur);

    &__close-button {
      background-color: transparent;
      display: flex;
      width: 1.5em;
      height: 1.5em;
      transition: color var(--trans-dur);

      &:hover,
      &:focus-visible {
        color: hsl(var(--hue), 10%, 40%);
      }
    }
  }

  &__close-icon {
    display: block;
    margin: auto;
    height: auto;
  }

  &__content > * {
    animation-name: fadeSlideIn;
    animation-duration: 0.5s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
    opacity: 0;
  }

  &__file {
    flex: 1;
    font-size: 0.75em;
    font-weight: 700;
    margin-right: 0.25rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;

    & ~ .modal__button {
      margin-top: 1.5em;
    }

    &__icon {
      color: hsl(var(--hue), 10%, 50%);
      display: block;
      margin-right: 0.75em;
      width: 1.5em;
      height: 1.5em;
      transition: color var(--trans-dur);
    }
  }

  &__header {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 2.5em;
    padding: 0.5em;
  }

  &__icon {
    display: block;
    margin: auto;
    width: 2.25em;
    height: 2.25em;

    &--primary g {
      stroke: rgb(50, 50, 100);
    }

    &--red g {
      stroke: hsl(3, 90%, 50%);
    }

    &--green g {
      stroke: hsl(138, 90%, 40%);
    }

    circle,
    line,
    polyline {
      animation: sdo 0.25s ease-in-out forwards;
      transition: stroke var(--trans-dur);

      &:nth-child(2) {
        animation-delay: 0.25s;
      }

      &:nth-child(3) {
        animation-delay: 0.5s;
      }
    }

    &-sdo10 {
      stroke-dashoffset: 10;
    }

    &-sdo14 {
      stroke-dashoffset: 14.2;
    }

    &-sdo69 {
      stroke-dashoffset: 69.12;
      transform: rotate(-90deg);
      transform-origin: 12px 12px;
    }
  }

  &__message {
    animation-delay: 0.1s;
    font-size: 1em;
    margin-bottom: 1.5em;
    min-height: 3em;
  }

  &__progress {
    flex: 1;

    & + &__button {
      margin-top: 1.75em;
    }

    &__bar {
      background-image: linear-gradient(90deg, hsl(var(--hue), 90%, 50%), hsl(var(--hue), 90%, 70%));
      border-radius: 0.2em;
      overflow: hidden;
      width: 100%;
      height: 0.4em;
      transform: translate3d(0, 0, 0);

      &__fill {
        background-color: hsl(var(--hue), 10%, 90%);
        width: inherit;
        height: inherit;
        transition: transform 0.1s ease-in-out;
      }
    }

    &__value {
      font-size: 0.75em;
      font-weight: 700;
      line-height: 1.333;
      text-align: right;
    }
  }

  &__sr {
    overflow: hidden;
    position: absolute;
    width: 1px;
    height: 1px;
  }

  &__title {
    font-size: 1.25em;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 1.5rem;
    text-align: center;
  }

  /* state change */
  &[data-state="2"]:before {
    background-color: hsl(3, 90%, 60%);
  }

  &[data-state="3"]:before {
    background-color: hsl(138, 90%, 60%);
  }

  &__icon + &__icon,
  &[data-state="1"] .modal__icon:first-child,
  &[data-state="2"] .modal__icon:first-child,
  &[data-state="3"] .modal__icon:first-child,
  &__content + &__content,
  &[data-state="1"] .modal__content:first-child,
  &[data-state="2"] .modal__content:first-child,
  &[data-state="3"] .modal__content:first-child {
    display: none;
  }

  &[data-state="1"] .modal__icon:first-child,
  &[data-state="2"] .modal__icon:nth-child(2),
  &[data-state="3"] .modal__icon:nth-child(3),
  &[data-state="1"] .modal__content:nth-child(2),
  &[data-state="2"] .modal__content:nth-child(3),
  &[data-state="3"] .modal__content:nth-child(4) {
    display: block;
  }

  &[data-ready="false"] .modal__content:first-child .modal__actions:nth-of-type(2),
  &[data-ready="true"] .modal__content:first-child .modal__actions:first-of-type {
    display: none;
  }

  &[data-ready="true"] .modal__content:first-child .modal__actions:nth-of-type(2) {
    display: flex;
  }

  @keyframes fadeSlideIn {
    from {
      opacity: 0;
      transform: translateY(33%);
    }

    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes sdo {
    to {
      stroke-dashoffset: 0;
    }
  }

  @media (min-width: 768px) {
    &__actions--center {
      justify-content: center;
      margin-left: -4.125em;
    }

    &__body {
      flex-direction: row;
      align-items: center;
    }

    &__button {
      width: auto;

      & + & {
        margin-top: 0;
        margin-left: 1.5rem;
      }
    }

    &__file ~ &__button {
      margin-top: 0;
    }

    &__file ~ &__close-button {
      margin-right: 1.5rem;
    }

    &__progress {
      margin-right: 2em;

      & + &__button {
        margin-top: 0;
      }
    }

    &__col + &__col {
      margin-top: 0;
      margin-left: 1.875em;
    }

    &__title {
      text-align: left;
    }
  }
}
</style>