<template>
    <a
            v-if="title"
            class="theme-button bg-black text-white font-bold inline-block text-center rounded py-6 px-8 text-size5 leading-spc2 tracking-spc2"
            :href="[url ? url : '#']"
            :class="className">
        <span v-if="title">{{title}}</span>
        <svg class="btn__arrow inline-block w-auto h-spc16 ml-2" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9537 15.7142L12.0137 24.9093L14.3703 27.3333L27.3337 13.9999L14.3703 0.666584L12.0137 3.09052L20.9537 12.2857L0.666992 12.2857L0.666992 15.7142L20.9537 15.7142Z" fill="white"></path></svg>
    </a>
</template>

<script>
    export default {
        name: "Button",
        props: ['title', 'url', 'className']
    }
</script>

<style scoped>

</style>