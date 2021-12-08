<template>
    <section class="section--home-our-kits pt-spc48 pb-spc20 sm:pb-spc48 relative" :class="classList">
        <div class="wrapper home-our-kits__heading max-w-1404px m-auto xl:pr-4 pr-4 pl-spc2 md:pr-4 sm:pl-4">
            <h1
                v-if="title"
                class="xl:text-size4 md:text-size6 sm:text-size6 font-boldText md:leading-spc3 mb-5 uppercase tracking-spc1 md:tracking-spc3 md:leading-spc4 ">
                {{title}}
            </h1>
            <TextButton text="Compare them all" btnurl="collections" />
        </div>

        <div class="our-kits-slider-wrap">
            <div class="wrapper max-w-1404px m-auto px-4 text-center">
                <swiper class="swiper mt-spc22" :options="swiperOption">
                    <swiper-slide class="h-full" v-for="product in products" :key="product.id">
                        <OurKitsItems :product="product" />
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<script>
    import OurKitsItems from "./OurKitsItems";

    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import TextButton from "../common/TextButton";

    export default {
        props: [ 'Productcontent', 'classList'],
        name: "OurKits",
        components: {
            TextButton,
            OurKitsItems,
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                products: this.$props.Productcontent.products,
                title: this.$props.Productcontent.title,
                swiperOption: {
                    slidesPerView: 3,
                    freeMode: true,
                    loop: true,
                }
            }
        }
    }
</script>

<style scoped>

</style>