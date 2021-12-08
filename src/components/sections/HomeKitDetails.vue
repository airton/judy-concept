<template>
    <section class="home-kit-details-wrapper relative py-40 md:py-40 sm:pt-0" :class="classList">
        <div class="home-kit-details-bg bg-no-repeat bg-cover w-full h-full left-0 top-0 absolute" :style="{backgroundImage: 'url('+sectionBg+')'}"></div>
        <img :src="image" alt="cta-img" class="home-kit-details__mobile-image hidden w-full sm:block md:hidden mb-16 relative max-h-1007px z-10">
        <div class="wrapper max-w-1404px  m-auto px-4 relative z-10">
            <div class="home-kit-details-content xl:w-spc30 lg:w-spc76 md:w-spc30 sm:w-full pl-spc24 md:pl-spc24 sm:pl-4 md:pr-0 sm:pr-4">
                <div class="home-kit-details-content-inner">
                    <p class="text-size5 md:text-size5 leading-9 mr-20 md:mr-20 sm:mr-0 mb-spc31 sm:text-center md:text-left sm:text-xl">
                        {{title}}
                    </p>
                    <div class="home-kit-details-highlight">
                        <div class="home-kit-details-highlight-list flex flex-wrap ml-spc33 mr-spc33 mb-5">
                            <HomeKitsDetailsItems :quizcontent="item"  v-for="(item, i) in quizItem.highlightLists " :key="i"/>
                        </div>
                    </div>
                    <div class="home-kit-details-btn md:text-left sm:text-center">
                        <router-link
                                v-if="btnTxt"
                                :to="btnUrl? btnUrl : '#'"
                                class="take-quiz__cta bg-black text-white inline-block text-size5 leading-spc2 font-medium py-3 px-spc23">
                            {{btnTxt}} <svg class="btn__arrow inline-block w-auto h-spc16" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9537 15.7142L12.0137 24.9093L14.3703 27.3333L27.3337 13.9999L14.3703 0.666584L12.0137 3.09052L20.9537 12.2857L0.666992 12.2857L0.666992 15.7142L20.9537 15.7142Z" fill="white"></path></svg>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

    import HomeKitsDetailsItems from "./HomeKitsDetailsItems";

    let quizItem = {
        highlightLists: [
            {
                id: 1,
                title: 'Tools and \n supplies',
                desc: 'Expert-picked tools and supplies for \nany kind of emergency.',
            },
            {
                id: 2,
                title: 'First aid essentials',
                desc: 'Medical supplies for any bumps, \nbruises, or burns.',
            },
            {
                id: 3,
                title: 'FOOD AND \n WATER',
                desc: 'Nutrient rich meal replacement bars \nand emergency water.',
            },
            {
                id: 4,
                title: 'Plans and \n guides',
                desc: 'Worksheets that make it easy to \ncreate a personalized plan.',
            },
        ],
    }
    export default {
        name: "HomeKitDetails",
        props: ['classList', 'sectionBg'],
        components: {
            HomeKitsDetailsItems
        },
        data() {
            return {
                quizItem,
                title: 'From flashlights to first aid supplies, JUDY has everything you need for just-in-case, all in one friendly place.',
                btnTxt: "What's inside",
                btnUrl: 'collections',
                image: require('@/assets/images/details-desktop-bg2.jpg'),
            }
        },
    }
</script>

<style scoped>

</style>