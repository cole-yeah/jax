<script setup>
import { useRoute } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'
import { list } from './constants'
import { computed, onBeforeUnmount, onMounted, onUnmounted, ref, watch } from 'vue'

const playStatus = ref(false)
const playIdx = ref(0) // 当前语音下标

const { params } = useRoute()
const activeKeys = useLocalStorage('activeKeys', [])
const key = params?.key
const item = list.find((item) => item.key === key) || {}

onMounted(() => {
  if (!item?.key || !key) return
  const audioEl = document.getElementById('audio')
  audioEl.addEventListener('playing', () => {
    resetPlayStatus(true)
  })
  audioEl.addEventListener('ended', () => {
    resetPlayStatus(false)
  })
  activeKeys.value.push(key)
})

onBeforeUnmount(() => {
  playIdx.value = 0
  playStatus.value = false
  const audioEl = document.getElementById('audio')
  audioEl.removeEventListener('playing', () => {})
  audioEl.removeEventListener('ended', () => {})
})

const resetPlayStatus = (status) => {
  playStatus.value = status
}

const playAudio = () => {
  const audioEl = document.getElementById('audio')
  audioEl.play()
}

const pauseAudio = () => {
  const audioEl = document.getElementById('audio')
  audioEl.pause()
}

watch(playStatus, (val) => {
  val ? playAudio() : pauseAudio()
})

const voiceUrl = computed(() => {
  if (Array.isArray(item.voice)) {
    return item.voice[playIdx.value]
  }
  return item.voice
})
</script>

<template>
  <div class=".detailWrap" @click="resetPlayStatus(true)">
    <div
      :class="`iconWrap ${playIdx === 0 && playStatus ? 'active' : ''}`"
      @click="
        (e) => {
          e.stopPropagation()
          resetPlayStatus(!playStatus)
          if (playIdx !== 0) {
            playIdx = 0
          }
        }
      "
    >
      <van-icon class="music" name="music-o" />
    </div>
    <div
      v-if="Array.isArray(item.voice) && item.voice.length === 2"
      :class="`iconWrap extraIconWrap ${playIdx === 1 && playStatus ? 'active' : ''}`"
      @click="
        (e) => {
          e.stopPropagation()
          resetPlayStatus(!playStatus)
          if (playIdx !== 1) {
            playIdx = 1
          }
        }
      "
    >
      <van-icon class="music" name="music-o" />
    </div>
    <audio autoplay :src="voiceUrl" id="audio"></audio>
    <template v-if="Array.isArray(item.imgUrl)">
      <van-image
        class="detailImg"
        v-for="(url, idx) in item.imgUrl"
        :key="idx"
        :src="url"
      ></van-image>
    </template>
    <van-image v-else :src="item.imgUrl"></van-image>
  </div>
</template>

<style scoped>
@keyframes ani {
  0% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.iconWrap {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 4vh;
  right: 4vw;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
  border-radius: 50%;
  padding: 1px;
}
.extraIconWrap {
  top: 60vh;
  right: 86vw;
}
.music {
  font-size: 30px;
  color: #fff;
}
.active {
  animation: ani 2s infinite linear;
}
.detailImg {
  display: block;
}
</style>
