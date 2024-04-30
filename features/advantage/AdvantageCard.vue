<script setup>
defineProps({
  advantageData: Object,
  icon: String,
});
</script>

<template>
  <div class="advantage-card">
    <div class="advantage-card__container">
      <div class="advantage-card__image-container">
        <font-awesome
          :icon="icon || 'user'"
          :style="{
            'font-size': '40px',
            color: 'rgb(249 115 22 / var(--tw-border-opacity))',
          }"
        />
      </div>
      <div class="advantage-card__description-container">
        <div class="advantage-card__title">{{ advantageData.title }}</div>
        <div class="advantage-card__description">
          {{ advantageData.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.advantage-card {
  &__image-container {
    border-radius: 99999px;
    @apply flex items-center justify-center border-[3px] border-orange-500 border-solid w-[100px] h-[100px];
  }

  &__container {
    @apply flex flex-col items-center gap-3;
  }

  &__description-container {
    @apply flex flex-col items-center gap-2;
  }

  &__title {
    font-weight: 700;
    @apply text-xl text-center;
  }

  &__description {
    @apply text-lg text-center;
  }
}
</style>