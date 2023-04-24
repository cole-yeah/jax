<script setup>
import { ref } from 'vue'

const visible = ref(false)

const handleVisible = () => {
  visible.value = true
}
</script>

<template>
  <div class="footer">
    <div></div>
    <van-button type="primary" @click="handleVisible">关注</van-button>
  </div>
  <van-popup v-model:show="visible">
    <van-image></van-image>
    <div>999999</div>
  </van-popup>
</template>

<style scoped>
.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 16px 24px;
  background-color: #4a4a4a40;
}
</style>
