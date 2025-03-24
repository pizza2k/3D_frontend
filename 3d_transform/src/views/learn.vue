<template>
    <div>
        <p>First day</p>
        {{ msg.split('').reverse().join('') }}
        {{ num+1 }}
        <p v-html="myHtml"></p>
    </div>
    <div>
        <p>second day</p>
        <div v-bind:id="myid">aaaaa</div>
        <div v-bind="secondAttr">sss</div>
        <div v-if="true">can see</div>
        <div v-if=false>cant see</div>
        <div v-else>haob</div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            msg:"rgathrsh",
            num:50,
            myHtml:'<a href="https://fanyi.baidu.com/">百度</a>',
            myid:"wwwID",
            secondAttr: {
                id:"sfsf",
                class:"fsg",
            }
        }
    }
}
</script>