<template>
    <div class="grid">
        <div class="grid-title">
            Table-Title
        </div>
        <div class="grid-search">
            <Search v-show="searchable"/>
        </div>
        <div class="grid-body">
            <table>
                <tr>
                    <th :key=column.id v-for="column in columns">
                        {{ column.title}}
                    </th>
                </tr>
                <tr :key=row v-for="row in rows">
                    <td :key=element v-for="element in row">
                        {{ element }}
                    </td>
                </tr>
            </table>
        </div>
        <div class="grid-footer">
        </div>
    </div>
</template>

<script>
import Search from './GridSearch.vue';

export default {
    components:{
        Search,
    },
    props: {
        rows: Array,
        columns: Array,
        searchable: Boolean,
    }
}
</script>

<style>
.grid {
    display: inline;
    justify-content: center;
    margin:10px;
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
</style>