<template>
  <main class="collections-page">
    <!-- Header -->
    <ThemeHeader />

    <!-- plp -->
    <div id="shopify-section-plp-header" class="shopify-section">
      <PlpProduct :PlpContent="sectionData.ourKitProducts" />
    </div>

    <!-- Compare kits -->
    <div id="shopify-section-plp-compare" class="shopify-section">
      <CompareKits title="Compare the kits" :CompareContent="sectionData.ourKitProducts" />
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
// Import component data. You can change the data in the store to reflect in all component
import sectionData from "@/store/store";
// import all components
import ThemeHeader from "../components/common/ThemeHeader";
import PlpProduct from "../components/sections/PlpProduct";
import CompareKits from "../components/sections/CompareKits";
import ThemeFooter from "../components/common/ThemeFooter";
import FooterSaleBox from "../components/common/FooterSaleBox";
export default {
  name: "Collections",
  components: {
    FooterSaleBox,
    ThemeFooter,
    CompareKits,
    PlpProduct,
    ThemeHeader
  },
  data() {
    return {
      sectionData,
      saleLogo: require("@/assets/images/lafd-logo.png")
    };
  },
  metaInfo: {
    // Children can override the title.
    title: "Collection",
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