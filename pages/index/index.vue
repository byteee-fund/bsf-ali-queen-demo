<template>
  <view class="container">
    <!-- <button class="nav-button" @click="goToQueue">进入队列页面</button> -->
	 <button class="nav-button" @click="goToTest">进入测试页面</button>
	 <!-- <button class="nav-button" @click="goToImage">测试图片显示页面</button> -->
  </view>
</template>

<script>
export default {
  methods: {
    goToQueue() {
      uni.navigateTo({
        url: '/pages/index/queue'
      })
    },
	goToTest() {
	  uni.navigateTo({
	    url: '/pages/index/test'
	  })
	},
	goToImage() {
	  // 设置一个测试图片数据
	  uni.$store.dispatch("setSelfieImgBase64", "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=");
	  uni.navigateTo({
	    url: '/pages/index/image'
	  })
	}
  }
}
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
}

.nav-button {
  background-color: #007aff;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 500;
}
</style>