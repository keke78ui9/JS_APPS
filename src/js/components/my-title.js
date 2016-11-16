var c_myTitle = {
    template: '\
    <h1>Vue Sample Code {{subTitle}}</h1>\
',
    props: ['subTitle'],
};
Vue.component('my-title', c_myTitle);