Vue.component('my-sample', {
    template: '\
   <div>\
    <h2>{{msg}}</h2>\
    <my-title subTitle="another title!"></my-title>\
    <my-title :subTitle="parentMsg"></my-title>\
    <my-table title="single page component" :tableData="myTableData"></my-table>\
   </div>\
    ',
    data: function(){
        return {
            msg: 'awesome!',
            parentMsg: 'this is from parenets',
            myTableData: []
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
            var self = this;
            services.getById(rowNumber).then(function (row) {
                self.selectRow = row;
                self.isClickedDetail = true;
            })
        },
        detailClosed: function () {
            this.isClickedDetail = false;
        }
    },
    components: {
        'my-title': c_myTitle,
        'my-table': sample.c_my_sample_table
    }
});
