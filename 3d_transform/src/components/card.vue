<template>
    <div class="my-card" @mouseover="handleHover" @mouseleave="handleLeave">
        <div class="img">
            <img :src="model.img" :alt="model.modelName" style="height: 170px; border-radius: 5px; width: 250px" />
        </div>
        <div class="font">
            <div class="modelName">
                {{ model.modelName }}:
            </div>
            <div class="modelBrief">
                {{ model.modelBrief }}
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    model: {
        type: Object,
        required: true,
        // validator:(value)=>{
        //     return(
        //         typeof value === 'object' &&
        //         'img' in value &&
        //         'modelName' in value &&
        //         'modelId' in value &&
        //         'modelBrief' in value
        //     );
        // },
    },
});

// const gotoModel = () => {
//     /*router.push({ name: 'model-detail', params: { id: props.model.modelId } });*/
// };

// 处理鼠标悬停
const handleHover = (event) => {
    event.currentTarget.classList.add('hovered');
};

// 处理鼠标离开
const handleLeave = (event) => {
    event.currentTarget.classList.remove('hovered');
};
</script>

<style scoped>
.my-card {
    margin: 20px;
    cursor: pointer;
    border: 2px solid #ccc;
    padding: 10px;
    border-radius: 8px;
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* 添加 transform 过渡 */
    transform-origin: center; /* 设置放大原点为中心 */
    width: 250px;
    height: 260px;
}

.my-card.hovered {
  transform: scale(1.05); /* 悬停时放大 5% */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* 悬停时添加阴影 */
}

.font {
    text-align: left; /* 文字居左 */
    margin-top: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    
}

.modelName {
    font-size: 18px; /* 字体大小 */
    font-weight: bold; /* 字体加粗 */
    color: #333; /* 字体颜色 */
    margin-bottom: 5px; /* 与 modelBrief 的间距 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 显示省略号 */
    white-space: nowrap;
}

.modelBrief {
    font-size: 14px; /* 字体大小 */
    color: #666; /* 字体颜色 */
    line-height: 1.5; /* 行高 */
    overflow: hidden; /* 隐藏超出容器的内容 */
    text-overflow: ellipsis; /* 显示省略号 */
}

</style>