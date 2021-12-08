<template>
  <main class="contact-page">
    <!-- Header -->
    <ThemeHeader />

    <div id="shopify-section-contact" class="shopify-section">
      <ContactForm
        :title="contactTitle"
        :subtitle="contactstitle"
        :subtitle2="contactstitle2"
        :img="contactimg"
        email="hello@readyjudy.com"
        phonenum="+1 (888) 421-9926"
      />
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
import ContactForm from "../components/sections/ContactForm";
import FooterSaleBox from "../components/common/FooterSaleBox";
import ThemeFooter from "../components/common/ThemeFooter";
export default {
  name: "Contact",
  components: { ThemeFooter, FooterSaleBox, ContactForm, ThemeHeader },
  data() {
    return {
      contactTitle: "WE'VE GOT \nYOU COVERED",
      contactstitle: "Questions? Concerns?",
      contactstitle2: "We're looking forward to hearing from you.",
      contactimg: require("@/assets/images/contact.jpg")
    };
  },
  metaInfo: {
    // Children can override the title.
    title: "Contact Us",
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