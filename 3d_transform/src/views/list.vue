<script setup>
import { ref } from 'vue';
import headMenu from '../components/head-menu.vue';
import card from '../components/card.vue';
const modelDatas = ref([
{
    img: '/img/home/img1.jpg',
    modelName: 'model',
    modelId: 'id123',
    modelBrief:'这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~'
},
{
    img: '/img/home/img1.jpg',
    modelName: 'model',
    modelId: 'id123',
    modelBrief:'这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~'
},
{
    img: '/img/home/img1.jpg',
    modelName: 'model',
    modelId: 'id123',
    modelBrief:'这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~'
},
{
    img: '/img/home/img1.jpg',
    modelName: 'model',
    modelId: 'id123',
    modelBrief:'这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~'
},
{
    img: '/img/home/img1.jpg',
    modelName: 'model',
    modelId: 'id123',
    modelBrief:'这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~'
},
{
    img: '/img/home/img1.jpg',
    modelName: 'model',
    modelId: 'id123',
    modelBrief:'这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~'
}
]);
</script>

<template>
    <div class="my-list">
        <div class="el-menu">
            <headMenu :my_index="2"></headMenu>
        </div>
        <div class="cards">
            <card v-for="modelData in modelDatas" :model="modelData"></card> 
        </div>
        
    </div>
</template>

<style>
html, body {
    height: 100%;
    margin: 0;
}
.el-menu {
    margin-top: 3vh; 
    margin-bottom: 5vh;
}
.cards {
    display: flex;
    flex-wrap: wrap; /* 允许换行 */
    justify-content: flex-start; /* 左对齐 */
    gap: 0px; /* 卡片之间的间距 */
    width: 100%;
}
</style>