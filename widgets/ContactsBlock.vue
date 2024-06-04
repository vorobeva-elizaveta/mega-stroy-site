<script setup>
</script>

<template>
  <div class="contacts-block">
    <h2 class="mb-5">Контакты</h2>
    <ul class="contact-list">
      <li class="mb-5">
        <strong>Адрес: </strong>город Киров, переулок Энгельса, дом 2, этаж 4,
        офис 14
      </li>
      <li class="mb-5"><strong>Телефон:</strong> <a class="underline hover:text-orange-500" href="tel:79005217771">+7 (900) 521 77 71</a></li>
      <li class="mb-5"><strong>Электронная почта:</strong> <a href="mailto:kos2189@mail.ru">kos2189@mail.ru</a></li>
    </ul>
  </div>
</template>

<style lang='scss'>
.contacts-block {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 5px;
}

.contact-list {
  list-style-type: none;
  padding: 0;
}

.contact-list li {
  margin-bottom: 10px;
}

.contact-form {
  margin-top: 20px;
}

.contact-form h3 {
  margin-bottom: 10px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
}

.contact-form button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0056b3;
}
</style>