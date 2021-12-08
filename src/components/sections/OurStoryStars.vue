<template>
    <section class="ourstory-stars-wrapper sm:px-8">
        <div class="wrapper max-w-1440px m-auto">
            <div class="ourstar-top-map sticky top-0">
                <div class="ourstar-top-map-inner relative">
                    <img :src="mapImg" alt="map" class="max-w-1500px w-spc64 ml-spc65 xl:block lg:block md:block sm:hidden">
                    <h1 class="absolute xl:text-5xl lg:text-size2 md:text-size2 sm:text-size2 leading-tight xl:max-w-540px lg:max-w-340px md:max-w-340px">
                        The number of annual natural disasters is on the rise.
                    </h1>
                </div>
            </div>
            <div class="ourstar-bottom-content relative our-story__stats-content-container xl:w-spc67 lg:w-spc25 md:w-spc25 pb-spc68 ml-auto mr-spc69 xl:block lg:block md:block sm:hidden">
                <ul>
                    <li class="pb-spc28 block" id="our-story__stats-content-item1">
                        <h1 class="xl:text-size13 lg:text-size12 md:text-size12 tracking-spc6 leading-none font-boldText mb-spc66 ">
                            310
                        </h1>
                        <h3 class="xl:text-size14 lg:text-size2 md:text-size2 font-boldText tracking-spc3 uppercase leading-none">
                            Million
                        </h3>
                        <p class="xl:text-size2 lg:text-size5 md:text-size5 leading-tight max-w-400px my-8 pr-1">
                            Americans have been affected by <strong>natural disasters since 2010.</strong>
                        </p>
                    </li>
                    <li class="pb-spc28 block" id="our-story__stats-content-item2">
                        <h1 class="xl:text-size13 lg:text-size12 md:text-size12 tracking-spc6 leading-none font-boldText mb-spc66 ">
                            57
                        </h1>
                        <h3 class="xl:text-size14 lg:text-size2 md:text-size2 font-boldText tracking-spc3 uppercase leading-none">
                            Million
                        </h3>
                        <p class="xl:text-size2 lg:text-size5 md:text-size5 leading-tight max-w-400px my-8 pr-1 whitespace-pre-line">
                            Americans live in counties that were affected by <strong>five or more weather disasters.</strong>
                        </p>
                    </li>
                    <li class="pb-spc28 block" id="our-story__stats-content-item3">
                        <h1 class="xl:text-size13 lg:text-size12 md:text-size12 tracking-spc6 leading-none font-boldText mb-spc66 ">
                            50
                        </h1>
                        <h3 class="xl:text-size14 lg:text-size2 md:text-size2 font-boldText tracking-spc3 uppercase leading-none">
                            States
                        </h3>
                        <p class="xl:text-size2 lg:text-size5 md:text-size5 whitespace-pre-line leading-tight max-w-400px my-8 pr-1">
                            have had <strong>disasters</strong> declared in the <strong>past five years.</strong>
                        </p>
                    </li>
                </ul>
            </div>
            <div class="our-story-mobile-carousel pt-spc13 pb-12">
                <div class="our-story-mobile-carousel-list">
                    <ourStorySlider :OurStorySlidercontent="ourStorySlideData" />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import ourStorySlider from "../sliders/OurStorySlider";
    import ScrollMagic from "scrollmagic";


    let ourStorySlideData = {
        OurStorySlides: [
            {
                title:"310",
                subtitle: "Million",
                desc: "Americans have been affected by natural disasters since 2010.",
            },
            {
                title:"57",
                subtitle: "Million",
                desc: "Americans live in counties that were affected by five or more weather disasters.",
            },
            {
                title:"50",
                subtitle: "Million",
                desc: "have had disasters declared in the past five years.",
            },
        ],
        itemPerSlide: 3,
    };

    export default {
        name: "OurStoryStars",
        components: {
            ourStorySlider
        },
        data() {
            return {
                ourStorySlideData,
                mapImg: require('@/assets/images/map.svg')
            }
        },
        mounted() {
            // init controller
            var controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});

            // build scenes
            new ScrollMagic.Scene({triggerElement: "#our-story__stats-content-item1"})
                .setClassToggle("#our-story__stats-content-item1", "highlight") // add class toggle
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
            new ScrollMagic.Scene({triggerElement: "#our-story__stats-content-item2"})
                .setClassToggle("#our-story__stats-content-item2", "highlight") // add class toggle
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
            new ScrollMagic.Scene({triggerElement: "#our-story__stats-content-item3"})
                .setClassToggle("#our-story__stats-content-item3", "highlight") // add class toggle
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);
        }
    }

</script>

<style scoped>

</style>