<script setup>
import { ref, onMounted } from "vue";

import VueResponsiveTable from "../lib/VueResponsiveTable.vue";

const users = ref([]);

const dataProps = [
  {
    thTitle: "Имя",
    cellValue: "name",
  },
  {
    thTitle: "Пользователь",
    cellValue: "username",
  },
  {
    thTitle: "Почта",
    cellValue: "email",
  },
  {
    thTitle: "Адрес",
    cellValue: "address",
    cellList: [
      {
        cellItemTitle: "улица",
        cellItemValue: "street",
      },
      {
        cellItemTitle: "дом",
        cellItemValue: "suite",
      },
      {
        cellItemTitle: "город",
        cellItemValue: "city",
      },
      {
        cellItemTitle: "почтовый индекс",
        cellItemValue: "zipcode",
      },
    ],
    type: "associativeList",
  },
  {
    thTitle: "Склады",
    cellValue: "list",
    type: "list"
  },
  {
    thTitle: "Телефон",
    cellValue: "phone",
  },
  {
    thTitle: "Компания",
    cellValue: "company",
    type: "list",
  },
  {
    thTitle: "Веб-сайт",
    cellValue: "website",
  },
];

onMounted(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  if (response.ok) {
    users.value = await response.json();
    users.value.forEach((user) => {
      user.list = [
        "Автодорожная 11А",
        "Вилюйский тракт 3 км 1/4",
        "Бестужева-Марлинского 64/1",
      ];
    });
    console.log(users.value);
  }
});
</script>

<template>
  <div>
    <vue-responsive-table
      :rows="users"
      :data-props="dataProps"
    ></vue-responsive-table>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
