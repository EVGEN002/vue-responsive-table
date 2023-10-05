<script setup>
import VueResponsiveTable from "../lib/VueResponsiveTable.vue";

import { data } from './mocks/example';

// Mock for example
// const tableDataProps = [
//   {
//     thTitle: "Статус",
//     cellValue: "status",
//   },
//   {
//     thTitle: "Заказы",
//     cellValue: "number_1c",
//   },
//   {
//     thTitle: "Время",
//     cellValue: "created_date",
//   },
//   {
//     thTitle: "Дата",
//     cellValue: "created_date",
//   },
//   {
//     thTitle: "Способ доставки",
//     cellValue: "delivery",
//   },
//   {
//     thTitle: "Склад",
//     cellValue: "stocks",
//     objectKey: "name",
//     type: "objectList",
//   },
//   {
//     thTitle: "Дата отгрузки",
//     cellValue: "delivery_date",
//   },
//   {
//     thTitle: "Создал",
//     cellValue: "manager",
//   },
//   {
//     thTitle: "Время обработки",
//     cellValue: "",
//   },
//   {
//     thTitle: "Готовность заказа",
//     cellValue: 0,
//   },
// ];

const tableDataProps = [
    {
      thTitle: 'Статус',
      cellValue: 'status'
    },
    {
      // Добавить возможность отображать изображения по url
      thTitle: 'Product image',
      cellSrc: (payload) => `https://unicom-ykt.ru/uploads/images/original/${payload['ГуйдНоменклатура'].slice(0, 4)}/${payload['ГуйдНоменклатура']}_0.jpg`,
      cellValue: 'ГуйдНоменклатура',
      type: 'image'
    },
    {
      thTitle: 'Товар',
      cellValue: 'Номенклатура'
    },
    {
      thTitle: 'Склад',
      cellValue: 'Склад'
    },
    {
      thTitle: 'Артикул',
      cellValue: 'Артикул'
    },
    {
      thTitle: 'Код',
      cellValue: 'КодТовара'
    },
    {
      thTitle: 'Количество',
      cellValue: 'Количество'
    },
    {
      thTitle: 'Ед. измерения',
      cellValue: 'ЕдиницаИзмерения'
    },
    {
      // Добавить возможность выбирать статус.
      // хорошенько продумать этот момент
      thTitle: 'Наличие',
      cellValue: 'status',
      selectList: [
        { name: 'Собран', value: 'Собран' },
        { name: 'Необработан', value: 'Необработан' },
        { name: 'Нет в наличии', value: 'Нет в наличии' },
        { name: 'Ограниченно годен', value: 'Ограниченно годен' },
        { name: 'Пересорт', value: 'Пересорт' },
        { name: 'Выдан', value: 'Выдан' },
        { name: 'Удален', value: 'Удален' },
      ],
      disabledCondition: (payload) => payload['Склад'] !== 'Б.Марлинского д.64/1	',
      callback: (payload) => { console.log('setStatus: ', payload) },
      type: 'select'
    },
  ];

function handleClickRow(payload) {
  return null
}
</script>

<template>
  <div>
    <vue-responsive-table
      :rows="data.products"
      :data-props="tableDataProps"
      @onClickRow="handleClickRow"
    ></vue-responsive-table>
  </div>
</template>
