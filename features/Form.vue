<script setup>
import BaseButton from "~/shared/ui-kit/BaseButton.vue";
import { useVuelidate } from "@vuelidate/core";
import { required, requiredUnless, helpers } from "@vuelidate/validators";

const { modelValue } = defineProps({
  modelValue: Object,
});

const emit = defineEmits(["update:modelValue"]);

const formData = reactive({
  name: "",
  phone: "",
  isLegalEntity: false,
  description: "",
  service: "building",
  privacyPolicy: false,
});

const validationRules = computed(() => {
  return {
    name: {
      required: helpers.withMessage(
        "Это поле обязательно для заполнения",
        required
      ),
    },
    phone: {
      required: helpers.withMessage(
        "Это поле обязательно для заполнения",
        required
      ),
    },
    privacyPolicy: {
      required: helpers.withMessage(
        "Это поле обязательно для заполнения",
        function () {
          return formData.privacyPolicy === true;
        }
      ),
    },
  };
});

const v$ = useVuelidate(validationRules, formData);

const isDataSended = ref(false);

const onLoad = () => {
  if (modelValue) formData.isLegalEntity = modelValue?.isLegalEntity;
  if (eval(localStorage.requestSended) == true) isDataSended.value = true;
};

const sendFormData = async () => {
  if (localStorage.requestSended == "true") return;
  if (v$.value.$invalid) return v$.value.$touch();
  let result = await useFetch("/api/sendBuildingRequest", {
    method: "POST",
    body: formData,
  });
  localStorage.setItem("requestSended", true);
  isDataSended.value = true;
};

watch(formData, () => {
  emit("update:modelValue", formData);
});

onMounted(() => {
  onLoad();
});
</script>

<template>
  <div class="form" v-if="!isDataSended">
    <p
      class="text-red-500"
      v-if="v$.name?.$invalid && v$.name.required.$invalid && v$.name?.$dirty"
    >
      {{ v$.name.required.$message || "Заполните поле" }}
    </p>
    <InputText
      class="block mb-4 w-full"
      v-model="formData.name"
      placeholder="Введите имя"
      required="true"
      :invalid="v$?.name?.$invalid && v$?.name?.$dirty"
    />

    <p
      class="text-red-500"
      v-if="
        v$.phone?.$invalid && v$.phone.required.$invalid && v$.phone?.$dirty
      "
    >
      {{ v$.phone.required.$message || "Заполните поле" }}
    </p>
    <InputMask
      mask="+7 (999) 999-99-99"
      class="block mb-4 w-full"
      v-model="formData.phone"
      placeholder="+7 (___) ___-__-__"
      required="true"
      :invalid="v$.phone?.$invalid && v$.phone?.$dirty"
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
      placeholder="Напишите свои пожелания"
      required="true"
    />
    <p
      class="text-red-500"
      v-if="
        v$.privacyPolicy.$invalid &&
        v$.privacyPolicy.required.$invalid &&
        v$.privacyPolicy.$dirty
      "
    >
      {{ v$.privacyPolicy.required.$message }}
    </p>
    <div class="flex items-center mb-4">
      <Checkbox
        inputId="privacyPolicy"
        v-model="formData.privacyPolicy"
        :binary="true"
        :invalid="v$.privacyPolicy.$invalid && v$.privacyPolicy.$dirty"
      />
      <label for="privacyPolicy" class="ml-2">
        Я согласен с
        <a
          class="text-orange-500 underline"
          target="_blank"
          href="/privacyPolicy.pdf"
        >
          политикой конфиденциальности
        </a>
      </label>
    </div>

    <slot name="sendButton">
      <BaseButton @click="sendFormData" tag="button" class="secondary w-full">
        Отправить
      </BaseButton>
    </slot>
  </div>
  <div v-else>
    <p class="text-center text-2xl text-blue-500">Заявка отправлена!</p>
    <p class="text-center text-base my-2">Ожидайте звонка менеджера</p>
  </div>
</template>

<style lang='scss'>
.form {
  @apply relative;
}
</style>