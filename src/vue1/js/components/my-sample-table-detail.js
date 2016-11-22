Vue.component('my-sample-table-detail', {
        template: '\
    <div class="container detail">\
    <h2>{{title}}</h2>\
    <strong>name: {{tableDetail.name}}</strong>\
    <strong>age: {{tableDetail.age}}</strong>\
    <strong>gender: {{tableDetail.gender}}</strong>\
    <strong>company: {{tableDetail.company}}</strong>\
    <strong>phone: {{tableDetail.phone}}</strong>\
    <strong>address: {{tableDetail.address}}</strong>\
    <p>about: {{tableDetail.about}}</p>\
    <div><button class="button-primary" v-on:click="close()">close</button></div>\
    </div>\
    ',
        props: {
            title: "",
            tableDetail: {
                type: Object,
                default: function () {
                    return {};
                }
            }
        },
        methods:{
            close: function() {
             this.$emit("close");
            }
        }
    });