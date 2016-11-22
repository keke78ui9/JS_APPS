

var app = new Vue({
    el: '#app',
    data: {
        myTableData: [],
        selectRow: {},
        isClickedDetail: false
    },
    created: function () {
        var self = this;
        services.getMySampleData().then(function (data) {
            self.myTableData = JSON.parse(data.target.response);
        });
        //this.selectRow = {};
    },
    methods: {
        selectPageDetail: function (rowNumber) {
            var self = this;
            services.getById(rowNumber).then(function (row) {
                self.selectRow = row;
                self.isClickedDetail = true;
            })
        },
        detailClosed: function(){
            this.isClickedDetail = false;
        }
    },
    components: {
        'my-title-2': c_myTitle
    }
});



// TODO: emit's name is case sensitive and have to be lowercase'
// this.$emit("selectrow");

//     <!--<my-sample-table-detail v-if="!helper.isObjectEmpty(selectRow)" :table-Detail="selectRow"
//     title="select table detail"></my-sample-table-detail>-->
//     <!--vue.js:2611 [Vue warn]: Property or method "isRowEmpty" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option. 
// (found in root instance)-->