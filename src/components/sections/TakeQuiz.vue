<template>
    <section class="section--home-takequiz overflow-hidden bg-lightWhite relative pt-24 pb-spc18">
        <div class="home-takequiz__intro md:relative">
            <div class="takequiz-img-wrap max-w-759px m-auto">
                <img class="ml-spc15 takequiz-img" :src="familyImg" alt="Family">
                <img class="ml-spc15 hidden takequiz-img2" :src="require('@/assets/images/zipcode.png')" alt="Family">
            </div>
            <div class="takequiz-copy max-w-640px ml-auto mr-auto text-center text-2xl md:text-2xl sm:text-xl leading-9 mt-spc13 mb-spc14">
                <p>{{desc}}</p>
            </div>
            <div class="family-plan-img w-spc17 absolute">
                <svg class="w-full" width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M102.691 166.971C145.196 159.967 173.975 119.831 166.971 77.3264C159.966 34.8214 119.831 6.04246 77.3263 13.0468C34.8213 20.0511 6.04239 60.1863 13.0467 102.691C20.051 145.196 60.1863 173.975 102.691 166.971Z" fill="#FEEC8E"></path>
                    <path d="M48.9169 69.7375L45.2576 76.1653L29.79 67.3542L37.9993 52.9338L43.6447 56.1477L39.0947 64.1403L40.4428 64.9107L44.9928 56.9181L50.1928 59.8792L45.6428 67.8718L48.9169 69.7375Z" fill="black"></path>
                    <path d="M58.5826 54.4866L59.3168 56.7014L52.8529 61.432L48.0742 42.8708L55.489 37.4421L71.5826 47.6977L65.1427 52.4162L63.2529 51.044L58.5826 54.4866ZM58.9918 47.9384L56.115 45.856L55.477 45.2782L55.8261 46.0366L56.9455 49.4431L58.9918 47.9384Z" fill="black"></path>
                    <path d="M80.4296 46.3254L72.8101 47.3365L70.4629 29.7022L77.3721 28.7874L82.3314 33.4097L85.786 27.668L92.6231 26.7532L94.9703 44.3874L87.3749 45.3985L86.3518 37.731L83.5712 41.9439L83.0536 42.0161L79.4184 38.706L80.4296 46.3254Z" fill="black"></path>
                    <path d="M99.0401 38.8023L102.856 40.0301L104.096 36.1903L100.28 34.9625L102.386 28.4023L117.228 33.181L115.122 39.7533L111.258 38.5135L110.03 42.3533L113.894 43.5931L111.787 50.1412L96.9336 45.3625L99.0401 38.8023Z" fill="black"></path>
                    <path d="M124.569 37.1172L130.888 42.2329L124.22 50.4783L130.635 55.6663L126.11 61.2635L113.362 50.9598L124.569 37.1172Z" fill="black"></path>
                    <path d="M133.32 60.1201L138.929 48.6367L143.347 55.6182L141.048 60.0238L146.031 59.8552L150.424 66.7886H137.581L131.707 70.508L127.47 63.8275L133.32 60.1201Z" fill="black"></path>
                    <path d="M53.2741 138.445L47.3398 134.039L57.9324 119.739L65.9371 125.673C71.3176 129.658 72.0278 133.473 69.0908 137.445C66.1898 141.358 62.4343 141.442 57.1982 137.554L55.0917 135.989L53.2741 138.445ZM58.5102 131.367L60.5204 132.859C61.7722 133.786 62.3861 133.75 62.9639 132.968C63.5417 132.197 63.3852 131.559 62.1454 130.633L60.1593 129.164L58.5102 131.367Z" fill="black"></path>
                    <path d="M73.9529 131.006L81.9214 132.667L79.7668 143.055L87.8557 144.74L86.3872 151.782L70.3418 148.447L73.9529 131.006Z" fill="black"></path>
                    <path d="M98.8454 148.436L98.6047 150.759L90.7686 152.42L94.0547 133.546L103.046 131.644L113.494 147.617L105.682 149.266L104.527 147.244L98.8454 148.436ZM101.903 142.634L100.145 139.54L99.7963 138.758V139.588L99.4111 143.151L101.903 142.634Z" fill="black"></path>
                    <path d="M123.197 141.129L117.251 145.643L106.502 131.463L112.388 126.997L122.09 129.573L117.311 123.266L123.245 118.776L133.995 132.956L128.277 137.289L118.19 134.544L123.197 141.129Z" fill="black"></path>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M84.196 106.583L76.7932 99.1801L66.3691 88.756L73.4951 81.6301L83.9191 92.0422C84.0756 92.1986 84.3284 92.1986 84.4849 92.0422L105.598 70.9292L112.724 78.0551L84.196 106.583Z" fill="black"></path>
                </svg>
            </div>
        </div>
        <div class="takequiz-lockup-wrap text-center relative">
            <a @click="zipcodeshow" v-if="btnTxt"
                :href="btnUrl ? btnUrl : '#'"
                class="take-quiz__cta bg-black text-white inline-block xl:text-size2 text-size2 md:text-2xl leading-spc2 font-medium xl:py-8 xl:px-16 py-8 px-16 md:px-8 md:py-3 sm:py-3 sm:px-8 sm:text-size5">
                {{btnTxt}} <svg class="btn__arrow inline-block w-auto h-spc16" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20.9537 15.7142L12.0137 24.9093L14.3703 27.3333L27.3337 13.9999L14.3703 0.666584L12.0137 3.09052L20.9537 12.2857L0.666992 12.2857L0.666992 15.7142L20.9537 15.7142Z" fill="white"></path></svg>
            </a>

            <div class="takequiz-pointy-hand block absolute bg-no-repeat"></div>
        </div>
        <div class="takequiz-pointy-hand takequiz-pointy-hand-mobile hidden block absolute bg-no-repeat"></div>

        <!-- popup zip code -->
        <div :class="{'active':zipcodevisible}" v-show="zipcodevisible" class="zip-code-popup-wrap overflow-hidden flex items-center justify-center text-center fixed left-0 top-0 w-full h-full bg-lightWhite">
            <span @click="zipcodeshow" class="zip-code-close absolute" tabindex="0" role="button" aria-label="Close Quiz Popup">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" class="icon w-spc52 h-spc52" viewBox="0 0 20 20">
                    <path d="M15.89 14.696l-4.734-4.734 4.717-4.717c.4-.4.37-1.085-.03-1.485s-1.085-.43-1.485-.03L9.641 8.447 4.97 3.776c-.4-.4-1.085-.37-1.485.03s-.43 1.085-.03 1.485l4.671 4.671-4.688 4.688c-.4.4-.37 1.085.03 1.485s1.085.43 1.485.03l4.688-4.687 4.734 4.734c.4.4 1.085.37 1.485-.03s.43-1.085.03-1.485z"></path>
                </svg>
            </span>
            <ZipCodeBox :title="zipCodetitle" />
        </div>
    </section>
</template>

<script>
    import ZipCodeBox from "../common/ZipCodeBox";
    export default {
        name: "TakeQuiz",
        components: {ZipCodeBox},
        props: ['desc', 'familyImg', 'btnTxt', 'btnUrl'],
        data() {
            return {
                zipcodevisible: false,
                zipCodetitle: 'Enter the zip code of where you \nlive in the United States.'
            }
        },
        methods: {
            zipcodeshow(e) {
                e.preventDefault();
                this.zipcodevisible = !this.zipcodevisible
            }
        }
    }
</script>

<style scoped>

</style>