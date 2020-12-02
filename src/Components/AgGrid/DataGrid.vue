<template>
    <ag-grid-vue
        style="width: 100%; height: 48vh;"
        class="ag-theme-material elevation-2"
        row-drag-managed
        suppress-move-when-row-dragging
        single-click-edit
        :column-defs="columnDefs"
        :components="components"
        :row-buffer="rowBuffer"
        :row-selection="rowSelection"
        :row-model-type="rowModelType"
        :pagination-page-size="paginationPageSize"
        :cache-overflow-size="cacheOverflowSize"
        :max-concurrent-datasource-requests="maxConcurrentDatasourceRequests"
        :infinite-initial-row-count="infiniteInitialRowCount"
        :max-blocks-in-cache="maxBlocksInCache"
        @grid-ready="onReady"
    />
</template>
<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { AgGridVue } from 'ag-grid-vue';

@Component({ components: { AgGridVue } })
export default class DataGrid extends Vue {
    private rowData = [
        { make: 'Toyota', model: 'Celica', price: 35000 },
        { make: 'Ford', model: 'Mondeo', price: 32000 },
        { make: 'Porsche', model: 'Boxter', price: 72000 },
    ];;

    private headers = [
        { text: 'Make', value: 'make' },
        { text: 'Model', value: 'model' },
        { text: 'Price', value: 'price' },
    ];

    private components;

    private rowBuffer = 0;

    private rowSelection = 'multiple';

    private rowModelType = 'infinite';

    private paginationPageSize = 100;

    private cacheOverflowSize = 2;

    private maxConcurrentDatasourceRequests = 1;

    private infiniteInitialRowCount = 1000;

    private maxBlocksInCache = 10;

    created() {
        this.components = {
            loadingRenderer: (params) => {
                if (params.value !== undefined) {
                    return params.value;
                }
                // eslint-disable-next-line max-len
                return '<img src="https://raw.githubusercontent.com/ag-grid/ag-grid/master/grid-packages/ag-grid-docs/src/images/loading.gif">';
            },
        };
    }

    // eslint-disable-next-line class-methods-use-this
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

    // eslint-disable-next-line class-methods-use-this
    onReady(params) {
        const updateData = (data) => {
            const dataSource = {
                rowCount: null,
                // eslint-disable-next-line func-names
                // eslint-disable-next-line object-shorthand
                getRows: (options) => {
                    setTimeout(() => {
                        const rowsThisPage = data.slice(params.startRow, params.endRow);
                        let lastRow = -1;
                        if (data.length <= params.endRow) {
                            lastRow = data.length;
                        }
                        options.successCallback(rowsThisPage, lastRow);
                    }, 100);
                },
            };
            params.api.setDatasource(dataSource);
        };
        updateData(this.rowData);
    }
}
</script>
<style lang="scss" scoped>

</style>
