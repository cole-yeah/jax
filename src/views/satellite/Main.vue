<template>
  <div class="container">
    <template v-for="(item, index) in list" :key="index">
      <div
        @click="flipHandle(item.key)"
        class="block"
        :class="activeKeys?.includes(item.key) ? '' : 'brightness'"
        :style="{
          backgroundImage: `url(${item.imgUrl[0]})`
        }"
      ></div>
    </template>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useLocalStorage } from '@vueuse/core'
import { list } from './constants'
const router_useRouter = useRouter()
const activeKeys = useLocalStorage('activeKeys', [])

const flipHandle = (key) => {
  router_useRouter.push({
    path: `/satellite/detail/${key}`
  })
}
</script>
<style scoped>
.container {
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.block {
  width: 31%;
  height: 7rem;
  background-repeat: no-repeat;
  background-size: cover;
  /* background-size: contain; */
}

.block:nth-child(3n + 3) {
  margin-bottom: 1rem;
}
.brightness {
  filter: brightness(50%);
}
</style>
