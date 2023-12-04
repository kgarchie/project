<template>
  <nav class="footer">
    <ul ref="links">
      <li v-if="props.showDefault">
        <NuxtLink class="button start" to="/start">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12H4C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.25022 4 6.82447 5.38734 5.38451 7.50024L8 7.5V9.5H2V3.5H4L3.99989 5.99918C5.82434 3.57075 8.72873 2 12 2ZM13 7L12.9998 11.585L16.2426 14.8284L14.8284 16.2426L10.9998 12.413L11 7H13Z"></path>
          </svg>
        </NuxtLink>
      </li>
      <li v-if="props.showDefault">
        <NuxtLink class="button upload" to="/upload">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path
                d="M15 4H5V20H19V8H15V4ZM3 2.9918C3 2.44405 3.44749 2 3.9985 2H16L20.9997 7L21 20.9925C21 21.5489 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918ZM13 12V16H11V12H8L12 8L16 12H13Z">
            </path>
          </svg>
        </NuxtLink>
      </li>
      <slot/>
    </ul>
  </nav>
</template>
<script setup lang="ts">
const props = defineProps({
  showDefault: {
    type: Boolean,
    default: () => true
  }
})
</script>