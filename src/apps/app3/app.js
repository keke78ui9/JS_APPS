
var app3 = app3 || {};
const routes = [
  { path: '/list', component: app3.list_page },
  { path: '/detail/:id', component: app3.detail_page}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router
}).$mount('#app')
