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
        <div class="el-menu">
            <headMenu :my_index="1"></headMenu>
        </div>
        <div class="backGround">
            <div class="my-carousel">
                <carousel :images="images" />
            </div>
            <div class="my-link">
                <router-link :to="{ name: 'list' }" target="_blank" class="cta-button">
                    立即体验 →
                </router-link>
            </div>
        </div>
    </div>
</template>

<style>
html, body {
    height: 100%;
    margin: 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

#my-main {
    margin-top: 0vh;
    width: 100%;
    /* background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%); */
}

.el-menu {
    margin-top: 3vh;
}

.backGround {
    padding-top: 12vh; 
    padding-bottom: 50px;
    background-image: url('/img/bj3.jpg');
    background-size: cover;
    background-repeat: no-repeat;
}

.my-carousel {
    
}

.my-link {
    margin-top: 12vh;
    text-align: center;
}

/* 放大按钮样式 */
.cta-button {
    display: inline-block;
    padding: 24px 60px; /* 增大按钮尺寸 */
    font-size: 32px; /* 增大字体 */
    font-weight: 700;
    color: white;
    background: linear-gradient(45deg, #3a7bd5, #00d2ff);
    border-radius: 60px; /* 更大的圆角 */
    text-decoration: none;
    transition: all 0.3s ease;
    box-shadow: 0 6px 20px rgba(58, 123, 213, 0.5);
    position: relative;
    overflow: hidden;
}

.cta-button:hover {
    transform: translateY(-5px); /* 更大的悬停效果 */
    box-shadow: 0 10px 30px rgba(58, 123, 213, 0.7);
    background: linear-gradient(45deg, #00d2ff, #3a7bd5);
}

.cta-button:active {
    transform: translateY(2px);
}

/* 添加按钮光效 */
.cta-button::after {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: rgba(255, 255, 255, 0.2);
    transform: rotate(30deg);
    transition: all 0.5s ease;
}

.cta-button:hover::after {
    left: 100%;
}

@media (max-width: 768px) {
    .my-carousel {
        width: 95%;
        margin: 20px auto;
    }

    .cta-button {
        padding: 18px 45px;
        font-size: 28px;
    }
}
</style>