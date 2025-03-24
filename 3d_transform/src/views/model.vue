<script setup>
import textarea from '../components/textarea.vue';
</script>

<template>
    <div>
        
    </div>
    <div id="user_part">
        <div id="user_request">
            please input your request:
        </div>
        <textarea v-model="parentText" />
        <p>用户输入的内容：{{ parentText }}</p>
    </div>
</template>

<style>

</style>