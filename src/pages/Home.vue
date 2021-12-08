<template>
  <main class="home-page">
    <!-- Header -->
    <ThemeHeader />

    <!-- Hero Banner -->
    <div id="shopify-section-home-hero" class="shopify-section">
      <HeroBanner />
    </div>

    <!-- Bragbar Slider -->
    <div id="shopify-section-home-bragbar" class="shopify-section">
      <div class="section--home-bragbar bg-yellowLight2 pt-spc13 pb-12">
        <div class="wrapper max-w-1404px m-auto px-4 text-center">
          <BragbarSlider :BragbarSlidercontent="BragbarSlideData" />
        </div>
      </div>
    </div>

    <!-- Take Quiz -->
    <div id="shopify-section-home-take-quiz" class="shopify-section">
      <TakeQuiz
        :desc="takequizdesc"
        :familyImg="takequizfamilyImg"
        :btnTxt="takequizbtnTxt"
        btnUrl="#"
      />
    </div>

    <!-- Our Kits -->
    <div id="shopify-section-home-our-kits" class="shopify-section relative">
      <OurKits
        :Productcontent="sectionData.ourKitProducts"
        classList="bg-yellowLight2 overflow-hidden"
      />
      <div class="home-our-kits__badge block absolute">
        <svg
          width="176"
          height="176"
          viewBox="0 0 176 176"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M164.497 89.2272C165.168 88.5521 165.168 87.4504 164.497 86.7753L156.379 78.5889C155.708 77.9138 155.513 76.6685 155.94 75.8209L161.133 65.5275C161.562 64.6778 161.219 63.6282 160.375 63.1953L150.124 57.9191C149.279 57.484 148.706 56.3598 148.851 55.4221L150.611 44.027C150.756 43.0872 150.106 42.1953 149.169 42.0426L137.788 40.1932C136.85 40.0412 135.959 39.1486 135.807 38.213L133.957 26.832C133.807 25.895 132.914 25.2481 131.975 25.3917L120.581 27.1495C119.641 27.2931 118.518 26.7208 118.083 25.8767L112.809 15.6256C112.374 14.7808 111.324 14.4387 110.475 14.8667L100.181 20.0598C99.3315 20.4872 98.0883 20.29 97.4132 19.6213L89.2275 11.501C88.5517 10.833 87.45 10.833 86.7749 11.501L78.5885 19.6213C77.9134 20.29 76.6688 20.4886 75.8206 20.0598L65.5279 14.8667C64.6782 14.4387 63.6279 14.7808 63.1943 15.6256L57.9188 25.8767C57.4837 26.7208 56.3595 27.2931 55.4211 27.1495L44.0275 25.3917C43.0877 25.2467 42.1944 25.895 42.0423 26.832L40.193 38.213C40.0416 39.1486 39.1483 40.0412 38.212 40.1932L26.8318 42.0426C25.8955 42.1953 25.2479 43.0893 25.3915 44.027L27.1493 55.4221C27.2922 56.3612 26.7213 57.4854 25.8765 57.9191L15.6254 63.1953C14.7806 63.6303 14.4385 64.6799 14.8672 65.5275L20.0604 75.8209C20.4863 76.6685 20.2898 77.9138 19.6218 78.5889L11.5016 86.7753C10.8328 87.4504 10.8328 88.5521 11.5016 89.2272L19.6218 97.4129C20.2898 98.088 20.4884 99.334 20.0604 100.182L14.8672 110.476C14.4385 111.326 14.7806 112.374 15.6254 112.809L25.8765 118.084C26.7213 118.519 27.2922 119.641 27.1493 120.58L25.3915 131.975C25.2465 132.915 25.8955 133.806 26.8318 133.958L38.212 135.807C39.1483 135.958 40.0416 136.85 40.193 137.789L42.0423 149.169C42.1944 150.107 43.0898 150.757 44.0275 150.611L55.4211 148.852C56.3609 148.707 57.4851 149.28 57.9188 150.124L63.1943 160.375C63.6293 161.22 64.6803 161.562 65.5279 161.134L75.8206 155.941C76.6688 155.514 77.9134 155.71 78.5885 156.379L86.7749 164.498C87.45 165.167 88.5517 165.167 89.2275 164.498L97.4132 156.379C98.0883 155.71 99.3329 155.514 100.181 155.941L110.476 161.134C111.325 161.564 112.374 161.22 112.807 160.375L118.083 150.124C118.518 149.28 119.641 148.707 120.581 148.852L131.975 150.611C132.914 150.757 133.805 150.107 133.957 149.169L135.807 137.789C135.957 136.85 136.85 135.959 137.788 135.807L149.169 133.958C150.106 133.807 150.756 132.915 150.611 131.975L148.851 120.58C148.706 119.641 149.279 118.519 150.124 118.084L160.375 112.809C161.219 112.374 161.56 111.324 161.133 110.476L155.94 100.182C155.513 99.3319 155.708 98.088 156.379 97.4129L164.497 89.2272Z"
            fill="#FF4A00"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M80.9468 113.992L71.1801 104.225L57.4443 90.4859L66.8366 81.0894L80.5773 94.8209C80.7814 95.025 81.1116 95.025 81.3164 94.8209L109.157 66.9875L118.557 76.377L80.9468 113.992Z"
            fill="black"
          />
        </svg>
      </div>
    </div>

    <!-- Text Judy -->
    <div id="shopify-section-home-text-judy" class="shopify-section">
      <TextJudy classList="bg-lightWhite md:bg-lightWhite sm:bg-primaryColor" />
    </div>

    <!-- Home Kit details -->
    <div id="shopify-section-home-kit-details" class="shopify-section">
      <HomeKitDetails classList="bg-white" :sectionBg="kitDetailsBg" />
    </div>

    <!-- Testimonial -->
    <div id="shopify-section-home-testimonials" class="shopify-section">
      <TestimonialSlider classList="bg-primaryColor" />
    </div>

    <!-- Home Text Message -->
    <div id="shopify-section-home-text-messages" class="shopify-section bg-white">
      <HomeTextMessage />
    </div>

    <!-- Instagram -->
    <div id="shopify-section-home-instagram" class="shopify-section">
      <InstagramSlider :InstagramSlidercontent="instagramData" />
    </div>

    <!-- Footer -->
    <div id="shopify-section-footer" class="shopify-section">
      <ThemeFooter />

      <!-- Footer Sale Box -->
      <FooterSaleBox />
    </div>
  </main>
</template>

<script>
// Import component data. You can change the data in the store to reflect in all component
import sectionData from "@/store/store";
// import all components
import HeroBanner from "../components/sections/HeroBanner";
import ThemeHeader from "../components/common/ThemeHeader";
import BragbarSlider from "../components/sliders/BragbarSlider";
import TakeQuiz from "../components/sections/TakeQuiz";
import OurKits from "../components/sections/OurKits";
import TextJudy from "../components/sections/TextJudy";
import HomeKitDetails from "../components/sections/HomeKitDetails";
import TestimonialSlider from "../components/sliders/TestimonialSlider";
import HomeTextMessage from "../components/sections/HomeTextMessage";
import ThemeFooter from "../components/common/ThemeFooter";
import FooterSaleBox from "../components/common/FooterSaleBox";
import InstagramSlider from "../components/sliders/InstagramSlider";

let BragbarSlideData = {
  BragbarSlides: [
    {
      desc:
        "Emergencies can happen without warning, but JUDY can help people be more prepared than ever.",
      img: require("@/assets/images/people.png")
    },
    {
      desc:
        "It’s not just about the kit, but \n also the customized content and \n education they offer.",
      img: require("@/assets/images/nyt.png")
    },
    {
      desc:
        "The must-have \nemergency kit to keep you \nsafe during a disaster.",
      img: require("@/assets/images/gma.png")
    }
  ],
  itemPerSlide: 3
};

let instagramData = {
  instagramItems: [
    {
      url: "#",
      img: require("@/assets/images/insta-1.jpg")
    },
    {
      url: "#",
      img: require("@/assets/images/insta-2.jpg")
    },
    {
      url: "#",
      img: require("@/assets/images/insta-3.jpg")
    },
    {
      url: "#",
      img: require("@/assets/images/insta-4.jpg")
    },
    {
      url: "#",
      img: require("@/assets/images/insta-5.jpg")
    }
  ]
};

export default {
  name: "Home",
  components: {
    InstagramSlider,
    FooterSaleBox,
    ThemeFooter,
    HomeTextMessage,
    TestimonialSlider,
    HomeKitDetails,
    TextJudy,
    OurKits,
    TakeQuiz,
    BragbarSlider,
    ThemeHeader,
    HeroBanner
  },
  data() {
    return {
      sectionData,
      instagramData,
      BragbarSlideData,
      takequizdesc:
        "Over half of American families do not have a plan in case of an emergency. Take the quiz and find out which JUDY products and family plans are right for you.",
      takequizfamilyImg: require("@/assets/images/illustration-family.png"),
      takequizbtnTxt: "Take the quiz",
      kitDetailsBg: require("@/assets/images/details-desktop-bg.jpg")
    };
  },
  metaInfo: {
    // Children can override the title.
    title: "Ready Set Judy",
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