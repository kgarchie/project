<template>
  <Title>Start</Title>
  <div class="container">
    <header>
      <div class="flex">
        <div class="user">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path fill="currentColor"
                  d="M19.5761 14.5764L15.7067 10.707C15.3162 10.3164 14.683 10.3164 14.2925 10.707L6.86484 18.1346C5.11358 16.6671 4 14.4636 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12C20 12.9014 19.8509 13.7679 19.5761 14.5764ZM8.58927 19.2386L14.9996 12.8283L18.6379 16.4666C17.1992 18.6003 14.7613 19.9998 11.9996 19.9998C10.7785 19.9998 9.62345 19.7268 8.58927 19.2386ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22ZM11 10C11 11.1046 10.1046 12 9 12C7.89543 12 7 11.1046 7 10C7 8.89543 7.89543 8 9 8C10.1046 8 11 8.89543 11 10Z">
            </path>
          </svg>
          <div class="name">Welcome, <span style="text-transform: capitalize">{{ user?.name }}</span></div>
        </div>
        <div class="actions">
          <div class="notifications">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                    d="M12 2C16.9706 2 21 6.04348 21 11.0314V20H3V11.0314C3 6.04348 7.02944 2 12 2ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z">
                </path>
              </svg>
            </button>
          </div>
          <div class="new">
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor"
                      d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 11H7V13H11V17H13V13H17V11H13V7H11V11Z">
                </path>
              </svg>
              <NuxtLink to="/meeting" style="text-decoration: none; color: inherit;">New Meeting</NuxtLink>
            </button>
          </div>
        </div>
      </div>
    </header>
    <section class="light">
      <h1>History</h1>
      <div class="flex history">
        <NuxtLink class="card">
          <span class="h4">Today</span>
          <p class="p">Description</p>
          <div class="shine"></div>
        </NuxtLink>
      </div>
      <h1>Upcoming</h1>
      <div class="flex upcoming">
      </div>
    </section>
  </div>
  <Footer/>
</template>
<style lang="scss">
.container {
  width: 80%;
  max-width: 1200px;
  margin: auto;
  isolation: isolate;
  position: relative;


  header {
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    margin-top: 5.5rem;
    border-radius: 10px;
    padding: 2rem;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
    background-color: rgba(76, 49, 78, 0.5);


    .flex {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 90%;
      color: white;

      .user {
        display: flex;
        justify-content: center;
        align-items: center;

        svg {
          width: 30px;
          height: 30px;
          margin-right: 10px;
        }

        .name {
          font-size: 20px;
          font-weight: 500;
        }
      }
    }

    .actions {
      display: flex;
      justify-content: center;
      align-items: center;

      .new {
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #41b883;
          border: none;
          border-radius: 5px;
          padding: 10px 20px;
          color: white;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            background-color: #059669;
          }

          svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
        }
      }

      .notifications {
        button {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: transparent;
          border: none;
          border-radius: 5px;
          padding: 10px;
          fill: white;
          cursor: pointer;
          transition: all 0.2s ease-in-out;

          &:hover {
            fill: #10B981;
          }

          svg {
            width: 20px;
            height: 20px;
            margin-right: 10px;
          }
        }
      }
    }
  }

  .light {
    z-index: 1;
    --background-color: #f5f5f5;
    --text-color: #52525B;

    --card-background-color: transparent;
    --card-border-color: rgba(24, 24, 27, 0.08);
    --card-box-shadow-1: rgba(24, 24, 27, 0.02);
    --card-box-shadow-1-y: 3px;
    --card-box-shadow-1-blur: 6px;
    --card-box-shadow-2: rgba(24, 24, 27, 0.04);
    --card-box-shadow-2-y: 2px;
    --card-box-shadow-2-blur: 7px;
    --card-label-color: #18181B;
    --card-icon-color: #18181B;
    --card-icon-background-color: rgba(24, 24, 27, 0.04);
    --card-icon-border-color: rgba(24, 24, 27, 0.1);
    --card-shine-opacity: .3;
    --card-shine-gradient: conic-gradient(from 225deg at 50% 50%, rgba(16, 185, 129, 0) 0deg, #10B981 25deg, #EDFAF6 285deg, #FFFFFF 345deg, rgba(16, 185, 129, 0) 360deg);
    --card-line-color: #E9E9E7;
    --card-tile-color: rgba(16, 185, 129, 0.08);

    --card-hover-border-color: rgba(24, 24, 27, 0.15);
    --card-hover-box-shadow-1: rgba(24, 24, 27, 0.05);
    --card-hover-box-shadow-1-y: 3px;
    --card-hover-box-shadow-1-blur: 6px;
    --card-hover-box-shadow-2: rgba(24, 24, 27, 0.1);
    --card-hover-box-shadow-2-y: 8px;
    --card-hover-box-shadow-2-blur: 15px;
    --card-hover-icon-color: #18181B;
    --card-hover-icon-background-color: rgba(24, 24, 27, 0.04);
    --card-hover-icon-border-color: rgba(24, 24, 27, 0.34);

    --blur-opacity: .1;

    grid-gap: 1rem;
    margin: auto;
    font-family: 'Inter', Arial;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-top: 0.5rem;

    .flex {
      width: 100%;
      display: flex;
      align-items: center;
      border-radius: 10px;
      gap: 1rem;
      position: relative;
      z-index: 1;
      padding: 2rem;
    }

    h1 {
      margin-bottom: 5px;
    }

    .history {
      margin-bottom: 2rem;
      background-color: var(--background-color);
    }

    .upcoming {
      background-color: var(--background-color);
    }

    .card {
      width: 300px;
      max-width: 40vw;
      background-color: var(--background-color);
      box-shadow: 0px var(--card-box-shadow-1-y) var(--card-box-shadow-1-blur) var(--card-box-shadow-1), 0px var(--card-box-shadow-2-y) var(--card-box-shadow-2-blur) var(--card-box-shadow-2), 0 0 0 1px var(--card-border-color);
      padding: 16px 16px 16px 16px;
      border-radius: 15px;
      cursor: pointer;
      position: relative;
      transition: box-shadow .25s;

      &::before {
        content: '';
        position: absolute;
        inset: 0;
        border-radius: 15px;
        background-color: var(--card-background-color);
      }

      .icon {
        z-index: 2;
        position: relative;
        display: table;
        padding: 8px;

        &::after {
          content: '';
          position: absolute;
          inset: 4.5px;
          border-radius: 50%;
          background-color: var(--card-icon-background-color);
          border: 1px solid var(--card-icon-border-color);
          backdrop-filter: blur(2px);
          transition: background-color .25s, border-color .25s;
        }

        img {
          position: relative;
          z-index: 1;
          display: block;
          width: 24px;
          height: 24px;
          transform: translateZ(0);
          color: var(--card-icon-color);
          transition: color .25s;
        }
      }

      .h4{
        z-index: 2;
        position: relative;
        margin: 12px 0 4px 0;
        font-family: inherit;
        font-weight: 600;
        font-size: 14px;
        line-height: 2;
        color: var(--card-label-color);
      }

      .p {
        z-index: 2;
        position: relative;
        margin: 0;
        font-size: 14px;
        line-height: 1.7;
        color: var(--text-color);
      }

      .shine {
        border-radius: inherit;
        position: absolute;
        inset: 0;
        z-index: 1;
        overflow: hidden;
        opacity: 0;
        transition: opacity .5s;

        &:before {
          content: '';
          width: 150%;
          padding-bottom: 150%;
          border-radius: 50%;
          position: absolute;
          left: 50%;
          bottom: 55%;
          filter: blur(35px);
          opacity: var(--card-shine-opacity);
          transform: translateX(-50%);
          background-image: var(--card-shine-gradient);
        }
      }

      &:hover {
        box-shadow: 0px 3px 6px var(--card-hover-box-shadow-1), 0px var(--card-hover-box-shadow-2-y) var(--card-hover-box-shadow-2-blur) var(--card-hover-box-shadow-2), 0 0 0 1px var(--card-hover-border-color);

        .icon {
          &::after {
            background-color: var(--card-hover-icon-background-color);
            border-color: var(--card-hover-icon-border-color);
          }

          svg {
            color: var(--card-hover-icon-color);
          }
        }

        .shine {
          opacity: 1;
          transition-duration: .5s;
          transition-delay: 0s;
        }

        .background {

          .tiles {
            opacity: 1;
            transition-delay: .25s;

            .tile {
              animation-name: tile;
            }
          }

          .line {
            opacity: 1;
            transition-duration: .15s;

            &:before {
              transform: scaleX(1);
            }

            &:after {
              transform: scaleY(1);
            }

            &.line-1 {

              &:before,
              &:after {
                transition-delay: .0s;
              }
            }

            &.line-2 {

              &:before,
              &:after {
                transition-delay: .15s;
              }
            }

            &.line-3 {

              &:before,
              &:after {
                transition-delay: .3s;
              }
            }
          }
        }
      }
    }
  }
}
</style>
<script setup lang="ts">
const user = useUser()
</script>