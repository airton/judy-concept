<template>
    <div class="bragbar-slider">
        <carousel
                :autoplay="false"
                :autoHeight="true"
                :items="BragbarSlidercontent.itemPerSlide"
                :margin="20"
                :dots="false"
                :loop="true"
                :nav="true"
                :navText="[prevButton, nextButton]"
                :mouseDrag="false"
                :responsive="{
                    0:{
                        items:1,
                        nav: true,
                        mouseDrag: true
                    },
                    750:{
                        items:3,
                        nav: false,
                        mouseDrag: false
                    },

                }"
        >
            <div class="bragbar-slide px-4" v-for="(BragbarSlide, i) in BragbarSlidercontent.BragbarSlides" :key="i">
                <p class="bragbar-desc max-w-340px m-auto text-xl leading-8 whitespace-pre-line">
                    {{BragbarSlide.desc}}
                </p>
                <div class="bragbar-slide-logo mt-6">
                    <img :src="BragbarSlide.img" alt="People" class="bragbar-img w-auto max-h-34px max-w-240px m-auto">
                </div>
            </div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "BragbarSlider",
        props: {
            BragbarSlidercontent: {
                type: Object
            }
        },
        components: {
            carousel
        },
        data() {
            return {
                prevButton: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="15 18 9 12 15 6"></polyline></svg>',
                nextButton: '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><polyline points="9 18 15 12 9 6"></polyline></svg>',
            }
        }
    }
</script>

<style scoped>

</style>