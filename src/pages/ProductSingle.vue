<template>
  <main class="product-single-page">
    <!-- Header -->
    <ThemeHeader />

    <div id="product-slide-hero" class="shopify-section">
      <section class="product-slide-hero-wrapper relative mt-spc28">
        <div class="product-slide-hero-overlay text-center w-full absolute z-10">
          <h1
            v-if="product.title"
            class="font-boldText uppercase tracking-spc4 xl:text-size19 lg:text-size19 md:text-size19 sm:text-size2 leading-spc7 mb-5"
          >{{product.title}}</h1>
          <p
            v-if="product.subtitle"
            class="max-w-300px ml-auto mr-auto tracking-spc2 leading-normal"
          >{{product.subtitle}}</p>
          <div
            id="product-slide-hero-custom-dots"
            class="mt-spc4 owl-dots flex items-center justify-center w-full"
          >
            <button
              v-for="item in product.screenshots"
              :key="item.id"
              class="owl-dot mx-spc73 active w-5 h-5 p-spc73 block relative"
            ></button>
          </div>
        </div>
        <div class="product-slider-hero">
          <carousel
            :autoplay="false"
            :autoHeight="true"
            :items="1"
            :margin="20"
            :dots="true"
            :loop="true"
            :nav="false"
            :dotsContainer="'#product-slide-hero-custom-dots'"
          >
            <div class="product-slider-item" v-for="item in product.screenshots" :key="item.id">
              <img :src="item" alt="Product" />
            </div>
          </carousel>
        </div>
      </section>
    </div>

    <div id="product-content-overview" class="shopify-section">
      <section class="product-content-overview-copy pt-40 pb-spc55 bg-white">
        <div class="wrapper max-w-1440px m-auto">
          <div
            class="product-content-overview-heading max-w-650px ml-auto mr-auto text-center pb-spc3 px-spc70"
          >
            <h1
              class="xl:text-5xl lg:text-5xl md:text-5xl sm:text-size2 leading-spc7 mb-spc70"
            >Everything you need for up to 72 hours of self-sufficiency</h1>
            <p
              class="xl:text-2xl lg:text-2xl md:text-2xl sm:text-lg tracking-spc2"
            >1 in 2 families isn’t ready for an emergency. With an at-home ready-kit packed with multifunctional essentials, you can create the best-case-scenario in any emergency.</p>
          </div>
          <div class="product-overview-gallery px-spc6 xl:flex lg:flex md:flex sm:block">
            <div class="product-overview-gallery-item xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-full">
              <img :src="require('@/assets/images/p-single-g1.jpg')" alt />
            </div>
            <div class="product-overview-gallery-item xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-full">
              <img :src="require('@/assets/images/p-single-g2.jpg')" alt />
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Zip Code -->
    <div id="product-zipcode-wrap" class="shopify-section">
      <section
        class="product-zipcode-wrapper overflow-hidden bg-lightWhite relative pb-spc18 pt-24"
      >
        <div class="wrapper max-w-800px ml-auto mr-auto">
          <div class="product-zipcode-content">
            <div class="product-zipcode-inner text-center relative">
              <div
                class="product-zipcode-img ml-spc15 xl:block lg:block sm:hidden"
                v-if="zipcodeimg"
              >
                <img :src="zipcodeimg" alt />
              </div>
              <div
                class="product-zipcode-img product-zipcode-img-mobile hidden xl:hidden lg:hidden sm:block"
                v-if="zipcodeimg"
              >
                <img class="max-w-209px m-auto" :src="zipcodeimg2" alt />
              </div>
              <p
                class="whitespace-pre-line text-2xl leading-9 mt-spc13 mb-spc14"
                v-if="zipcodetitle"
              >{{zipcodetitle}}</p>
            </div>
            <ZipCodeBox />
          </div>
        </div>
        <div class="zipcode-intro-badge absolute">
          <svg
            width="180"
            height="180"
            viewBox="0 0 180 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M102.691 166.971C145.196 159.967 173.975 119.831 166.971 77.3264C159.966 34.8214 119.831 6.04246 77.3263 13.0468C34.8213 20.0511 6.04239 60.1863 13.0467 102.691C20.051 145.196 60.1863 173.975 102.691 166.971Z"
              fill="#FEEC8E"
            />
            <path
              d="M48.9169 69.7375L45.2576 76.1653L29.79 67.3542L37.9993 52.9338L43.6447 56.1477L39.0947 64.1403L40.4428 64.9107L44.9928 56.9181L50.1928 59.8792L45.6428 67.8718L48.9169 69.7375Z"
              fill="black"
            />
            <path
              d="M58.5826 54.4866L59.3168 56.7014L52.8529 61.432L48.0742 42.8708L55.489 37.4421L71.5826 47.6977L65.1427 52.4162L63.2529 51.044L58.5826 54.4866ZM58.9918 47.9384L56.115 45.856L55.477 45.2782L55.8261 46.0366L56.9455 49.4431L58.9918 47.9384Z"
              fill="black"
            />
            <path
              d="M80.4296 46.3254L72.8101 47.3365L70.4629 29.7022L77.3721 28.7874L82.3314 33.4097L85.786 27.668L92.6231 26.7532L94.9703 44.3874L87.3749 45.3985L86.3518 37.731L83.5712 41.9439L83.0536 42.0161L79.4184 38.706L80.4296 46.3254Z"
              fill="black"
            />
            <path
              d="M99.0401 38.8023L102.856 40.0301L104.096 36.1903L100.28 34.9625L102.386 28.4023L117.228 33.181L115.122 39.7533L111.258 38.5135L110.03 42.3533L113.894 43.5931L111.787 50.1412L96.9336 45.3625L99.0401 38.8023Z"
              fill="black"
            />
            <path
              d="M124.569 37.1172L130.888 42.2329L124.22 50.4783L130.635 55.6663L126.11 61.2635L113.362 50.9598L124.569 37.1172Z"
              fill="black"
            />
            <path
              d="M133.32 60.1201L138.929 48.6367L143.347 55.6182L141.048 60.0238L146.031 59.8552L150.424 66.7886H137.581L131.707 70.508L127.47 63.8275L133.32 60.1201Z"
              fill="black"
            />
            <path
              d="M53.2741 138.445L47.3398 134.039L57.9324 119.739L65.9371 125.673C71.3176 129.658 72.0278 133.473 69.0908 137.445C66.1898 141.358 62.4343 141.442 57.1982 137.554L55.0917 135.989L53.2741 138.445ZM58.5102 131.367L60.5204 132.859C61.7722 133.786 62.3861 133.75 62.9639 132.968C63.5417 132.197 63.3852 131.559 62.1454 130.633L60.1593 129.164L58.5102 131.367Z"
              fill="black"
            />
            <path
              d="M73.9529 131.006L81.9214 132.667L79.7668 143.055L87.8557 144.74L86.3872 151.782L70.3418 148.447L73.9529 131.006Z"
              fill="black"
            />
            <path
              d="M98.8454 148.436L98.6047 150.759L90.7686 152.42L94.0547 133.546L103.046 131.644L113.494 147.617L105.682 149.266L104.527 147.244L98.8454 148.436ZM101.903 142.634L100.145 139.54L99.7963 138.758V139.588L99.4111 143.151L101.903 142.634Z"
              fill="black"
            />
            <path
              d="M123.197 141.129L117.251 145.643L106.502 131.463L112.388 126.997L122.09 129.573L117.311 123.266L123.245 118.776L133.995 132.956L128.277 137.289L118.19 134.544L123.197 141.129Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M84.196 106.583L76.7932 99.1801L66.3691 88.756L73.4951 81.6301L83.9191 92.0422C84.0756 92.1986 84.3284 92.1986 84.4849 92.0422L105.598 70.9292L112.724 78.0551L84.196 106.583Z"
              fill="black"
            />
          </svg>
        </div>
        <div
          class="takequiz-pointy-hand takequiz-rp-none block absolute bg-no-repeat sm:hidden md:block lg:block xl:block"
        ></div>
        <div
          class="takequiz-pointy-hand takequiz-pointy-hand-mobile hidden block absolute bg-no-repeat"
        ></div>
      </section>
    </div>

    <div id="product-expert-wrap" class="shopify-section">
      <section
        class="ourstory-expert-wrapper pt-spc2 pb-spc74 lg:pb-spc74 md:pb-spc74 sm:pb-spc1 bg-white"
      >
        <div class="wrapper max-w-1440px ml-auto mr-auto">
          <div class="ourstory-expert-right text-center">
            <div class="ourstory-expert-right-content">
              <div class="ourstory-expert-checkmark">
                <img :src="checkmark" alt="Checkmark" class="ml-auto mr-auto" />
              </div>
              <h1
                class="whitespace-pre-line font-boldText leading-spc4 mt-8 mb-6 uppercase max-w-450px ml-auto mr-auto xl:text-size15 lg:text-size15 md:text-size15 sm:text-size2 tracking-spc4"
              >
                Picked by
                the experts
              </h1>
              <div
                class="ourstory-expert-subtitle max-w-511px ml-auto mr-auto text-size5 leading-8 tracking-spc2"
              >
                <p
                  class="mt-6 mb-4"
                >We’ve partnered with the top survival experts to pick the most effective essentials for any time of need.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Footer -->
    <div id="shopify-section-footer" class="shopify-section">
      <ThemeFooter />

      <!-- Footer Sale Box -->
      <FooterSaleBox />
    </div>

    <div class="add-to-cart fixed bg-black pr-spc75 pb-spc39">
      <button
        class="buy-kit bg-black text-white py-spc16 text-2xl leading-6 font-semibold pr-spc23 pl-spc75 tracking-spc2"
      >
        <span class="inline-block">{{product.price}} - Buy Kit</span>
        <svg
          class="btn__arrow inline-block"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M20.9537 15.7142L12.0137 24.9093L14.3703 27.3333L27.3337 13.9999L14.3703 0.666584L12.0137 3.09052L20.9537 12.2857L0.666992 12.2857L0.666992 15.7142L20.9537 15.7142Z"
            fill="white"
          />
        </svg>
      </button>
    </div>
  </main>
</template>

<script>
import ThemeHeader from "../components/common/ThemeHeader";
import carousel from "vue-owl-carousel";
import ZipCodeBox from "../components/common/ZipCodeBox";
import ThemeFooter from "../components/common/ThemeFooter";
import FooterSaleBox from "../components/common/FooterSaleBox";

export default {
  name: "ProductSingle",
  components: {
    FooterSaleBox,
    ThemeFooter,
    ZipCodeBox,
    ThemeHeader,
    carousel
  },
  data() {
    return {
      zipcodeimg: require("@/assets/images/illustration-family.png"),
      zipcodeimg2: require("@/assets/images/zipcode.png"),
      zipcodetitle:
        "Over 60% of Americans have no emergency plan. Enter\n your zip code to see what you’re at risk for.",
      checkmark: require("@/assets/images/checkmark.svg"),
      product: this.$route.params.product
    };
  },
  metaInfo: {
    // Children can override the title.
    title: "Judy Single Product Title",
    // Result: Ready Set Judy ← Ready Set Judy
    // If a child changes the title to "My Other Page Title",
    // it will become: My Other Page Title ← Ready Set Judy
    titleTemplate: "%s - Ready Set Judy",
    // Define meta tags here.
    meta: [
      { "http-equiv": "Content-Type", content: "text/html; charset=utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Judy is a collection of ready-kits with everything needed to prepare for natural disasters and home emergencies"
      }
    ]
  }
};
</script>

<style scoped>
</style>