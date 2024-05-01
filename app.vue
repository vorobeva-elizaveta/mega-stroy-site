<script setup>
import TheHeader from "~/widgets/TheHeader.vue";
import TheFooter from "~/widgets/TheFooter.vue";
</script>

<template>
  <div class="main-layout">
    <TheHeader></TheHeader>
    <main>
      <NuxtPage />
    </main>
    <TheFooter />
  </div>
</template>

<style lang="scss">
@import url("./shared/styles/normalize.scss");
@import url("./shared/styles/main.scss");

:root {
  --primary-50: 245 249 255;
  --primary-100: 208 225 253;
  --primary-200: 171 201 251;
  --primary-300: 133 178 249;
  --primary-400: 96 154 248;
  --primary-500: 59 130 246;
  --primary-600: 50 111 209;
  --primary-700: 41 91 172;
  --primary-800: 32 72 135;
  --primary-900: 24 52 98;
  --primary-950: 2 44 34;
  --surface-0: 255 255 255;
  --surface-50: 248 250 252;
  --surface-100: 241 245 249;
  --surface-200: 226 232 240;
  --surface-300: 203 213 225;
  --surface-400: 148 163 184;
  --surface-500: 100 116 139;
  --surface-600: 71 85 105;
  --surface-700: 45 55 72;
  --surface-800: 30 41 59;
  --surface-900: 15 23 42;
  --surface-950: 3 6 23;
}

.main-layout {
  @apply flex flex-col;
  min-height: 100vh;

  main {
    width: 100%;
    flex: 1 1 auto;
  }
}
</style>
