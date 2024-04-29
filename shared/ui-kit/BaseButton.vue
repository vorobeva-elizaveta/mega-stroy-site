<script setup>
withDefaults(
  defineProps({
    tag: String,
  }),
  { tag: "button" }
);
</script>

<template>
  <component :is="tag" class="base-button">
    <p class="base-button__text">
      <slot></slot>
    </p>
  </component>
</template>

<style lang='scss'>
.base-button {
  width: fit-content;
  padding: 12px 10px;
  border-radius: 8px;

  &__text {
    @apply text-xl;
    font-family: PT Sans;
    font-weight: 700;
  }

  &.primary {
    @apply bg-orange-500 hover:bg-orange-400 active:bg-orange-600;

    .base-button__text {
      @apply text-white;
    }
  }

  &.secondary {
    @apply bg-blue-700;

    .base-button__text {
      @apply text-white;
    }
  }
}
</style>