<template>
    <div>
      <DataTable
        :value="data"
        :paginator="true"
        :rows="10"
        filterDisplay="row"
        v-model:filters="filters"
      >
        <template #header>
          <div class="flex justify-content-end">
            <span class="p-input-icon-left">
              <i class="pi pi-search" />
              <InputText
                v-model="filters['global'].value"
                placeholder="Keyword Search"
              />
            </span>
          </div>
        </template>
        <Column
          field="name"
          header="Name"
          :showFilterMenu="false"
          :filterMenuStyle="{ width: '14rem' }"
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            {{ data.name }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <MultiSelect
              v-model="filterModel.value"
              @change="filterCallback()"
              :options="nameFilterOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select name"
              class="p-column-filter"
              style="min-width: 14rem"
            />
          </template>
        </Column>
        <Column
          field="link"
          header="Link"
          :showFilterMenu="false"
          :filterMenuStyle="{ width: '14rem' }"
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            {{ data.link }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <MultiSelect
              v-model="filterModel.value"
              @change="filterCallback()"
              :options="linkFilterOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select name"
              class="p-column-filter"
              style="min-width: 14rem"
            />
          </template>
        </Column>
        <Column
          field="console"
          header="Console"
          :showFilterMenu="false"
          :filterMenuStyle="{ width: '14rem' }"
          style="min-width: 14rem"
        >
          <template #body="{ data }">
            {{ data.console }}
          </template>
          <template #filter="{ filterModel, filterCallback }">
            <MultiSelect
              v-model="filterModel.value"
              @change="filterCallback()"
              :options="consoleFilterOptions"
              optionLabel="label"
              optionValue="value"
              placeholder="Select name"
              class="p-column-filter"
              style="min-width: 14rem"
            />
          </template>
        </Column>
      </DataTable>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          {
            name: 'Object 5',
            link: 'https://www.object5.com',
            console: 'https://www.object5console.com',
          },
          {
            name: 'Object 8',
            link: 'https://www.object8.com',
            console: 'https://www.object8console.com',
          },
          {
            name: 'Object 2',
            link: 'https://www.object2.com',
            console: 'https://www.object2console.com',
          },
          {
            name: 'Object 3',
            link: 'https://www.object3.com',
            console: 'https://www.object3console.com',
          },
          {
            name: 'Object 4',
            link: 'https://www.object4.com',
            console: 'https://www.object4console.com',
          },
          {
            name: 'Object 6',
            link: 'https://www.object6.com',
            console: 'https://www.object6console.com',
          },
          {
            name: 'Object 1',
            link: 'https://www.object1.com',
            console: 'https://www.object1console.com',
          },
          {
            name: 'Object 7',
            link: 'https://www.object7.com',
            console: 'https://www.object7console.com',
          },
          {
            name: 'Object 10',
            link: 'https://www.object10.com',
            console: 'https://www.object10console.com',
          },
          {
            name: 'Object 9',
            link: 'https://www.object9.com',
            console: 'https://www.object9console.com',
          },
        ],
      };
    },
    computed: {
      nameFilterOptions() {
        const uniqueNames = [...new Set(this.data.map((item) => item.name))];
        return uniqueNames.map((option) => ({ label: option, value: option }));
      },
      linkFilterOptions() {
        const uniqueNames = [...new Set(this.data.map((item) => item.link))];
        return uniqueNames.map((option) => ({ label: option, value: option }));
      },
      consoleFilterOptions() {
        const uniqueNames = [...new Set(this.data.map((item) => item.console))];
        return uniqueNames.map((option) => ({ label: option, value: option }));
      },
    },
  };
  </script>
  
  <script setup>
  import { ref } from 'vue';
  import { FilterMatchMode } from 'primevue/api';
  const filters = ref({
    global: { value: null, matchModeSearch: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.IN },
    link: { value: null, matchMode: FilterMatchMode.IN },
    console: { value: null, matchMode: FilterMatchMode.IN },
  });
  </script>
  