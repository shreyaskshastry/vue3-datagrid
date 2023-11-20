<template>
  <Search/>
  <Grid :rows = "rows" :columns = "columns" :searchable = "searchable"/>
</template>

<script setup>
import Grid from './views/DataGrid.vue'
</script>

<script>
export default {
  data: function () {
    return {
      searchable:true
    };
  },
  computed: {
    rows: function () {
      return [
        {
          'Company': 'Google',
          'Contact': 'Mariz',
          'Country': 'USA'
        },
        {
          'Company': 'Meta',
          'Contact': 'Mario',
          'Country': 'Canada'
        },
        {
          'Company': 'LTI',
          'Contact': 'LOL',
          'Country': 'India'
        },
        {
          'Company': 'HP',
          'Contact': 'lul',
          'Country': 'USA'
        },
      ]
    },
    columns: function () {
      return [
        { field: 'Company',title: 'Company', id:0},
        { field: 'Contact',title: 'Contact', id:1},
        { field: 'Country',title: 'Country', id:2 },
      ];
    },
  },
  methods: {
  },
};
</script>

<style lang="scss">
</style>
