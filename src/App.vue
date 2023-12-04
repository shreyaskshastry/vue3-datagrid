<template>
  <Grid :rows = "rows" :columns = "columns" :searchable = "searchable" :pagable ="pagable" :pageSize = "pageSize"/>
</template>

<script setup>
import Grid from './components/DataGrid.vue'
</script>

<script>
export default {
  data: function () {
    return {
      searchable:true,
      pageSize:5,
      pagable: true,
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
        { field: 'Company',title: 'Company', sortable: true, filterable: true},
        { field: 'Contact',title: 'Contact',filterable: true},
        { field: 'Country',title: 'Country',sortable: true,filterable: true},
      ];
    },
  },
  methods: {
  },
};
</script>

<style lang="scss">
</style>
