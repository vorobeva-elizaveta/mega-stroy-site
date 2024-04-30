<script setup>
import TheHeader from "~/widgets/TheHeader.vue";
import TheFooter from "~/widgets/TheFooter.vue";
</script>

<template>
  <div>
    <TheHeader></TheHeader>

    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss">
@import "./shared/styles/normalize.scss";
@import "./shared/styles/main.scss";

main {
  flex: 1 1 auto;
}
</style>
