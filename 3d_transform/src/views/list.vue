<script setup>
import { ref } from "vue";
import headMenu from "../components/head-menu.vue";
import card from "../components/card.vue";
import { fetchModelDetails } from "../api.js"; // 假设api.js中有这个接口

const modelDatas = ref([
  {
    img: "/img/home/img1.jpg",
    modelName: "model",
    modelId: "id1",
    modelBrief:
      "这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~",
  },
  {
    img: "/img/home/img1.jpg",
    modelName: "model",
    modelId: "id2",
    modelBrief:
      "这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~",
  },
  {
    img: "/img/home/img1.jpg",
    modelName: "model",
    modelId: "id3",
    modelBrief:
      "这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~",
  },
  {
    img: "/img/home/img1.jpg",
    modelName: "model",
    modelId: "id4",
    modelBrief:
      "这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~",
  },
  {
    img: "/img/home/img1.jpg",
    modelName: "model",
    modelId: "id5",
    modelBrief:
      "这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~",
  },
  {
    img: "/img/home/img1.jpg",
    modelName: "model",
    modelId: "id6",
    modelBrief:
      "这是一个很好的模型，点进来玩玩吧asfewsaddsfgrnhefwrgefvdctadddddddddddd~",
  },
]);

const handleModelClick = async (modelId) => {
  try {
    console.log("Clicked modelId:", modelId);
        // 跳转到指定页面
    //window.location.href = `http://localhost:8081`;
    window.location.href = `http://211.71.15.42:3002/`;
    const response = await fetchModelDetails(modelId);
    console.log("Model details:", response);

  } catch (error) {
    console.error("Error fetching model details:", error);
  }
};
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
  </div>
</template>

<style>
html,
body {
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