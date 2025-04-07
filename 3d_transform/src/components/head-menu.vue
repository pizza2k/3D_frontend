<template>
    <el-menu
        style="background: linear-gradient(135deg, #e0f2ff 0%, #c3e4ff 100%);"
        :default-active="activeIndex"
        class="el-menu-demo enhanced-menu"
        mode="horizontal"
        :ellipsis="false"
        @select="handleSelect"
    >
        <el-menu-item index="0" class="logo-item">
            <img
                style="height: 60px; margin-right: 20px;"
                src="/img/home/vite.svg"
                alt="logo"
            />
            <span class="site-name">3DGS Designer</span>
        </el-menu-item>
        <el-menu-item index="1" class="nav-item">
            <router-link :to="{ name: 'main' }" class="nav-link">首页</router-link>
        </el-menu-item>
        <el-menu-item index="2" class="nav-item">
            <router-link :to="{ name: 'list' }" class="nav-link">模型列表</router-link>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
const props = defineProps({
    my_index: {
        type:Number,
        required:true,
    },
})
import { ref } from 'vue'

const activeIndex = ref(props.my_index.toString())
const handleSelect = (index) => {
  console.log('Selected index:', index);
}
</script>

<style scoped>
.enhanced-menu {
    height: 80px !important;
    padding: 0 5% !important;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1) !important;
    border-bottom: none !important;
}

.el-menu--horizontal.enhanced-menu > .el-menu-item {
    height: 100% !important;
    padding: 0 25px !important;
    font-size: 18px !important;
    color: #333 !important;
    transition: all 0.3s ease !important;
}

.el-menu--horizontal.enhanced-menu > .el-menu-item:hover {
    background-color: rgba(255, 255, 255, 0.3) !important;
}

.el-menu--horizontal.enhanced-menu > .el-menu-item.is-active {
    border-bottom: 3px solid #3a7bd5 !important;
    color: #3a7bd5 !important;
    font-weight: 600 !important;
}

.logo-item {
    display: flex !important;
    align-items: center !important;
    margin-right: auto !important;
}

.site-name {
    font-size: 22px !important;
    font-weight: bold !important;
    color: #2c3e50 !important;
    margin-left: 10px;
}

.nav-link {
    display: block;
    height: 100%;
    display: flex;
    align-items: center;
    text-decoration: none !important;
    color: inherit !important;
}

.nav-item {
    position: relative;
}

.nav-item::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: #3a7bd5;
    transition: all 0.3s ease;
}

.nav-item:hover::after {
    left: 25%;
    width: 50%;
}

@media (max-width: 768px) {
    .enhanced-menu {
        height: 70px !important;
        padding: 0 10px !important;
    }
    
    .el-menu--horizontal.enhanced-menu > .el-menu-item {
        padding: 0 15px !important;
        font-size: 16px !important;
    }
    
    .site-name {
        display: none;
    }
}
</style>