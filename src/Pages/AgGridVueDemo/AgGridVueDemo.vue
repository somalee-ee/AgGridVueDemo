<template>
    <ag-grid-vue
        style="width: 100%; height: 48vh;"
        class="ag-theme-material elevation-2"
        row-drag-managed
        suppress-move-when-row-dragging
        single-click-edit
        pagination
        :column-defs="columnDefs"
        :row-data="rowData"
        :page-size="50"
        @grid-ready="onReady"
    />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AgGridVue } from 'ag-grid-vue';

@Component({ components: { AgGridVue } })
export default class InputDataGridAg extends Vue {
    private items = [
        { Id: 2, Name: '101_CT_1', Class: 'Generator' },
        { Id: 3, Name: '101_CT_2', Class: 'Generator' },
        { Id: 4, Name: '101_PV_1', Class: 'Generator' },
        { Id: 5, Name: '101_PV_2', Class: 'Generator' },
        { Id: 6, Name: '101_PV_3', Class: 'Generator' },
        { Id: 7, Name: '101_PV_4', Class: 'Generator' },
    ];

    private api = null;

    onGridReady(params) {
        this.api = params.api;
    }

    private headers = [
        {
            text: 'ID',
            value: 'ID',
        },
        {
            text: 'Class',
            value: 'Class',
        },
        {
            text: 'Name',
            value: 'Name',
        },
    ];

    get columnDefs() {
        return this.headers.map((header) => ({
            headerName: header.text,
            field: header.value,
            sortable: true,
            editable: true,
            menuTabs: ['filterMenuTab', 'generalMenuTab', 'columnsMenuTab'],
            filter: true,
            resizable: true,
        }));
    }

    get rowData() {
        return this.items;
    }
}
</script>
<style lang="scss" scoped>

</style>
