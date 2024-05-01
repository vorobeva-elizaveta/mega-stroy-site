<script setup>
import BaseButton from "~/shared/ui-kit/BaseButton.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, email } from "@vuelidate/validators";

defineProps({
  modelValue: Object,
});

const emit = defineEmits(["update:modelValue"]);

const formData = reactive({
  name: null,
  email: null,
  isLegalEntity: false,
  description: null,
  service: "building",
});

const validationRules = {
  name: { required },
  email: { required, email },
};

const v$ = useVuelidate(validationRules, formData);

const services = ref([
  { title: "Строительство", id: 1 },
  { title: "Ремонт", id: 2 },
]);

const isDataSended = ref(false);

const sendFormData = async () => {
  if (v$.value.$invalid) return v$.value.$touch();
  let result = await useFetch("/api/sendBuildingRequest");
  console.log(result);
};

watch(formData, () => {
  emit("update:modelValue", formData);
});
</script>

<template>
  <div class="form" v-if="!isDataSended">
    <p class="text-red-700" v-if="v$.name?.$invalid && v$.name?.$dirty">
      Заполните поле
    </p>
    <InputText
      class="block mb-4 w-full"
      v-model="formData.name"
      placeholder="Введите имя"
      required="true"
      :invalid="v$.name?.$invalid && v$.name?.$dirty"
    />

    <p
      class="text-red-700"
      v-if="v$.email?.$invalid && v$.email.email.$invalid && v$.email?.$dirty"
    >
      Почта заполнена неверно
    </p>
    <p class="text-red-700" v-else-if="v$.email?.$invalid && v$.email?.$dirty">
      Заполните поле
    </p>
    <InputText
      class="block mb-4 w-full"
      placeholder="Введите почту"
      v-model="formData.email"
      :invalid="v$.email?.$invalid && v$.email?.$dirty"
    />

    <div class="flex items-center gap-6 mb-4">
      <div class="flex items-center">
        <RadioButton
          :value="false"
          name="Частное лицо"
          v-model="formData.isLegalEntity"
          input-id="privatePerson"
        />
        <label for="privatePerson" class="ml-2">
          <p>Частное лицо</p>
        </label>
      </div>

      <div class="flex items-center">
        <RadioButton
          input-id="legalEntity"
          :value="true"
          name="Юридическое лицо"
          v-model="formData.isLegalEntity"
        />
        <label for="legalEntity" class="ml-2">
          <p>Юридическое лицо</p>
        </label>
      </div>
    </div>

    <p class="mb-4">Выберите услугу:</p>

    <div class="flex items-center gap-6 mb-4">
      <div class="flex items-center">
        <RadioButton
          value="building"
          name="Строительство"
          v-model="formData.service"
          input-id="building"
        />
        <label for="building" class="ml-2">
          <p>Строительство</p>
        </label>
      </div>

      <div class="flex items-center">
        <RadioButton
          input-id="repairing"
          value="repairing"
          name="Ремонт"
          v-model="formData.service"
        />
        <label for="repairing" class="ml-2">
          <p>Ремонт</p>
        </label>
      </div>

      <div class="flex items-center">
        <RadioButton
          input-id="dontKnow"
          value="dontKnow"
          name="Пока не знаю"
          v-model="formData.service"
        />
        <label for="dontKnow" class="ml-2">
          <p>Пока не знаю</p>
        </label>
      </div>
    </div>

    <InputText
      class="block mb-4 w-full"
      v-model="formData.description"
      placeholder="Впишите свои идеи"
      required="true"
    />

    <slot name="sendButton">
      <BaseButton @click="sendFormData" tag="button" class="secondary">
        Отправить
      </BaseButton>
    </slot>
  </div>
  <div v-else></div>
</template>

<style lang='scss'>
.form {
  @apply relative;
}
</style>