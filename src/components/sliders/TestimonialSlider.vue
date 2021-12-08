<template>
    <section class="home-testimonials" :class="classList">
        <carousel
                :autoplay="false"
                :autoHeight="true"
                :items="1"
                :margin="20"
                :dots="true"
                :loop="true"
                :nav="false"
                :animateIn="'fadeIn'"
                :mouseDrag="false"
                :responsive="{
                    0:{
                         animateIn: 'slideInRight'
                    },
                    1024:{
                        animateIn: 'slideInRight'
                    },

                }"
        >
            <div class="home-testimonials-content flex items-center xl:flex-row md:flex-col sm:flex-col-reverse" v-for="(item, i) in testimonials" :key="i">
                <div class="home-testimonial-left-content flex-1 xl:max-w-43p lg:max-w-57p md:max-w-43p sm:max-w-100p md:h-auto pb-0 md:pb-spc28 md:pt-spc54 lg:pt-spc11 sm:py-spc21 sm:mb-16 md:mb-0 xl:order-1 md:order-2">
                    <div class="home-testimonial-left-content-inner xl:max-w-336px max-w-336px md:max-w-500px sm:max-w-100p sm:px-32 md:px-0 m-auto">
                        <p class="xl:text-size6 text-size6 md:text-size2 sm:text-size5 font-semibold text-white xl:leading-spc4 leading-spc4 sm:leading-spc13 md:leading-9 mb-5 relative">
                            {{item.desc}}
                        </p>
                        <cite class="home-testimonials__item-author not-italic text-white font-semibold text-base leading-spc5">
                            {{item.author}}
                            <span class="whitespace-pre-line block font-normal">
                                {{item.designation}}
                            </span>
                        </cite>
                        <div class="home-testimonial-btn mt-spc35">
                            <router-link
                                v-if="btnTxt"
                                :to="btnUrl? btnUrl : '#'"
                                class="take-quiz__cta bg-black text-white inline-block text-size5 leading-spc2 font-medium py-3 px-spc23 md:w-auto md:text-left sm:w-full sm:text-center">
                                {{btnTxt}} <svg class="btn__arrow inline-block w-auto h-spc16" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9537 15.7142L12.0137 24.9093L14.3703 27.3333L27.3337 13.9999L14.3703 0.666584L12.0137 3.09052L20.9537 12.2857L0.666992 12.2857L0.666992 15.7142L20.9537 15.7142Z" fill="white"></path></svg>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="home-testimonial-right-img flex-1 xl:max-w-57p lg:max-w-100p lg:w-full md:max-w-57p sm:max-w-100p xl:order-2 md:order-1 sm:order-1">
                    <div class="home-testimonial-right-img-inner">
                        <img class="object-cover w-full h-full block" :src="item.img" alt="Testimonial">
                    </div>
                </div>
            </div>

        </carousel>
    </section>
</template>

<script>
    import carousel from 'vue-owl-carousel'

    export default {
        name: "TestimonialSlider",
        props: ['classList'],
        components: {
            carousel
        },
        data() {
            return {
                btnTxt: "Shop our kits",
                btnUrl: 'collections',
                testimonials: [
                    {
                        desc: 'JUDY will play a critical role in the emergency and disaster response field by creating more resilient communities.',
                        author: 'Kathryn',
                        designation: 'Emergency Management and \nDisaster Response Expert',
                        img: require('@/assets/images/testimonial-expert.jpg'),
                    },
                    {
                        desc: 'I’m excited to see JUDY empower families to be as ready as possible and to drive conversations about readiness.',
                        author: 'Sandra',
                        designation: 'Emergency Management and \nDisaster Response Expert',
                        img: require('@/assets/images/testimonial-expert2.jpg'),
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>