<template>
    <div class="instagram-slider relative">
        <span class="home-instagram__hashtag inline-block text-base font-medium absolute">
            Get <a href="https://instagram.com/">#readyjudy</a>
        </span>
        <carousel
                :autoplay="false"
                :autoHeight="true"
                :items="InstagramSlidercontent.itemPerSlide"
                :margin="0"
                :dots="false"
                :loop="true"
                :nav="false"
                :mouseDrag="false"
                :responsive="{
                    0:{
                        items:3,
                        mouseDrag: true
                    },
                    750:{
                        items:5,
                        mouseDrag: false
                    },

                }"
        >
            <div class="instagram-slide" v-for="(InstagramSlide, i) in InstagramSlidercontent.instagramItems" :key="i">
                <a :href="InstagramSlide.url ? InstagramSlide.url : '#'">
                    <img :src="InstagramSlide.img" alt="Instagram">
                </a>
            </div>
        </carousel>
    </div>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "InstagramSlider",
        props: {
            InstagramSlidercontent: {
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