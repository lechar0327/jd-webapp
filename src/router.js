//引入vue
import Vue from 'vue'
//引入路由
import VueRouter from 'vue-router';
//注册路由
Vue.use(VueRouter);


//异步引入home组件
const Home = () => import('@/pages/Home.vue');
//异步引入login组件
const Login = () => import('@/pages/Login.vue');
//异步引入login组件
const Regist = () => import('@/pages/Regist.vue');
//异步引入details组件
const Details = () => import('@/pages/Details.vue');
//配置路由规则
var routes = [{
    path: '/index',
    component: Home
},
{
    path: '/login',
    component: Login
},
{
    path: '/regist',
    component: Regist
},
{
    //动态路由:冒号后面的id是个变量
    path: '/detail/:id', component: Details, props: true
},
{
    path: '/',
    component: Home
}];

//实例化路由
var router = new VueRouter({
    routes
});

// 暴露路由
export default router;