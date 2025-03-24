<template>
    <el-input-tag v-model="input" :max="3" placeholder="enter up to 3 tags" />
</template>

<script lang="js" setup>
    import { ref, watch } from 'vue';

    // 定义 props 和 emits
    const props = defineProps({
        modelValue: {
            type: String,
            default: '',
        },
    });

    const emit = defineEmits(['update:modelValue']);

  // 监听输入内容的变化
    const textarea = ref(props.modelValue);
    watch(textarea, (newValue) => {
        emit('update:modelValue', newValue);
    });
</script>