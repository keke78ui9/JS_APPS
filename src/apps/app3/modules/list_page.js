var app3 = app3 || {};
app3.list_page = {
    template: '\
   <div>\
    <app3-table title="single page component" :tableData="myTableData" v-on:selectrow="selectPageDetail"></my-table>\
   </div>\
    ',
    data: function () {
        return {
            msg: 'awesome!',
            parentMsg: 'this is from parenets',
            myTableData: [],
            selectRow: {},
            isClickedDetail: false
        }
    },
    created: function () {
        var self = this;
        services.getMySampleData().then(function (data) {
            self.myTableData = JSON.parse(data.target.response);
        });
    },
    methods: {
        selectPageDetail: function (rowNumber) {
            window.location.href = '/src/apps/app3.html#/detail/' + rowNumber;
        },
        detailClosed: function () {
            this.isClickedDetail = false;
        }
    },
    components: {
        'app3-table':app3.table
    }
};

Vue.component('list-page', app3.list_page);
