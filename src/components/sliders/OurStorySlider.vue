<template>
    <div class="our-story-slider hidden">
        <carousel
                :autoplay="false"
                :autoHeight="true"
                :items="OurStorySlidercontent.itemPerSlide"
                :margin="20"
                :dots="true"
                :loop="true"
                :nav="false"
                :mouseDrag="false"
                :responsive="{
                    0:{
                        items:1,
                        mouseDrag: true
                    }

                }"
        >
            <div class="our-story-slide p-8 text-center  " v-for="(ourStorySlide, i) in OurStorySlidercontent.OurStorySlides" :key="i">
                <h1 class="our-story-title text-primaryColor xl:text-size20 lg:text-size12 md:text-size12 sm:text-size20 tracking-spc6 leading-none font-boldText xl:mb-spc66 sm:mb-spc38">
                    {{ourStorySlide.title}}
                </h1>
                 <h3 class="our-story-subtitle text-primaryColor xl:text-size14 lg:text-size2 md:text-size2 sm:text-size2 font-boldText tracking-spc3 uppercase leading-none">
                    {{ourStorySlide.subtitle}}
                </h3>
                <p class="our-story-desc xl:text-size2 lg:text-size5 md:text-size5 sm:text-size5 leading-tight mt-8 xl:max-w-300px lg:max-w-300px md:max-w-300px sm:max-w-300px mx-auto">
                    {{ourStorySlide.desc}}
                </p>
            </div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "OurStorySlider",
        props: {
            OurStorySlidercontent: {
                type: Object
            }
        },
        components: {
            carousel
        }
    }
</script>

<style scoped>

</style>