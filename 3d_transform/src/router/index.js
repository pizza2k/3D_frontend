import component from "element-plus/es/components/tree-select/src/tree-select-option.mjs";
import {createRouter,createWebHashHistory} from "vue-router";

const routes = [
    {
        path:'/',
        name:'main',
        component:()=>import('@/views/Main.vue')
    },
    {
        path:'/modelList',
        name:'list',
        component:()=>import('@/views/list.vue')
    },
    {
        path:'/learn',
        name:'learn',
        component:()=>import('@/views/learn.vue')
    },
];

const router = createRouter({
    history:createWebHashHistory(),
    routes,
});

export default router;