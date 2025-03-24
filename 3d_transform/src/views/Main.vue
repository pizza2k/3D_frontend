<script setup>
import carousel from '@/components/carousel.vue';
import headMenu from '../components/head-menu.vue';
const images = [
    '/img/home/img1.jpg',
    '/img/home/img2.jpg',
    '/img/home/img3.jpg',
];


</script>

<template>
    <div id="my-main">
        <div class="el-menu"><headMenu :my_index="1"></headMenu></div>
        <div class="my-carousel"><carousel :images="images"/></div>
        <div class="my-link">
            <router-link :to="{ name: 'list' }" target="_blank" style="font-size: 40px;">
                点击进入使用
            </router-link>
        </div>
        <div class="my-learn">
            <router-link :to="{ name: 'learn' }" target="_blank" style="font-size: 40px;">
                点击进入学习
            </router-link>
        </div>
    </div>
</template>
<style>
html, body {
    height: 100%;
    margin: 0;
}
#my-main {
    margin-top: 0vh;
    width: 100%; /* 宽度铺满整个屏幕 */
    height: 100%; /* 高度铺满整个屏幕 */
    /* background-color: rgb(114, 196, 196); */
}
.el-menu {
    margin-top: 3vh; 
}

.my-carousel {
    margin-top: 10vh; 
}
.my-link {
    margin-top: 15vh; 
}
</style>