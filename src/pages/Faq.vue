<template>
  <main class="fap-page">
    <!-- Header -->
    <ThemeHeader />

    <div id="shopify-section-faq" class="shopify-section">
      <FaqAccordion />
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
import ThemeHeader from "../components/common/ThemeHeader";
import FaqAccordion from "../components/sections/FaqAccordion";
import ThemeFooter from "../components/common/ThemeFooter";
import FooterSaleBox from "../components/common/FooterSaleBox";
export default {
  name: "Faq",
  components: {
    FooterSaleBox,
    ThemeFooter,
    FaqAccordion,
    ThemeHeader
  },
  metaInfo: {
    // Children can override the title.
    title: "FAQ",
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