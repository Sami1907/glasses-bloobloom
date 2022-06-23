<template>
  <div class="item">
    <span class="item-title">{{ title }}</span>
    <img :src="glass" class="image-display"/>
  </div>
</template>
<script setup>
const props = defineProps(["title","glass"])

</script>
<style scoped>
.item {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: #afe6ff;
  height: 220px;
  width: 350px;
}
.item-title {
  font-size: 24px;
  font-style: bold;
  text-align: center;
  margin-top: 20px;
  position: absolute;
}
img{
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover; /* Resize the background image to cover the entire container */
  height: 220px;
  width: 350px;
  object-fit: cover;
}
</style>