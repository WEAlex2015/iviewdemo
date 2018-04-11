const routers = [{
    path: '/',
    meta: {
        title: 'home'
    },
    component: (resolve) => require(['./views/index.vue'], resolve)
}];
export default routers;