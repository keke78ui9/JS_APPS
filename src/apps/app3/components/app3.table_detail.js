var app3 = app3 || {};
app3.table_detail = {
    template: '\
    <div>\
    <h2>{{title}}</h2>\
    <div class="row">\
        <div class="six columns">\
        <label>name</label>\
        {{tableDetail.name}}\
        </div>\
        <div class="six columns">\
        <label>age</label>\
        {{tableDetail.age}}\
        </div>\
    </div>\
    <div class="row">\
        <div class="six columns">\
        <label>gender</label>\
        {{tableDetail.gender}}\
        </div>\
        <div class="six columns">\
        <label>company</label>\
        {{tableDetail.company}}\
        </div>\
    </div>\
    <div class="row">\
        <div class="six columns">\
        <label>phone</label>\
        {{tableDetail.phone}}\
        </div>\
        <div class="six columns">\
        <label>favoriteFruit</label>\
        {{tableDetail.favoriteFruit}}\
        </div>\
    </div>\
        <label>address</label>\
        {{tableDetail.address}}\
        <label>about</label>\
        {{tableDetail.about}}\
    <div><button v-bind:class="[defaultButton.cssClass]" v-on:click="defaultClicked()">{{defaultButton.text}}</button></div>\
    </div>\
    ',
    props: ['defaultButton', 'title'],
    data: function () {
        return {
            tableDetail: [{
                type: Object,
                default: function () {
                    return {};
                }
            }]
        };
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        defaultClicked: function () {
            this.$emit("defaultButtonClicked");
        },
        fetchData: function () {
            var self = this;
            if (!self.$route) {
                return;
            }
            
            if (self.$route.params.id) {
                services.getById(self.$route.params.id).then(function (row) {
                    if (row) {
                        self.tableDetail = row;
                    }
                });
            }
        }

    }
};

Vue.component('my-sample-table-detail', app3.table_detail);