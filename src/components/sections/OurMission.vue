<template>
    <section
        v-if="title || desc || btnTxt"
        class="our-mission-wrapper pt-spc2 pb-spc63"
        :class="classlist">
        <div class="our-mission-content">
            <div class="our-mission-inner max-w-800px m-auto text-center">
                <img class="m-auto" :src="img" alt="Mission">
                <h1 v-if="title" class="my-spc50 font-boldText text-size11 xl:text-size11 lg:text-size11 md:text-size11 sm:text-size2 whitespace-pre-line leading-spc4 tracking-spc3">
                    {{title}}
                </h1>
                <p v-if="desc" class="text-size5 leading-8 whitespace-pre-line xl:whitespace-pre-line lg:whitespace-pre-line md:whitespace-normal sm:whitespace-normal mt-6 mb-5">
                    {{desc}}
                </p>
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
        name: "OurMission",
        props: ['img', 'title', 'desc', 'btnTxt', 'btnUrl', 'classlist']
    }
</script>

<style scoped>

</style>