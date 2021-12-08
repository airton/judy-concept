<template>
    <a
        v-if="btnTitle"
        :href="[url ? url : '#']"
        class="double-text-button bg-black text-white font-bold inline-block text-center rounded py-8 px-16 text-size2 w-spc5 leading-spc2 tracking-spc2"
       :class="[btnHoverTitle? (btnClass + ' theme-double-btn-text') : btnClass]">
        <span class="btn_txt btn_txt_1 block" v-if="btnTitle">{{btnTitle}}</span>
        <span class="btn_txt btn_txt_2 hidden" v-if="btnHoverTitle">{{btnHoverTitle}}</span>
    </a>
</template>

<script>
    export default {
        name: "Button",
        props: ['url', 'btnClass', 'btnTitle', 'btnHoverTitle']
    }
</script>

<style scoped>

</style>