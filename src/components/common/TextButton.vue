<template>
    <router-link v-if="text"
            class="text-btn text-2xl font-medium text-black"
            :to="btnurl ? btnurl : '#'">
        <span>{{text}}</span>
        <svg class="btn__arrow inline-block w-auto h-spc16 ml-2" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9537 15.7142L12.0137 24.9093L14.3703 27.3333L27.3337 13.9999L14.3703 0.666584L12.0137 3.09052L20.9537 12.2857L0.666992 12.2857L0.666992 15.7142L20.9537 15.7142Z" fill="white"></path>
        </svg>
    </router-link>
</template>

<script>
    export default {
        name: "TextButton",
        props: ['text', 'btnurl']
    }
</script>

<style scoped>

</style>