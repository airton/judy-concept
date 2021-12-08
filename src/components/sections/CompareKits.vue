<template>
    <div class="compare-kit-wrapper pt-spc57 md:pt-spc57 sm:pt-spc11 xl:pb-spc59 lg:pb-spc59 md:pb-spc59 sm:pb-0" :class="classList">
        <h1 v-if="title" class="compare-kit-title text-center mb-spc58 text-5xl md:text-5xl sm:text-size2">
            {{title}}
        </h1>
        <div class="compare-kit-slider max-w-1404px mx-auto hidden">
            <slick id="slick2" :options="slickOptions2" ref="slickSetting2" class="border-t border-b">
                <div class="my-slick-nav" v-for="(collectionTitle, i) in CollectionSlides" :key="i">
                    <div class="my-slick-nav-link uppercase text-xs pt-3 pb-3">
                        {{collectionTitle.title}}
                    </div>
                </div>
            </slick>

            <slick id="slick1" :options="slickOptions" ref="slickSetting1">
                <CollectionSlider :product="product" v-for="product in products" :key="product.id" />
            </slick>
        </div>
        <div class="compare-kit-slider-content wrapper max-w-1500px px-spc49 m-auto">
            <div class="compare-row-flex flex flex-col xl:block lg:block md:block sm:hidden">
                <CompareKitsItem :product="product" v-for="product in products" :key="product.id" />
            </div>
            <div class="compare-img-bottom xl:mt-spc28 lg:mt-spc28 md:mt-spc28 sm:mt-spc14 ">
                <img class="m-auto" :src="compareImg" alt="Compare">
            </div>
        </div>
    </div>
</template>

<script>
    import Slick from 'vue-slick'
    import CompareKitsItem from "./CompareKitsItem";
    import CollectionSlider from "../sliders/CollectionSlider";
    // Slick Slider
    import 'slick-carousel/slick/slick.css'

    export default {
        name: "CompareKits",
        components: {
            CompareKitsItem,
            CollectionSlider,
            Slick
        },
        props: [ 'CompareContent', 'classList', 'title'],
        data() {
            return {
                compareImg: require('@/assets/images/compare-img.svg'),
                products: this.$props.CompareContent.products,
                CollectionSlides: [
                    {
                        title: "The Safe",
                    },
                    {
                        title: "The Mover",
                    },
                    {
                        title: "The Starter",
                    },
                    {
                        title: "The Mover Max",
                    },
                    {
                        title: "The Safety",
                    },
                ],
            }
        },
        computed: {
            slickOptions() {
                return {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    adaptiveHeight: true,
                    asNavFor: "#slick2"
                }
            },
            slickOptions2() {
                return {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '30px',
                    infinite: false,
                    focusOnSelect: true,
                    variableWidth: true,
                    asNavFor: "#slick1",
                }
            }
        }


    }
</script>

<style scoped>

</style>