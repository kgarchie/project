<template>
  <Title>Home</Title>
  <img src="/images/animated.gif" alt="" class="bg">
  <div class="landing">
    <div class="center left">
      <div class="explainer">
        <div class="text">Get Meeting Transcriptions <br> and Summaries</div>
        You are welcome to use this service to transcribe your meetings.
        There is a browser extension that you can use to record your meetings.
        You can also upload your own audio or video files.
        <ul class="feature-list">
          <li>
          <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                      d="M4.99805 15V19H8.99805V21H2.99805V15H4.99805ZM20.998 15V21H14.998V19H18.998V15H20.998ZM12.998 6V18H10.998V6H12.998ZM8.99805 9V15H6.99805V9H8.99805ZM16.998 9V15H14.998V9H16.998ZM8.99805 3V5H4.99805V9H2.99805V3H8.99805ZM20.998 3V9H18.998V5H14.998V3H20.998Z">
                  </path>
              </svg>
          </span>
            <span>Transcription</span>
          </li>
          <li>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                        d="M21 8V20.9932C21 21.5501 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.4487 2 4.00221 2H14.9968L21 8ZM19 9H14V4H5V20H19V9ZM8 7H11V9H8V7ZM8 11H16V13H8V11ZM8 15H16V17H8V15Z">
                    </path>
                </svg>
            </span>
            <span>Summaries</span>
          </li>
        </ul>
      </div>
      <div class="call-to-action">
        <NuxtLink to="/register" class="button start">Get Started</NuxtLink>
        <NuxtLink to="/login" class="button sign-in">Sign In</NuxtLink>
      </div>
    </div>
  </div>
  <Footer/>
</template>
<script setup>
</script>
<style scoped lang="scss">
.bg {
  position: absolute;
  object-fit: cover;
  width: 1000px;
  object-position: center;
  z-index: -1;
  bottom: 0;
  right: 0;
}

.landing {
  width: 100vw;
  max-width: 1200px;
  margin: auto;
  height: 100vh;
  display: grid;
  place-items: center;


  .center {
    border-radius: 1rem;
    display: flex;
    background: rgb(245 245 245 / 0.5);
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    backdrop-filter: blur(50px);
    padding: 2rem 2.5rem;
    max-width: 800px;
    margin-left: -100px;
    height: fit-content;


    .text {
      font-size: 2.5rem;
      line-height: 1.5ch;
      font-weight: 700;
      margin-bottom: 1rem;
      font-family: "Poppins", sans-serif;
    }

    .explainer {
      font-size: 1.3rem;
      font-weight: 100;
      margin-bottom: 2rem;

      .feature-list {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;

        li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 1.1rem;

          span {
            display: flex;
            align-items: center;

            svg {
              width: 1.5rem;
              height: 1.5rem;
              fill: rgb(76 49 78 / 0.8);
            }
          }
        }
      }
    }

    &.left {
      margin-left: 10vh;
    }

    @media (max-width: 1024px) {
      scale: 0.8;
    }

    @media (max-width: 768px) {
      padding: 1.5rem;

      .text {
        font-size: 2.5rem;
        line-height: 1.5ch;
      }
      &.left {
        margin-left: 0;
      }
    }
  }

  .call-to-action {
    margin-top: 1rem;

    .button {
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      font-size: 1.1rem;
      font-weight: 600;
      border: 1px solid rgb(76 49 78 / 0.8);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-family: "Poppins", sans-serif;

      &.start {
        background: rgb(76 49 78 / 0.8);
        color: #fff;
        margin-right: 1rem;
      }

      &.sign-in {
        background: #fff;
        color: rgb(76 49 78 / 0.8);
      }

      &:hover {
        transform: scale(1.05);
      }
    }
  }
}
</style>