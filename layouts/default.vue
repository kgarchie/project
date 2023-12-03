<script setup lang="ts">
import {userIsAuthenticated} from "~/helpers.client";
</script>
<template>
  <div id="wrapper">
    <nav class="main">
      <ul class="nav-links">
        <li>
          <NuxtLink class="link" to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink class="link" to="/contact">Contact</NuxtLink>
        </li>
        <li>
          <NuxtLink class="button sign in" :to="userIsAuthenticated() ? '/profile' : '/login'">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path
                  d="M9.74462 21.7446C5.30798 20.7219 2 16.7473 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 16.7473 18.692 20.7219 14.2554 21.7446L12 24L9.74462 21.7446ZM7.01173 18.2567C7.92447 18.986 9.00433 19.5215 10.1939 19.7957L10.7531 19.9246L12 21.1716L13.2469 19.9246L13.8061 19.7957C15.0745 19.5033 16.2183 18.9139 17.1676 18.1091C15.8965 16.8078 14.1225 16 12.1597 16C10.1238 16 8.29083 16.8692 7.01173 18.2567ZM5.61562 16.8214C7.25644 15.0841 9.58146 14 12.1597 14C14.644 14 16.8931 15.0065 18.5216 16.634C19.4563 15.3185 20 13.7141 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 13.7964 4.59708 15.4722 5.61562 16.8214ZM12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13ZM12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z">
              </path>
            </svg>
          </NuxtLink>
        </li>
      </ul>
    </nav>
    <main>
      <slot/>
    </main>
  </div>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@800&family=Poppins:wght@100;400;600;800&display=swap');

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "Volte", "Roboto", sans-serif;
  background-color: #fff;
  color: rgb(50, 50, 100);
}

#wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

nav {
  width: 100%;
  display: flex;
  justify-content: center;
  z-index: 1000000;
}

.nav-links {
  background-color: rgb(76 49 78 / 0.8);
  backdrop-filter: blur(10px);
  display: flex;
  padding: 0.75em;
  border-radius: 1em;
  padding: 1em;
  list-style: none;
  position: fixed;
  align-items: center;
  height: 3.5em;
  width: 80%;
  max-width: 1200px;
  top: 2%;

  li:last-child {
    margin-left: auto;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 0.6em 0.8em;
    border-radius: 0.6em;

    &.router-link-active {
      font-weight: bolder;

      background-color: rgb(247 198 245 / 0.2);
    }

    &:hover {
      background-color: rgb(76 49 78 / 0.5);
    }
  }
}

.button {
  border: none;
  border-radius: 0.5em;
  font-size: 1em;
  text-decoration: none;
  color: #fff;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  padding: 0.6em 0.8em;

  &.sign {
    padding: 0.5em;
    display: grid;
    place-items: center;

    svg {
      width: 1.6em;
      height: 1.6em;
      fill: #fff;
    }

    &:hover {
      background-color: rgb(76 49 78 / 0.8);
    }
  }
}

.footer {
  ul {
    display: flex;
    background-color: rgb(23 23 38 / 0.7);
    position: fixed;
    backdrop-filter: blur(10px);
    justify-content: center;
    align-items: center;
    list-style: none;
    margin: 0 auto;
    bottom: 2%;

    border-radius: 0.5em;
    padding: 0.3em 0.4em;

    a, div {
      border-radius: 0.6em;
      padding: 0.6em 0.8em;
      display: grid;
      place-items: center;

      svg,
      img {
        width: 1.6em;
        height: 1.6em;
        fill: #fff;
      }

      &:hover {
        background-color: rgb(76 49 78 / 0.8);
      }

      &.router-link-active {
        background-color: rgb(76 49 78 / 0.5);
      }
    }
  }
}
</style>
