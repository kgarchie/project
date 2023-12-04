<template>
  <Title>Start</Title>
  <div class="container">
    <section class="light">
      <h1>History</h1>
      <div class="flex history">
        <NuxtLink class="card" v-for="item in history">
          <span class="h4">{{item.title}}</span>
          <p class="p">{{ item.description }}</p>
          <div class="shine"></div>
        </NuxtLink>
      </div>
    </section>
  </div>
  <Footer/>
</template>
<style lang="scss">
.container {
  margin: auto;
  margin-top: 8rem;
  width: 80%;
  max-width: 1200px;
  isolation: isolate;
  position: relative;

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
import {userIsAuthenticated} from "~/helpers.client";

const user = useUser()
const history = ref([])

if(!userIsAuthenticated()) {
  navigateTo('/')
}

const response = await useFetch('/api/transcriptions/history/user/summary')

if(response && response.data.value === 200) history.value = response!.data!.value.body
</script>