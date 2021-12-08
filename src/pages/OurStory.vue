<template>
  <main class="our-story-page pt-spc28">
    <!-- Header -->
    <ThemeHeader />

    <!-- Hero Banner -->
    <div id="shopify-section-our-story-hero" class="shopify-section">
      <OurStoryHero
        title="Over 60% of Americans have no emergency plan."
        subtitle="We’re changing the statistic, one ready-kit at a time."
        :bgimg="heroBg"
      />
    </div>

    <!-- Our Mission -->
    <div id="shopify-section-our-story-mission" class="shopify-section">
      <OurMission
        :title="missionTitle"
        :desc="missionDesc"
        :img="missionImg"
        btnTxt="See what's inside"
        btnUrl="collections"
      />
    </div>

    <!-- Our Story stars -->
    <div id="shopify-section-our-story-stats" class="shopify-section">
      <OurStoryStars />
    </div>

    <!-- Our Story Experts -->
    <div id="shopify-section-our-story-experts" class="shopify-section">
      <OurStoryExpert />
    </div>

    <!-- Our story cta -->
    <div id="shopify-section-our-story-cta" class="shopify-section">
      <CTA
        :img="ctaImg"
        title="This is what readiness looks like."
        btnTxt="Explore the kits"
        btnUrl="collections"
      />
    </div>

    <!-- Footer -->
    <div id="shopify-section-footer" class="shopify-section">
      <ThemeFooter />

      <!-- Footer Sale Box -->
      <FooterSaleBox title="1% of sales go to The LA Fire Department Foundation." :img="saleLogo" />
    </div>
  </main>
</template>

<script>
import ThemeHeader from "../components/common/ThemeHeader";
import OurStoryHero from "../components/sections/OurStoryHero";
import OurMission from "../components/sections/OurMission";
import OurStoryStars from "../components/sections/OurStoryStars";
import OurStoryExpert from "../components/sections/OurStoryExpert";
import CTA from "../components/common/CTA";
import ThemeFooter from "../components/common/ThemeFooter";
import FooterSaleBox from "../components/common/FooterSaleBox";
export default {
  name: "OurStory",
  components: {
    FooterSaleBox,
    ThemeFooter,
    CTA,
    OurStoryExpert,
    OurStoryStars,
    OurMission,
    OurStoryHero,
    ThemeHeader
  },
  data() {
    return {
      heroBg: require("@/assets/images/story-banner-bg.jpg"),
      missionTitle: "OUR MISSION IS TO HELP \nEVERY FAMILY STAY PREPARED.",
      missionDesc:
        "With natural disasters happening more frequently, and with \nbigger impact, having the right supplies and emergency plans \nis more important than ever. That’s why we’re dedicated to \nmaking preparation a household essential.",
      missionImg: require("@/assets/images/mission.svg"),
      ctaImg: require("@/assets/images/story-cta.svg"),
      saleLogo: require("@/assets/images/lafd-logo.png")
    };
  },
  metaInfo: {
    // Children can override the title.
    title: "Our Story",
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