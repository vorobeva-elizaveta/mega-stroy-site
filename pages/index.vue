<script setup>
import BaseButton from "~/shared/ui-kit/BaseButton.vue";
import PortfolioComponent from "~/widgets/portfolio/PortfolioComponent.vue";
import ServiceCard from "~/features/service/ServiceCard.vue";
import AdvantageCard from "~/features/advantage/AdvantageCard.vue";
import Form from "~/features/Form.vue";
import ContactsBlock from "~/widgets/ContactsBlock.vue";

useHead({
  title: "Главная страница",
  meta: [
    {
      name: "description",
      content:
        "Добро пожаловать на сайт строительной компании МегаСтрой. Мы специализируемся на качественном строительстве жилых и коммерческих объектов. Наша команда опытных специалистов предлагает полный спектр услуг: от проектирования и строительства до ремонта и обслуживания. Мы стремимся к высочайшему уровню качества, надежности и инноваций в каждом проекте. Свяжитесь с нами сегодня, чтобы превратить вашу мечту в реальность.",
    },
  ],
});

const services = [
  {
    title: "Ремонт квартир/домов/офисов",
    description:
      "Приведите свое жилище или рабочее пространство к идеальному состоянию с нашими услугами по ремонту квартир, домов и офисов. Наши опытные специалисты воплотят ваши желания в реальность с профессионализмом, вниманием к деталям и в срок. Ваше пространство будет выглядеть свежим, современным и функциональным благодаря нашему качественному подходу к ремонту.",
    image:
      "https://images.unsplash.com/photo-1501876725168-00c445821c9e?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Строительство частных домов",
    description:
      "Откройте дверь в мир индивидуального комфорта с нашими услугами по строительству частных домов. Мы предлагаем полный спектр услуг, начиная от проектирования и выбора материалов, и заканчивая строительством под ключ. Наша команда специалистов обеспечит вас персональным подходом, качественной работой и соблюдением сроков. Ваш новый дом станет не просто строением, а уютным убежищем, отражающим ваш стиль и предпочтения, где каждая деталь будет пропитана заботой и вниманием к вашим потребностям.",
    image:
      "https://images.unsplash.com/photo-1586175554766-77513ac248d0?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const advantages = [
  {
    title: "Профессиональный подход",
    description:
      "Наша компания обладает многолетним опытом и экспертизой в области ремонта и строительства, гарантируя высокое качество и безупречный результат.",
    icon: "user-tie",
  },
  {
    title: "Индивидуальный дизайн",
    description:
      "Мы создаем уникальные проекты, отвечающие вашим потребностям и воплощающие вашу индивидуальность, обеспечивая комфорт и функциональность в каждой детали.",
    icon: "paint-roller",
  },
  {
    title: "Прозрачная коммуникация",
    description:
      "Мы ценим каждого клиента и придаем важность открытому обмену информацией и пониманию ваших ожиданий, обеспечивая прозрачность в процессе работы.",
    icon: "user-group",
  },
  {
    title: "Соблюдение сроков и бюджета",
    description:
      "Мы стремимся к эффективному управлению проектом, чтобы завершить работу в срок и в рамках оговоренного бюджета, предоставляя вам максимальное удовлетворение от результата.",
    icon: "calendar-check",
  },
];

const formData = ref();
</script>

<template>
  <div class="main-page">
    <div class="main-page__first-block">
      <div class="first-block__content">
        <div class="block-container">
          <h1 class="first-block__title text-white">
            Строительство и ремонт вашего дома/квартиры/офиса
          </h1>
          <BaseButton tag="a" href="#form" class="primary mt-4">
            Оформить заявку
          </BaseButton>
        </div>
      </div>
      <div class="main-page__first-block-background">
        <img src="/main-page-fist-block-background.jpeg" alt="" />
      </div>
    </div>
    <div class="main-page__about-company">
      <div
        class="about-comp components: { ServiceCard },any__container block-container"
      >
        <h2>О Нас</h2>
        <div class="flex justify-between gap-4 flex-col md:flex-row mt-6">
          <p class="md:w-[50%] leading-7 text-xl">
            Добро пожаловать в нашу компанию, где мы превращаем вашу мечту в
            реальность! Мы - команда профессионалов, специализирующаяся на
            ремонте квартир и строительстве, с богатым опытом и страстью к
            созданию прекрасных жилых пространств. Наш подход основан на
            индивидуальном внимании к каждому клиенту, высоком качестве
            исполнения работ и соблюдении сроков. Доверьте нам свои идеи, и мы
            сделаем все возможное, чтобы ваш дом стал идеальным местом для
            жизни.
          </p>
          <div
            class="about-company__image-container rounded-lg overflow-hidden"
          >
            <img
              class="about-company__image"
              src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div class="main-page__services bg-gray-50" id="services">
      <div class="block-container">
        <h2>Услуги</h2>
        <div class="services__content lg:flex justify-between block gap-6 mt-6">
          <div class="lg:w-1/3 mb-6 lg:mb-0 services__left-side">
            <p class="leading-7 text-xl">
              Откройте дверь к безупречным решениям для вашего дома с нашим
              разнообразным спектром услуг. Мы предлагаем полный цикл ремонта
              квартир и строительства, включая дизайн интерьера, ремонтные
              работы любого масштаба, установку сантехники, электрические
              работы, отделку и многое другое. Независимо от вашего проекта,
              наша команда опытных специалистов готова воплотить ваши идеи в
              реальность с непревзойденным качеством и вниманием к деталям.
            </p>
            <BaseButton tag="a" class="primary mt-4">
              Оформить заявку
            </BaseButton>
          </div>
          <div class="services__right-side lg:w-2/3">
            <ServiceCard
              v-for="(service, index) in services"
              :key="service"
              class="mb-4"
              :serviceData="service"
              :imagePath="service.image"
              :reverse="index % 2 == 0"
            ></ServiceCard>
          </div>
        </div>
      </div>
    </div>
    <div class="main-page__advantages">
      <div class="block-container py-[50px]">
        <h2>Преимущества работы с нами</h2>
        <div
          class="advantages__content pt-8 flex lg:flex-row flex-col justify-between gap-4"
        >
          <AdvantageCard
            v-for="(advantage, index) in advantages"
            :key="index"
            :advantageData="advantage"
            :icon="advantage?.icon"
          />
        </div>
      </div>
    </div>
    <div class="main-page__portfolio bg-gray-50" id="portfolio">
      <div class="block-container py-[50px]">
        <h2>Наши работы</h2>
        <PortfolioComponent class="mt-5"></PortfolioComponent>
      </div>
    </div>
    <div class="main-page__form" id="form">
      <div class="block-container py-[50px] flex items-center flex-col">
        <h2 class="mb-5">Форма заявки</h2>
        <Form v-model="formData" class="md:w-1/2 w-full"> </Form>
      </div>
    </div>
    <div class="main-page__" id="contacts">
      <div class="block-container py-[50px]">
        <ContactsBlock />
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