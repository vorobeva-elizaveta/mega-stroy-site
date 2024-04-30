<script setup>
// import Swiper, { SwiperSlide } from "nuxt-swiper";
</script>

<template>
  <Swiper
    :modules="[SwiperNavigation, SwiperPagination]"
    :slides-per-view="1"
    :loop="true"
    :effect="'creative'"
    :autoplay="{
      delay: 8000,
      disableOnInteraction: true,
    }"
  >
    <SwiperSlide v-for="slide in 10" :key="slide">
      <p>slide {{ slide }}</p>
    </SwiperSlide>
  </Swiper>
</template>

<style lang='scss'>
.services-component {
  .swiper {
    width: 600px;
    height: 300px;
  }
}
</style>