import { mount } from '@vue/test-utils';
import AgGridVueDemo from '../Pages/AgGridVueDemo/AgGridVueDemo.vue';

const ensureGridApiHasBeenSet = (wrapper) => new Promise(((resolve) => {
    (function waitForGridReady() {
        if (wrapper.instance().gridApi) {
            resolve(wrapper);
            return;
        }
        setTimeout(waitForGridReady, 100);
    }());
}));

describe('AgGridVueDemo.vue', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(AgGridVueDemo,
            {
                propsData: {
                    items: [
                        { Id: 2, Name: '101_CT_1', Class: 'Generator' },
                        { Id: 3, Name: '101_CT_2', Class: 'Generator' },
                    ],
                    headers: [
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
                    ],
                },
                stubs: [],
            });
        ensureGridApiHasBeenSet(wrapper.vm).then(() => {});
    });

    it('grid renders as expected', () => {
        const cells = wrapper.findAll('.ag-cell-value');
        expect(cells.length).toEqual(3);
        expect(cells.at(0).text()).toEqual('2');
        expect(cells.at(1).text()).toEqual('101_CT_1');
    });
});
