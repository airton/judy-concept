<template>
    <section class="cta-wrapper pt-spc28 pb-spc57">
        <div class="wrapper max-w-1440px m-auto">
            <div class="cta-content max-w-870px ml-auto mr-auto text-center">
                <img v-if="img" :src="img" alt="CTA" class="ml-auto mr-auto">
                <h1 v-if="title" class="text-5xl xl:text-5xl lg:text-5xl md:text-5xl sm:text-size2 leading-spc7 mt-spc70 mb-spc71">
                    {{title}}
                </h1>
                <router-link
                    v-if="btnTxt"
                    :to="btnUrl? btnUrl : '#'"
                    class="take-quiz__cta bg-black text-white inline-block text-size5 leading-spc2 font-medium py-3 px-spc23">
                    {{btnTxt}} <svg class="btn__arrow inline-block w-auto h-spc16" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9537 15.7142L12.0137 24.9093L14.3703 27.3333L27.3337 13.9999L14.3703 0.666584L12.0137 3.09052L20.9537 12.2857L0.666992 12.2857L0.666992 15.7142L20.9537 15.7142Z" fill="white"></path></svg>
                </router-link>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "CTA",
        props: ['img', 'title', 'btnTxt', 'btnUrl']
    }
</script>

<style scoped>

</style>