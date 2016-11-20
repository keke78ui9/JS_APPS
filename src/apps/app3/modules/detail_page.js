var app3 = app3 || {};
app3.detail_page = {
    template: '\
   <div>\
    <sample-detail :title="title" :defaultButton="detailButton" v-on:defaultButtonClicked="goToListPage"></sample-detail>\
   </div>\
    ',
    data: function(){
        return {
            msg: 'awesome!',
            parentCssClass: "Container",
            my: "myyy"
        }
    },
    created: function () {
        this.detailButton = {text: 'Back to List Page', cssClass: 'button-primary'};
        this.title = 'Demo Detail Page - ' + this.$route.params.id;
    },
    methods: {
        goToListPage: function () {
            window.location.href = '/src/apps/app3.html#/list';
        }
    },
    components: {
        'sample-detail': app3.table_detail
    }
};

Vue.component('list-page', app3.detail_page);
