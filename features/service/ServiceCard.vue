<script setup>
defineProps({
  imagePath: {
    type: String,
  },
  reverse: Boolean,
  serviceData: Object,
});
</script>

<template>
  <div class="service-card">
    <div class="service-card__container" :class="{ reverse }">
      <div class="service-card__left-block">
        <img :src="imagePath" alt="service-image" />
      </div>
      <div class="service-card__right-block">
        <h3 class="service-card__title">{{ serviceData.title }}</h3>
        <p class="service-card__description">
          {{ serviceData.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.service-card {
  border-radius: 8px;
  overflow: hidden;
  &__container {
    @apply md:flex block;

    &.reverse {
      @apply flex-row-reverse;
    }
  }

  &__left-block {
    @apply w-full h-auto relative;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__right-block {
    padding: 24px;
    width: 100%;
    @apply bg-white;
  }

  &__title {
    @apply text-xl mb-4;
    font-weight: 700;
  }

  &__description {
    @apply text-lg;
  }
}
</style>