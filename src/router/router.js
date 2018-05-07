import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import homeComponent from '../components/home/home.vue'
import loginComponent from '../components/login/login.vue'
import registerComponent from '../components/register/register.vue'
import carComponent from '../components/car/car.vue'
import myComponent from '../components/my/my.vue'
import classify from '../components/classify/classify.vue'
import listComponent from '../components/list/list.vue'
import detailComponent from '../components/detail/detail.vue'
import orderinfoComponent from '../components/Orderinfo/Orderinfo.vue';

import remen from '../components/componentClass/remen.vue';
import yongsheng from '../components/componentClass/yongsheng.vue';
import xianhua from '../components/componentClass/xianhua.vue';
import cake from '../components/componentClass/cake.vue';
import chocolate from '../components/componentClass/chocolate.vue';
import present from '../components/componentClass/present.vue';
import Doll from '../components/componentClass/Doll.vue';
import Basket from '../components/componentClass/Basket.vue';
import florVerde from '../components/componentClass/florVerde.vue';

const router = new VueRouter({
    routes: [
        {path:'/login', component: loginComponent, name: 'login' },
        {path:'/register', component: registerComponent, name: 'register' },
        {path:'/', component: homeComponent, name: 'home' },
        {path:'/car', component: carComponent, name: 'car' },
        {path:'/my', component: myComponent, name: 'my' },
        {path:'/classify', name: 'classify',component:classify,children:[
            {path:'/',redirect:'remen'},                     
            {path:'remen',component:remen},
            {path:'yongsheng',component:yongsheng,},
            {path:'xianhua',component:xianhua},
            {path:'cake',component:cake},
            {path:'chocolate',component:chocolate},
            {path:'present',component:present},
            {path:'Doll',component:Doll},
            {path:'Basket',component:Basket},
            {path:'florVerde',component:florVerde}
        ]},
        {path:'/list',name:"list",component:listComponent},
        {path:'/detail',name:"detail",component:detailComponent},
        {path:'/orderinfo', component: orderinfoComponent, name: 'orderinfo' }
    ]
})

export default router; 

