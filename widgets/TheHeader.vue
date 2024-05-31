<script setup>
const isMenuActive = ref(false);
const toggleMenu = () => {
  isMenuActive.value = !isMenuActive.value;
};
const route = useRoute();

const onClickLink = () => {
  isMenuActive.value = false;
};
</script>

<template>
  <header class="the-header">
    <div class="the-header__container block-container">
      <img src="/logo.svg" alt="" class="the-header__logo" />
      <div class="the-header__menu-button" @click="toggleMenu">Меню</div>
      <div class="the-header__navigation" :class="{ open: isMenuActive }">
        <ul class="the-header__menu">
          <li class="menu__item" @click="onClickLink">
            <RouterLink to="/"> Главная </RouterLink>
          </li>
          <li class="menu__item" @click="onClickLink">
            <RouterLink to="/for-legal-entities">
              Для юридических лиц
            </RouterLink>
          </li>
          <li class="menu__item" @click="onClickLink">
            <RouterLink to="/#services">Услуги</RouterLink>
          </li>
          <li class="menu__item" @click="onClickLink">
            <RouterLink to="/#portfolio">Наши работы</RouterLink>
          </li>
          <li class="menu__item" @click="onClickLink">
            <RouterLink to="/#contacts">Контакты</RouterLink>
          </li>
        </ul>
        <div class="the-header__contact-number">
          <p><a class="underline hover:text-orange-500" href="tel:79005217771">+7 (900) 521 77 71</a></p>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang='scss'>
.the-header {
  background-color: #ffffff; /* Цвет фона хедера */
  padding: 20px; /* Отступы внутри хедера */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Тень хедера */
  position: sticky;
  top: 0;
  z-index: 100;

  &__logo {
    width: 70px;
  }

  &__menu-button {
    display: none;
  }
}

.the-header__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.the-header__navigation {
  display: flex; /* Отображение элементов в строку */
  justify-content: space-between; /* Равномерное распределение пространства между элементами */
  align-items: center; /* Выравнивание элементов по вертикали по центру */
}

.the-header__menu {
  list-style-type: none; /* Убираем маркеры списка */
  padding: 0; /* Убираем внутренние отступы списка */
  margin: 0; /* Убираем внешние отступы списка */
  display: flex; /* Отображаем пункты в строку */
}

.menu__item {
  margin-right: 20px; /* Отступ между пунктами меню */
  cursor: pointer; /* Изменение курсора при наведении на пункт меню */
  text-transform: uppercase;
  @apply text-lg   hover:text-orange-500;
}

@media (max-width: 1024px) {
  .the-header__navigation {
    display: none;
    transition: all 0.2s;

    &.open {
      position: fixed;
      display: flex !important;
      flex-direction: column;
      background: white;
      width: 100%;
      height: calc(100vh - 110px);
      top: 110px;
      left: 0;
      position: absolute;
      justify-content: start !important;
      row-gap: 16px;
    }

    .the-header__menu {
      flex-direction: column;
    }
  }

  .the-header__menu-button {
    display: block;
  }
}
</style>