<script setup>
defineProps({
  projectData: Object,
});
</script>

<template>
  <div class="project-card">
    <div class="project-card__container">
      <div class="project-card__left-block">
        <img :src="projectData.image" alt="" />
      </div>
      <div class="project-card__right-block">
        <h3 class="project-card__title">{{ projectData.title }}</h3>
        <p class="project-card__description">{{ projectData.description }}</p>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.project-card {
  border-radius: 8px;
  overflow: hidden;
  height: 100%;
  &__container {
    @apply flex flex-col lg:flex-row w-full;
  }

  &__left-block {
    @apply w-full  lg:max-w-[50%];
    position: relative;
    height: auto;
    min-height: 300px;

    img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__right-block {
    @apply w-full lg:max-w-[50%];
    padding: 20px;
    background: white;
  }

  &__description {
    @apply text-base mt-4;
  }
}
</style>