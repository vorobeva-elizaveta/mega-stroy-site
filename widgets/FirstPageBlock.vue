<script setup>
import BaseButton from "~/shared/ui-kit/BaseButton.vue";
defineProps({
  backgroundImage: String,
  title: String,
});
</script>

<template>
  <div class="first-page-block">
    <div class="first-page-block__content">
      <div class="block-container">
        <slot name="title">
          <h1 class="first-page-block__title text-white">
            {{ title }}
          </h1>
        </slot>
        <slot name="button"> </slot>
      </div>
    </div>
    <div class="first-page-block__background">
      <img
        :src="backgroundImage || '/main-page-fist-block-background.jpeg'"
        alt=""
      />
    </div>
  </div>
</template>

<style lang='scss'>
.first-page-block {
  width: 100vw;
  height: 500px;
  position: relative;

  &__content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__background,
  &__background img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__background::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }
}
</style>