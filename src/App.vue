<script setup>
import VueResponsiveTable from "../lib/VueResponsiveTable.vue";

import { data } from './mocks/example';

// Mock for example
const tableDataProps = [
  {
    thTitle: "Статус",
    cellValue: "status",
  },
  {
    thTitle: "Заказы",
    cellValue: "number_1c",
  },
  {
    thTitle: "Время",
    cellValue: "created_date",
  },
  {
    thTitle: "Дата",
    cellValue: "created_date",
  },
  {
    thTitle: "Способ доставки",
    cellValue: "delivery",
  },
  {
    thTitle: "Склад",
    cellValue: "stocks",
    objectKey: "name",
    type: "objectList",
  },
  {
    thTitle: "Дата отгрузки",
    cellValue: "delivery_date",
  },
  {
    thTitle: "Создал",
    cellValue: "manager",
  },
  {
    thTitle: "Время обработки",
    cellValue: "",
  },
  {
    thTitle: "Готовность заказа",
    cellValue: 0,
  },
];

function handleClickRow(payload) {
  console.log(payload)
}
</script>

<template>
  <div>
    <vue-responsive-table
      :rows="data"
      :data-props="tableDataProps"
      @onClickRow="handleClickRow"
    ></vue-responsive-table>
  </div>
</template>
