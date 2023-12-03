<script setup lang="ts">
const video = ref<HTMLVideoElement>()
const props = defineProps({
  feed: {
    type: Object as PropType<{
      image_url: string
      srcObject: MediaStream | null
    }>,
    required: true
  },
})

onMounted(() => {
  if(props.feed.srcObject && video.value) video.value.srcObject = props.feed.srcObject
})
</script>

<template>
  <div class="video-participant">
    <slot/>
    <a href="#" class="name-tag">Andy Will</a>
    <img v-if="!feed.srcObject"
         :src="feed.image_url"
         alt="participant">
    <video v-else ref="video" autoplay muted></video>
  </div>
</template>

<style scoped lang="scss">
.video-participant {
  width: 33.3%;
  height: 50%;
  position: relative;

  img, video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
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


@media screen and (max-width: 520px) and (max-height: 720px) {
  .video-participant {
    width: 50%;
    height: 33.3%;
  }
}
</style>