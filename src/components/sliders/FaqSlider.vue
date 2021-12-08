<template>
    <div class="faq-slider hidden">
        <slick id="slick2" :options="slickOptions2" ref="slickSetting2" class="border-t border-b mb-16">
            <div class="my-slick-nav text-center" v-for="(faqtitle, i) in faqTitles" :key="i">
                <div class="my-slick-nav-link cursor-pointer uppercase font-semibold tracking-spc5 text-xs inline-block pt-3 pb-3">
                    {{faqtitle.title}}
                </div>
            </div>
        </slick>

        <slick id="slick1" :options="slickOptions" ref="slickSetting1">
            <div class="faq-accordions px-spc12">
                <ul>
                    <AboutAccordionItem :abAccordion="aboutfaq" v-for="(aboutfaq, i) in aboutfaqs" :key="i" class="c-faq__qa-item"/>
                </ul>
            </div>
            <div class="faq-accordions px-spc12">
                <ul>
                    <ProductAccordionItem :pdAccordion="productsfaq" v-for="(productsfaq, i) in productsfaqs" :key="i" />
                </ul>
            </div>
            <div class="faq-accordions px-spc12">
                <ul>
                    <OrderAccordionItem :odAccordion="orderfaq" v-for="(orderfaq, i) in orderfaqs" :key="i" />
                </ul>
            </div>
            <div class="faq-accordions px-spc12">
                <ul>
                    <PartnerAccordionItem :ptAccordion="partnerfaq" v-for="(partnerfaq, i) in partnerfaqs" :key="i" />
                </ul>
            </div>
        </slick>


    </div>
</template>


<script>
    import Slick from 'vue-slick'
    import PartnerAccordionItem from "../sections/PartnerAccordionItem";
    import OrderAccordionItem from "../sections/OrderAccordionItem";
    import ProductAccordionItem from "../sections/ProductAccordionItem";
    import AboutAccordionItem from "../sections/AboutAccordionItem";
    // Slick Slider
    import 'slick-carousel/slick/slick.css'

    export default {
        name: "FaqSlider",
        props: {
            FaqSlidercontent: {
                type: Object
            }
        },
        components: {
            Slick,
            PartnerAccordionItem,
            OrderAccordionItem,
            ProductAccordionItem,
            AboutAccordionItem,
        },
        data() {
            return{
                faqTitles: [
                    {
                        title: "About",
                    },
                    {
                        title: "Our Products",
                    },
                    {
                        title: "Orders",
                    },
                    {
                        title: "Partnerships",
                    },
                ],
                aboutfaqs: [
                    {
                        title: "Why did you choose the name JUDY?",
                        content: "JUDY isn’t our Founder’s Great Grandmother’s name nor is it an acronym. We tested 100 different names and none of them stuck. Until JUDY. One of the challenges in our safety movement is getting people to pay attention and take emergency preparation seriously. In order to do that we needed a name that was (almost) impossible to forget and we think JUDY is it."
                    },
                    {
                        title: "How are JUDY Kits different from competitor kits that are out on the market now?",
                        content: "At JUDY we aim to not only provide you with high quality emergency preparedness equipment, but also the relevant education and tips to tackle any challenging emergency situations with confidence and calm. We plan to bring you along on an educational journey through high quality content and planning tools designed to keep you and your family informed and feeling prepared during emergency situations. Here at JUDY, we believe that a family with a plan is a family that can."
                    },
                    {
                        title: "How did you decide what products to place in your JUDY Kits?",
                        content: "Every Ready-Kit is hand-picked by our team of emergency preparedness specialists. Our specialists are certified experts in emergency preparedness and have years of experience working alongside organizations like the Red Cross and FEMA. For the avoidance of doubt, JUDY is not affiliated, associated, endorsed by, or in any way officially connected with any governmental organization or non-profit."
                    },
                    {
                        title: "Where can I purchase JUDY Kits?",
                        content: "At the moment, JUDY Ready-Kits are only available on our site. We are not available in any retail stores and do not have authorized resellers on other ecommerce sites. To guarantee the quality of our products and services, we advise making your purchases directly through readyjudy.com."
                    },
                    {
                        title: "Do I contact you if disaster strikes and I need help?",
                        content: "JUDY is here to help you be as prepared as possible in the event that a disastrous event occurs. We urge you to take time to create a plan and communicate that plan with your loved ones and emergency contacts. That being said, it's important to note that JUDY is not a real time alerting authority nor can we provide direction on what to do during a real time emergency. We are here to help you get prepared in the event of an unexpected disaster. During an unexpected disaster please defer to emergency response entities for assistance. We encourage signing up for your local emergency alerts as well, so that you and your family can stay in the know during an emergency."
                    },
                    {
                        title: "Are there any causes that JUDY is supporting or promoting?",
                        content: "Social impact is something that is near and dear to us and we want to be extremely thoughtful as we build this part of our business out. Just ahead of launch, we partnered with the LAFD Foundation (Los Angeles Fire Department Foundation) to announce our partnership wherein we created a JUDY x LAFD limited edition t-shirt. 100% of the proceeds from the T-shirt sales went directly to the LAFD to purchase life saving equipment. Moving forward we plan to continue partnering with the LAFD Foundation by donating 1% of our sales annually. To note, JUDY is not affiliated, associated, endorsed by, or in any way officially connected with the LAFD Foundation."
                    },
                    {
                        title: "How can I get in touch with your customer experience team?",
                        content: "The JUDY CX team is available Monday - Friday from 9:00 AM to 6:00 PM (Eastern Time). You can send us a note at hello@readyjudy.com or send us a message on our Instagram or Facebook page. We will respond to your inquiry within 1 business day."
                    },
                ],
                productsfaqs: [
                    {
                        title: "Why are all of the products orange?",
                        content: "One of our brand colors is Safety Orange because it’s a vibrant color that is hard to miss. In times of emergencies, we’re often frantic and forget to breathe and follow learned protocols. JUDY’s Safety Orange Ready-Kits will serve as a reminder that safety is near, that you are prepared and that everything you need is just inside of the Safety Orange Ready-Kit."
                    },
                    {
                        title: "What are the different Ready-Kits you offer?",
                        content: "At the moment, we offer 3 different Ready-Kits. We offer the JUDY Safe , JUDY Mover Kit(s) and the JUDY Starter Pack.  We can help you select the best Ready-Kit and content based on the size of your household, the situations you are most concerned with encountering, best practices, the vulnerabilities that you may be exposed to depending on where in the US you live. "
                    },
                    {
                        title: "How much do JUDY Ready-Kits cost?",
                        content: "Our kits range in price from $60 - $250. The price you pay for your Ready-Kit(s) is dependent on the size of your household and the type of kit you'd like to purchase!"
                    },
                    {
                        title: "How can I learn more about your Ready-Kits?",
                        content: "This is the question we've been hoping for! Go you for taking the first step to getting prepared -- You can learn more about each individual kit by exploring our product education guides. We currently offer 3 types of kits: the Safe, the Mover Kit(s) and the Starter Pack. By checking out our product pages, you will be able to find further details. If you don't find the information you seek, then don't hesitate to reach out via text or email and our team can answer any additional questions you may have."
                    },
                    {
                        title: "Are the JUDY Ready-Kits waterproof?",
                        content: "The JUDY Mover(s) and Safe are waterproof and the Starter Pack is not waterproof, but it is water resistant."
                    },
                    {
                        title: "Can I use JUDY Ready-Kits for camping and outdoor recreational activities?",
                        content: "Of course! JUDY Kits are designed to help you be prepared in any emergency situation, regardless of whether it occurs in your home, at your office or during a hike. We're here to help you be prepared wherever you may go!"
                    },
                    {
                        title: "How do I reorder Ready-Kit components if I run out?",
                        content: "We will soon sell replacement cartridges available to purchase on our site whenever you’re ready. If you are having issues with this, go ahead and send us a text or email and we will help get you situated."
                    },
                    {
                        title: "There are more than 4 people in my family or household, which Ready-Kit should I order?",
                        content: "For families larger than 4 people, you may consider ordering an additional JUDY. For example, some families of 6 have ordered The Safe (intended for 4 people) and The Mover (intended for 2 people). There are various product combinations that may work for your family so please don’t hesitate to reach out to our customer advisory team for additional assistance."
                    },
                    {
                        title: "Can I customize the components in my Ready-Kit?",
                        content: "Since our Ready-Kits are pre-made and intended to serve you in emergency situations as well as day-to-day life situations where you may need the same tools, the components are not customizable. If you are interested in adding additional cartridges or obtaining replacement cartridges when you run out then you may purchase those on our site here."
                    },
                    {
                        title: "Do you have Ready-Kits for pets?",
                        content: "We do not currently sell Ready-Kits or Ready-Kit components specifically for pets. Once you receive your Ready-Kit, we strongly recommend placing enough pet food for at least 1 day per pet in your Ready-Kit. It’s best practice to match your emergency pet food quantity with the quantity of emergency food you have for your family. When storing pet food, we recommend easy to open containers, for example resealable bags or easy to open canisters."
                    },
                    {
                        title: "Can my pet(s) eat the Mini-Meal(s) in the JUDY Ready-Kits?",
                        content: "No, we do not recommend sharing your Mini-Meal with your pet. We do recommend packing up some canned and dry foods in your ready kits for your pets in a reusable container so that you always have that emergency stash."
                    },
                    {
                        title: "What ingredients are in the Mini-Meal(s)?",
                        content: "The Mini-Meals in the JUDY Kits contain soybean and wheat. At the moment, the Mini-Meals we offer are not gluten free. If you are gluten-free, we advise that you add gluten free dry food substitutes to your JUDY Kit. We are looking into providing Gluten Free Mini-Meal options for future kits. \n Mini-Meals full ingredient list: enriched bleached wheat flour (wheat flour, niacin, reduced iron, thiamine mononitrate, riboflavin, folic acid), palm shortening (palm oil), cane sugar, high fructose corn syrup, defatted soy flour (soy flour), corn starch, vitamins and minerals mix (dicalcium phosphate, magnesium oxide, ascorbic acid, vitamin E acetate, niacinamide, zinc oxide,reduced iron, copper gluconate, d-calcium pantothenate, pyrdoxine HCI, riboflavin, vitamin A acetate, thiamin mononitrate, folic Acid, D-biotin, potassium iodide, vitamin D3 vitamin B12), natural and artificial flavors, calcium propionate. "
                    },
                    {
                        title: "How long will the food and water rations last me in an emergency?",
                        content: "The JUDY Kits containing food and water will cover you for 1 full day. Since the portions are intended for emergency situations, we advise that in coming up with an emergency plan that you plan to supplement your emergency kit with food and water from your pantry. For example, we advise storing an additional gallon of water per day per person and stockpiling pop top canned foods (fruits, veggies, tuna, beans, etc.)  and dried foods (powdered milk, crackers, cereal, nuts, etc.) ahead of time."
                    },
                    {
                        title: "What is the shelf life of the Emergency Drinking Water and the Mini-Meals?",
                        content: "Our perishable goods can be stored for up to 5 years from the time it was manufactured. We guarantee that the food and water packets that you receive will be usable for at least 3 years. If you received a JUDY Kit with a Food or Water that has an expiration date sooner than three years from the month you placed the order, send us an email at hello@readyjudy.com and we will be sure to get you a replacement pack of food or water."
                    },
                    {
                        title: "Are your products environmentally friendly?",
                        content: "All of our packaging (boxes, containers, etc) is recyclable.Our Kits have some products that depending on where you live may need to be recycled. Batteries (single use) are the perfect example, if you live in the state of California, you may know that it is illegal to discard batteries, so you must recycle them. If you are not sure where to recycle your single use batteries or other items, take a look at Earth 911’s site and just input your zip code to find your nearest recycling center and learn more about how to become more sustainable. We are always looking into new products to offer and we plan to prioritize sustainability when deciding across vendors for future product offerings."
                    },
                    {
                        title: "Are your products cruelty-free?",
                        content: "Yes, all of our products are cruelty-free."
                    },
                    {
                        title: "I bought my kit, now what?",
                        content: "Congratulations, we are so excited to have as a member of the JUDY family! When you receive your kit, you should go ahead and unbox the entire thing. We want you to take the time to read through the Ready-Guide and fill out your Emergency Contacts Cards and touch and feel all of the products in your kit. By doing this now, you are taking the first step in building your knowledge base and ensuring that the products you’ve received are in perfect condition. Over time, team JUDY will send you relevant tips through content and our customer advisory team that helps you learn the best practices of emergency preparedness based on the vulnerabilities you are most likely to encounter."
                    },
                    {
                        title: "Where do I store my kit?",
                        content: "Upon opening up your Ready-Kit(s) and you’re instructed to read through the Ready-Guide and begin to plan your household’s emergency preparedness plan. We advise that you speak with each member of your household and decide upon a storage spot for the JUDY Ready-Kit, it’s best to store the Ready-Kit near or in your designated emergency meeting area ensuring that it is accessible to all members of the family. It’s super important to decide and agree upon this storage location and ensure that it is well communicated. This first step is the beginning of you and your family’s preparedness journey."
                    },
                ],
                orderfaqs: [
                    {
                        title: "Do you have any discount codes available?",
                        content: "We currently do not have an ongoing discounts program, but we aim to work closely with different partners digitally and in print to provide awesome deals and discounts for our customers. We will also announce discounts and partnerships via our site and our instagram."
                    },
                    {
                        title: "I placed an order and did not receive an order confirmation email?",
                        content: "Sorry to hear about this issue. It typically takes a matter of minutes for this confirmation to arrive. I would recommend checking your spam inbox and refreshing your inbox. If you still do not see the confirmation send a note to the JUDY customer advisory team with your order information and we can send you another one!"
                    },
                    {
                        title: "Can I edit my order?",
                        content: "We process orders within 2 business days from when they are placed. If you reach via email, chat or text we will be more than happy to look into whether or not you can still make changes to that order. One of our JUDY Customer Advisors will help you with this issue."
                    },
                    {
                        title: "Where do your orders ship from?",
                        content: "All of our orders are sent from our warehouse in Southern California."
                    },
                    {
                        title: "Do you ship internationally?",
                        content: "We currently ship within the United States (including Alaska and Hawaii) and to Canada. At the moment, we cannot ship to PR and Guam and other international countries. We are working on making our products available all over the world, but since we are a relatively new and a small, but growing company that may take some time to set up."
                    },
                    {
                        title: "Which shipping company do you use?",
                        content: "We work with a third party shipping company to ensure that you have reliable and on time delivery options. Our third party partner will either use FedEx Ground or UPS Ground to ship your package. When you receive a shipping notification, you will be able to track your order via FedEx or UPS. If you are shipping to a PO Box, please note that those orders will deliver via USPS."
                    },
                    {
                        title: "How long does it take for the Ready-Kit to arrive?",
                        content: "Our kits can take between 3 and 7 business days to arrive. Please allow 1-2 business days for your order to process and ship. As soon as your order ships we send you an email with the link to track your package If you have additional questions about your order, please reach out to the customer advisory team and we will be ready with answers."
                    },
                    {
                        title: "How can I track my order?",
                        content: "After your order has been placed and has shipped from our warehouse, we send you an email to the address you provided with a direct link to track your package. If you did not receive that email or cannot locate your tracking link, reach out to our Customer Advisory team and we can help track down your order."
                    },
                    {
                        title: "My package arrived in less than perfect condition, can you help me?",
                        content: "We apologize that your order arrived in less than perfect conditions. Please reach out to the JUDY Customer Advisory team at hello@readyjudy.com and we will get you set up with an order that will arrive in perfect condition."
                    },
                    {
                        title: "I think my package is lost or stolen.",
                        content: "If you think that your package went missing in transit or was misdelivered, our Customer Advisory team will gladly handle this issue for you. Send an email to hello@readyjudy.com with your order information and we will ensure your JUDY Ready-Kit makes it to the right place on the go."
                    },
                    {
                        title: "What is your return policy?",
                        content: "We have a 14 day, no hassle return policy. If your order arrives and you would like to return it, just send us an email at hello@readyjudy.com and someone on our team can help you out with this. Send a note with your order information and any feedback that you may have about the product and your experience."
                    },
                    {
                        title: "What's your refund policy ?",
                        content: "If your order arrives and for whatever reason you are not 100% satisfied and would like to return it for a refund, please send us an email at hello@readyjudy.com. We will set you up with the appropriate return labels and issue you a full refund. Refunds generally take 5-10 business days to appear in your account."
                    },
                ],
                partnerfaqs: [
                    {
                        title: "How can I get in touch with your press team?",
                        content: "Thank you for considering us for press opportunities, we’re flattered. To get in touch with our press team please email press@readyjudy.com and someone will get back to you if it's a good fit."
                    },
                    {
                        title: "I am interested in collaborating or working with your team, who can I contact?",
                        content: "We are always looking for new collabs and partnerships. To get in touch with our marketing and creative team please send an email to partners@readyjudy.com and we will get back to you as soon as we can!"
                    },
                    {
                        title: "I am an investor or a potential investor and would like to get in touch with your team.",
                        content: "Please send an email to partners@readyjudy.com with the subject line: “JUDY INVESTOR RELATIONS” and we can get you to the right leadership contacts."
                    },
                    {
                        title: "I would like to inquire about a retail or wholesale order.",
                        content: "If you are looking to place a wholesale or retail order please reach out to our retail & wholesale team at wholesale@readyjudy.com."
                    },
                ],
            }
        },
        computed: {
            slickOptions() {
                return {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    adaptiveHeight: true,
                    asNavFor: "#slick2"
                }
            },
            slickOptions2() {
                return {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                    centerMode: true,
                    centerPadding: '120px',
                    focusOnSelect: true,
                    infinite: false,
                    asNavFor: "#slick1",
                }
            }
        }

    }




</script>

<style scoped>

</style>