<script setup>
import FirstPageBlock from "../widgets/FirstPageBlock.vue";
import Form from "~/features/Form.vue";
import BaseButton from "~/shared/ui-kit/BaseButton.vue";
import AdvantageCard from "~/features/advantage/AdvantageCard.vue";
import ContactsBlock from "~/widgets/ContactsBlock.vue";

useHead({
  title: "Для юридических лиц",
  meta: [
    {
      name: "description",
      content:
        "Строительная компания МегаСтрой предлагает комплексные строительные решения для юридических лиц. Мы специализируемся на выполнении строительных проектов любого масштаба: от небольших офисных помещений до крупных промышленных объектов. Наш опытный персонал готов обеспечить вас высоким уровнем профессионализма, строгим соблюдением сроков и бюджетов проектов. Сотрудничество с нами гарантирует успешную реализацию ваших строительных задач. Свяжитесь с нами сегодня, чтобы начать сотрудничество.",
    },
  ],
});

const formData = ref({
  isLegalEntity: true,
});
</script>

<template>
  <div class="for-legal-entities-page">
    <FirstPageBlock title="Услуги для юридических лиц">
      <template #button>
        <BaseButton tag="a" href="#form" class="primary mt-4">
          Оформить заявку
        </BaseButton>
      </template>
    </FirstPageBlock>
    <div class="for-legal-entities-page__welcome-block py-[50px]">
      <div class="block-container">
        <h2>Добро пожаловать!</h2>
        <div class="welcome-block__content mt-5">
          <p class="text-lg">
            МегаСтрой - это надежный партнер для предприятий всех размеров,
            предоставляющий широкий спектр услуг в сфере строительства,
            реконструкции и дизайна. Наш опыт и профессионализм позволяют нам
            создавать индивидуальные решения, соответствующие вашим потребностям
            и ожиданиям.
          </p>
          <p class="text-lg my-4">
            Мы стремимся к долгосрочному сотрудничеству, основанному на взаимном
            доверии, прозрачности и высоком качестве услуг. Наша команда
            квалифицированных специалистов готова предложить вам
            профессиональную помощь на всех этапах проекта - от консультации и
            проектирования до строительства и сопровождения.
          </p>
          <p class="text-lg">
            Мы уверены, что сотрудничество с МегаСтрой станет для вашей компании
            ключом к успеху и процветанию.
          </p>
        </div>
      </div>
    </div>
    <div class="for-legal-entities-page__advantages bg-gray-50">
      <div class="block-container py-[50px]">
        <h2>Преимущества работы с нами</h2>
        <div class="flex flex-col lg:flex-row justify-between gap-4 mt-8">
          <AdvantageCard
            icon="flask"
            :advantageData="{
              title: 'Экспертное консультирование',
              description:
                'Наша компания предоставляет квалифицированные консультации по юридическим вопросам, помогая вашему бизнесу принимать обоснованные и грамотные решения в соответствии с законодательством.',
            }"
          />
          <AdvantageCard
            icon="paint-roller"
            :advantageData="{
              title: 'Персонализированный подход',
              description:
                'Мы стремимся понять уникальные потребности и цели каждого клиента, чтобы предложить индивидуальные решения, нацеленные на достижение конкретных бизнес-целей',
            }"
          />
          <AdvantageCard
            icon="trowel"
            :advantageData="{
              title: 'Эффективное решение задач',
              description:
                'Наша команда специалистов обладает опытом и знаниями, необходимыми для решения самых сложных юридических вопросов, что позволяет нам обеспечивать высокий уровень сервиса и результатов',
            }"
          />
          <AdvantageCard
            icon="building-shield"
            :advantageData="{
              title: 'Профессионализм и надежность',
              description:
                'Мы гарантируем профессиональный подход к каждому проекту, а также строгое соблюдение сроков и конфиденциальности, чтобы вы могли быть уверены в качестве наших услуг и безопасности ваших данных',
            }"
          />
        </div>
      </div>
    </div>
    <div class="for-legal-entities-page__form" id="form">
      <div class="block-container py-[50px] flex items-center flex-col">
        <h2 class="mb-5">Форма заявки</h2>
        <Form v-model="formData" class="md:w-1/2 w-full"> </Form>
      </div>
    </div>
    <div class="for-legal-entities-page__contacts">
      <div class="block-container py-[50px]">
        <ContactsBlock />
      </div>
    </div>
  </div>
</template>

<style lang='scss'>
.for-legal-entities-page {
}
</style>