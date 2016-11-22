var sample = {};
sample.c_my_sample_table = {
    template: '\
    <table class="u-full-width">\
    <caption>\
    <h2>{{title}}</h2>\
    </caption>\
    <thead>\
        <tr>\
            <th>no.</th>\
            <th>name</th>\
            <th>age</th>\
            <th>company</th>\
            <th>phone</th>\
            <th>balance</th>\
            <th>Action</th>\
        </tr>\
    </thead>\
    <tbody>\
        <tr v-for="(item, index) in tableData">\
            <td>{{++index}}</td>\
            <td>{{item.name}}</td>\
            <td>{{item.age}}</td>\
            <td>{{item.company}}</td>\
            <td>{{item.phone}}</td>\
            <td>{{item.balance}}</td>\
            <td><button v-on:click="goDetail(item)">Detail</button></td>\
        </tr>\
    </tbody>\
    </table>\
    ',
    props: ['tableData', 'title'],
    methods: {
        goDetail: function (rowItem) {
            this.tableData.row = rowItem;
            this.$emit("selectrow", rowItem.index);
        }
    }
};
Vue.component('my-sample-table', sample.c_my_sample_table);
