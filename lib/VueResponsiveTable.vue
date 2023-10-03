<script setup>
import { defineProps } from "vue";

const props = defineProps({
  rows: {
    type: Array,
    default: []
  },
  dataProps: {
    type: Array,
    default: []
  }
});
</script>

<template>
  <table class="table">
    <thead class="table__thead">
      <th class="table__th" v-for="th in dataProps">{{ th.thTitle }}</th>
    </thead>
    <tbody class="table__tbody">
      <tr class="table__tr" v-for="row in rows" @click="$emit('onClickRow', row)">
        <td class="table__td" :data-title="cell.thTitle" v-for="cell in dataProps">
          <div class="table__td-list" v-if="cell.type === 'associativeList'">
            <div v-for="cellItem in cell.cellList">{{ cellItem.cellItemTitle }}: {{ row[cell.cellValue][cellItem.cellItemValue] }}</div>
          </div>
          <div class="table__td-list" v-else-if="cell.type === 'list'">
            <div v-for="cellItem in row[cell.cellValue]">{{ cellItem }}</div>
          </div>
          <div class="table__td-list" v-else-if="cell.type === 'objectList'">
            <div v-for="object in row[cell.cellValue]">
              {{ object[cell.objectKey] }}
            </div>
          </div>
          <template v-else>
            {{ row[cell.cellValue] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="sass">
.table
  &__thead
    display: none
    @media (min-width: 992px)
      display: table-header-group
  &__tr
    display: grid
    margin-top: 1rem
    @media (min-width: 992px)
      display: table-row
      margin-top: 0
  &__td
    display: flex
    justify-content: space-between
    padding: 1rem
    @media (min-width: 992px)
      display: table-cell
      padding: 0
  &__td::before
    content: attr(data-title) ':'
    padding-right: 0.5rem
    font-weight: bold
    @media (min-width: 992px)
      display: none
  &__td-list
    text-align: right
    @media (min-width: 992px)
      text-align: start
</style>
