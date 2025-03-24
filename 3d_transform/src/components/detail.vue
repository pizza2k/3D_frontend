<template>
    <div class="detail">
        <div class="head">

        </div>
        <div class="content">

        </div>
    </div>
</template>

<!-- <template>
    <el-popover
        placement="top-start"
        title="model.modelName"
        width="200"
        trigger="hover"
        content="modelBrief">
        <el-button slot="reference">hover 激活</el-button>
    </el-popover> -->

<script setup>
    const props = defineProps({
        model: {
            type: Object,
            required: true,
        },
    })
</script>