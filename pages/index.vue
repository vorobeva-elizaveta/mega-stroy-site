<script setup>
import TheHeader from "~/widgets/TheHeader.vue";
import BaseButton from "~/shared/ui-kit/BaseButton.vue";
</script>

<template>
  <div class="main-page">
    <TheHeader></TheHeader>
    <div class="main-page__first-block">
      <div class="first-block__content">
        <div class="block-container">
          <h1 class="first-block__title text-white">
            Строительство и ремонт вашего дома/квартиры/офиса
          </h1>
          <BaseButton class="primary mt-4">Оформить заявку</BaseButton>
        </div>
      </div>
      <div class="main-page__first-block-background">
        <img src="/main-page-fist-block-background.jpeg" alt="" />
      </div>
    </div>
    <div class="main-page__about-company">
      <div class="about-company__container block-container">
        <h2>О Нас</h2>
        <div class="flex justify-between gap-4 flex-col md:flex-row">
          <p class="md:w-[50%] leading-7 text-xl mt-[20px]">
            Добро пожаловать в нашу компанию, где мы превращаем вашу мечту в
            реальность! Мы - команда профессионалов, специализирующаяся на
            ремонте квартир и строительстве, с богатым опытом и страстью к
            созданию прекрасных жилых пространств. Наш подход основан на
            индивидуальном внимании к каждому клиенту, высоком качестве
            исполнения работ и соблюдении сроков. Доверьте нам свои идеи, и мы
            сделаем все возможное, чтобы ваш дом стал идеальным местом для
            жизни.
          </p>
          <div class="about-company__image-container">
            <img
              class="about-company__image"
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="main-page__services">
      <div class="block-container">
        <h2>Услуги</h2>
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.main-page {
  &__first-block {
    width: 100vw;
    height: 500px;
    position: relative;
  }

  .first-block__content {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__first-block-background,
  &__first-block-background img {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__first-block-background::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    z-index: 1;
  }

  &__about-company,
  .about-company {
    padding: 50px 0;

    &__image-container {
      width: 100%;
      height: 300px;

      @media (min-width: 768px) {
        width: 50%;
      }
    }

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__services {
    padding: 50px 0;
  }
}
</style>