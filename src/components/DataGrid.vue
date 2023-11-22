<template>
  <div class="grid">
    <div class="grid-title">Table-Title</div>
    <div class="grid-search" v-show="searchable">
      <div class="search-bar">
        Search Items :
        <input type="text" placeholder="Search Items" @keyup="searchOnTable" />
      </div>
    </div>
    <div class="grid-body">
      <table id="grid">
        <tr>
          <th :key="column.title" v-for="column in columns">
            {{ column.title }}
          </th>
        </tr>
        <tr :key="row" v-for="row in computedRows">
          <td :key="element" v-for="element in row">
            {{ element }}
          </td>
        </tr>
      </table>
    </div>
    <div class="grid-footer" v-show="pagable">
      <div class="paginator">
        <button @click="goLeft()">&lt;</button>
        <input class="pageInput" type="number" v-model="currentPage" @change="changePage($event)" />/{{ totalPages }}
        <button @click="goRight()">&gt;</button>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      currentPage: 1,
      computedRows: [],
      tableRows: [],
    };
  },
  components: {
  },
  props: {
    rows: Array,
    columns: Array,
    searchable: Boolean,
    pagable: Boolean,
    pageSize: Number,
  },
  computed: {
    totalPages: function () {
      return Math.round(this.tableRows.length / this.pageSize) > 0 ? Math.round(this.tableRows.length / this.pageSize) : 1;
    }
  },
  mounted: function () {
    this.tableRows = this.rows;
    this.computeRows();
  },
  methods: {
    changePage(e) {
      var pageNumber = e.target.value;
      if (parseInt(pageNumber) >= 1 && parseInt(pageNumber) <= this.totalPages) {
        this.currentPage = pageNumber;
        this.computeRows();
      }
    },
    goLeft() {
      this.currentPage = Math.max(this.currentPage - 1, 1);
      this.computeRows();
    },
    goRight() {
      this.currentPage = Math.min(this.totalPages, this.currentPage + 1);
      this.computeRows();
    },
    computeRows() {
      var rowsToDisplay = this.currentPage * this.pageSize - this.pageSize;
      this.computedRows = this.tableRows.slice(rowsToDisplay, rowsToDisplay + this.pageSize);
    },
    searchRow(row,searchValue,cols){
      for(let col in cols){
        var wordSearch = row[cols[col]];
        if(wordSearch.toLowerCase().includes(searchValue)){
          return true;
        }
      }
      return false;
    },
    searchOnTable(e) {
      if(e.target.value != ''){
        var searchValue = e.target.value;
        console.log(searchValue);
        var cols = []
        for(let col in this.columns){
          cols.push(this.columns[col].title)
        }
        this.tableRows = this.tableRows.filter((row) => 
          this.searchRow(row,searchValue,cols)
        )
        this.computeRows();
      }else{
        this.tableRows = this.rows;
        this.computeRows();
      }
    }
  }
}
</script>

<style>
.grid {
  display: inline;
  justify-content: center;
  margin: 10px;
}

.grid-title {
  font-size: 30px;
  text-align: center;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid black;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: grey;
}

.paginator {
  display: flex;
  gap: 5px;
}

.pageInput {
  width: 25px;
}
</style>
