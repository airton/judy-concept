<template>
    <section class="text-judy-wrapper pt-spc27 pb-spc28 relative" :class="classList">
        <div class="wrapper max-w-1404px  m-auto px-4">
            <div class="text-judy-flex flex sm:max-w-400px md:max-w-100p mx-auto md:flex sm:block items-center">
                <div class="text-judy-content flex-1 max-w-50p md:max-w-50p md:max-w-50p sm:max-w-100p pl-spc24 md:pl-spc24 sm:pl-4">
                    <div class="text-judy-content-inner max-w-483px md:max-w-483px sm:max-w-100p">
                        <h2 class="text-size6 md:text-size6 sm:text-size5 font-medium leading-spc4 md:leading-spc4 sm:leading-spc13 mb-spc12 sm:text-white md:text-black">
                            {{title}}
                        </h2>
                        <div class="home-text-judy__mobile-phone sm:block md:hidden relative">
                            <div class="home-text-judy__mobile-phone__video relative">
                                <video loop="" preload="" autoplay="" playsinline="" class=" w-auto max-w-none">
                                    <source :src="videoSrc2" type="video/mp4">
                                </video>
                            </div>
                        </div>
                        <p class="text-size5 md:text-size5 sm:text-xl md:text-black sm:text-white leading-9 md:leading-9 sm:leading-spc13 max-w-420px mb-8">
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
                <div class="text-judy-phone block sm:hidden md:block flex-1 max-w-50p">
                    <div class="text-judy-desktop-phone max-w-577px relative block">
                        <div class="text-judy-message-video w-spc25 h-spc26 m-auto overflow-hidden relative">
                            <video loop="" preload="" autoplay="" playsinline="" class="absolute w-auto max-w-none">
                                <source :src="videoSrc" type="video/mp4">
                            </video>
                        </div>
                        <div
                            :class="'text-message-bubble z-10 absolute mb-spc29 rp-none text-message-bubble-'+bubble.id"
                            v-for="bubble in messageBubbles" :key="bubble.id"
                        >
                            <div class="bubble__message xl:block lg:hidden relative bg-primaryColor text-white min-w-117px w-auto py-4 px-5 text-center text-size5 leading-8">
                                <p>{{bubble.text}}</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="home-kit-details__badge absolute z-10">
            <img :src="thumb" alt="Thumb" class="thumb max-w-200px  ">
        </div>
    </section>
</template>

<script>
    export default {
        name: "TextJudy",
        props: ['classList'],
        data() {
            return {
                thumb: require('@/assets/images/details-badge.png'),
                title: 'The first emergency kit that’s digitally-connected keeping you prepared for any scenario.',
                desc: 'Text us your preparedness questions and have it answered in real-time by our leading experts.',
                btnTxt: 'Text JUDY',
                btnUrl: '#',
                videoSrc: require('@/assets/videos/mobile.mp4'),
                videoSrc2: require('@/assets/videos/mobile2.mp4'),
                messageBubbles: [
                    {
                        id: 1,
                        text: 'Guides'
                    },
                    {
                        id: 2,
                        text: 'Reminders'
                    },
                    {
                        id: 3,
                        text: 'Tips'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>