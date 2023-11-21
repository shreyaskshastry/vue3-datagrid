<template>
    <div class="grid">
        <div class="grid-title">
            Table-Title
        </div>
        <div class="grid-search">
            <Search v-show="searchable" />
        </div>
        <div class="grid-body">
            <table>
                <tr>
                    <th :key=column.id v-for="column in columns">
                        {{ column.title }}
                    </th>
                </tr>
                <tr :key=row v-for="row in computedRows">
                    <td :key=element v-for="element in row">
                        {{ element }}
                    </td>
                </tr>
            </table>
        </div>
        <div class="grid-footer" v-show="pagable">
            <div class = "paginator">
                <button @click="goLeft()">&lt;</button>
                <input class="pageInput" type="number" v-model="currentPage" @change="changePage($event)">/{{ totalPages }}
                <button @click="goRight()">&gt;</button>
            </div>
        </div>
    </div>
</template>

<script>
import SearchComponent from './GridSearch.vue';

export default {
    data() {
        return {
            currentPage: 1,
            computedRows: [],
        };
    },
    components: {
        Search: SearchComponent,
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
            return this.rows? Math.round(this.rows.length / this.pageSize) : 0;
        }
    },
    mounted: function(){
        this.computeRows()
    },
    methods: {
        changePage(e){
            if(parseInt(e.target.value) >= 1 && parseInt(e.target.value) <= this.totalPages){
                this.currentPage = e.target.value;
                this.computeRows();
            }
        },
        goLeft() {
            this.currentPage = Math.max(this.currentPage - 1 , 1);
            this.computeRows();
        },
        goRight(){
            this.currentPage = Math.min(this.totalPages, this.currentPage + 1);
            this.computeRows();
        },
        computeRows(){
            var rowsToDisplay = this.currentPage * this.pageSize - this.pageSize;
            this.computedRows = this.rows.slice(rowsToDisplay,rowsToDisplay + this.pageSize)
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

.paginator{
    display: flex;
    gap:5px;
}

.pageInput{
    width: 25px;
}
</style>