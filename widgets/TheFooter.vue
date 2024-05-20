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
        <div class="flex flex-col gap-4 items-center md:items-start">
          <p>ООО "Крепость-плюс"</p>
          <p>Адрес: город Киров, переулок Энгельса, дом 2, этаж 4, офис 14</p>
          <p>ИНН: 4345507350</p>
          <p>ОГРН: 1204300011926</p>
        </div>
        <div class="flex flex-col gap-4 items-center md:items-start">
          <RouterLink to="/" class="hover:underline"> Главная </RouterLink>
          <RouterLink to="/#services" class="hover:underline">
            Услуги
          </RouterLink>
          <RouterLink to="/#portfolio" class="hover:underline">
            Наши работы
          </RouterLink>
        </div>
        <div class="flex flex-col gap-4 items-center md:items-start">
          <RouterLink
            to="/Politika_konfidencialnosti.pdf"
            target="_blank"
            class="hover:underline"
          >
            Политика конфиденциальности
          </RouterLink>
          <RouterLink to="/#services" class="hover:underline">
            Контакты
          </RouterLink>
        </div>
        <div class="flex flex-col items-center lg:items-start">
          <p>+7 912 376 51 60</p>
          <BaseButton tag="a" href="/#form" class="primary mt-4">
            Оформить заявку
          </BaseButton>
        </div>
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

  &__content {
    @apply flex flex-col md:flex-row gap-x-8 gap-y-4;
  }
}
</style>