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
    />
</template>
<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator';
import { AgGridVue } from 'ag-grid-vue';

@Component({ components: { AgGridVue } })
export default class InputDataGridAg extends Vue {
    @Prop() items;

    @Prop() headers;

    @Prop() loading;

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
        console.log(this.items, this.columnDefs);
        return this.items;
    }
}
</script>
<style lang="scss" scoped>

</style>