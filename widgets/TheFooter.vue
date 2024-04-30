<script setup>
import BaseButton from "~/shared/ui-kit/BaseButton.vue";
</script>

<template>
  <footer class="the-footer">
    <div class="the-footer__container block-container">
      <img
        width="110px"
        height="110px"
        src="/logo.svg"
        alt=""
        class="the-footer__logo"
      />
      <div class="the-footer__content">
        <p>+7 912 376 51 60</p>
        <BaseButton tag="a" class="primary mt-4">Оформить заявку</BaseButton>
      </div>
    </div>
  </footer>
</template>

<style lang='scss'>
.the-footer {
  @apply py-8 bg-gray-800;

  * {
    color: white;
  }

  &__container {
    @apply flex md:flex-row flex-col gap-8 items-center justify-between;
  }

  &__logo {
    width: 110px;
    height: 110px;
  }
}
</style>