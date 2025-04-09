<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import headMenu from "../components/head-menu.vue";
import card from "../components/card.vue";
import { fetchModelDetails } from "../api.js"; // 假设api.js中有这个接口

const modelDatas = ref([
  {
    img: "/img/home/img1.png",
    modelName: "Scene01",
    modelId: "id1",
    modelBrief: "这是一个Park场景，支持所有编辑操作哦~",
  },
  {
    img: "/img/home/img2.png",
    modelName: "Scene02",
    modelId: "id2",
    modelBrief: "这是一个Park场景，支持所有编辑操作哦~",
  },
  {
    img: "/img/home/img3.jpg",
    modelName: "Scene03",
    modelId: "id3",
    modelBrief: "这是一个Room场景，支持所有编辑操作哦~",
  },
  {
    img: "/img/home/img4.jpg",
    modelName: "Scene04",
    modelId: "id4",
    modelBrief: "这是一个Delivery场景，支持所有编辑操作哦~",
  },
  {
    img: "/img/home/img5.jpg",
    modelName: "Scene05",
    modelId: "id5",
    modelBrief: "这是一个LivingRoom场景，支持所有编辑操作哦~",
  },
  {
    img: "/img/home/img6.jpg",
    modelName: "Scene06",
    modelId: "id6",
    modelBrief: "这是一个Corner场景，支持所有编辑操作哦~",
  },
]);

const isLoading = ref(false); // 控制 loading 动画的显示
const loadingDots = ref(""); // 动态点的内容
let dotsInterval = null;

const handleModelClick = async (modelId) => {
  try {
    console.log("Clicked modelId:", modelId);

    // 显示 loading 动画
    isLoading.value = true;

    // 启动动态点的动画
    startLoadingDots();

    // 调用接口（不等待返回值）
    fetchModelDetails(modelId).catch((error) => {
      console.error("Error fetching model details:", error);
    });

    // 延迟 20 秒后跳转
    setTimeout(() => {
      stopLoadingDots(); // 停止动态点动画
      isLoading.value = false; // 隐藏 loading 动画
      window.location.href = `http://211.71.15.42:3002/`;
    }, 20000);
  } catch (error) {
    console.error("Unexpected error:", error);
    stopLoadingDots(); // 停止动态点动画
    isLoading.value = false; // 如果出错，隐藏 loading 动画
  }
};

// 动态更新点的内容
const startLoadingDots = () => {
  let count = 0;
  dotsInterval = setInterval(() => {
    count = (count + 1) % 4; // 循环 0, 1, 2, 3
    loadingDots.value = ".".repeat(count); // 根据 count 更新点的数量
  }, 1000); // 每 2 秒更新一次
};
// 停止动态点动画
const stopLoadingDots = () => {
  clearInterval(dotsInterval);
  loadingDots.value = ""; // 清空点
};

// 清理定时器
onBeforeUnmount(() => {
  stopLoadingDots();
});
</script>

<template>
  <div class="my-list">
    <div class="el-menu">
      <headMenu :my_index="2"></headMenu>
    </div>
    <div class="cards">
      <card
        v-for="modelData in modelDatas"
        :key="modelData.modelId"
        :model="modelData"
        @click="handleModelClick(modelData.modelId)"
      ></card>
    </div>

    <!-- Loading 动画 -->
    <div v-if="isLoading" class="loading-overlay">
      <div class="loading-text">
        Loading<span>{{ loadingDots }}</span>
      </div>
    </div>
  </div>
</template>

<style>
html,
body {
  height: 100%;
  margin: 0;
}
.el-menu {
  /* margin-top: 3vh; */
  /* margin-bottom: 5vh; */
}
.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0px;
  max-height: 80vh;
  overflow-y: auto;
  padding: 10px;
  margin-top: 1vh;
}

::-webkit-scrollbar {
  display: none; /* Chrome/Safari/Edge */
}

/* Loading 动画样式 */
.loading-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* 淡灰色背景 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.loading-text {
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}
</style>