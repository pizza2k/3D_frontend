<template>
    <el-carousel :interval="4000" type="card" height="300px">
        <!-- <el-carousel-item v-for="item in itemNum" :key="item">
            <h3 class="medium">{{ item }}</h3> -->
            <el-carousel-item v-for="(image, index) in images" :key="index">
                <img :src="image" alt="carousel-image" style="width: 100%; height: 100%; object-fit: cover;" />
        </el-carousel-item>
    </el-carousel>
</template>

<style>
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }
    
    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }
    
    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
</style>


<script setup>
const props = defineProps({
    images: {
        type: Array,
        required: true, // 必须传递
    },
});
</script>