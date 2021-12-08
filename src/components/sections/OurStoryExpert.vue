<template>
    <section class="ourstory-expert-wrapper pt-spc2 xl:pt-spc2 lg:pt-spc2 md:pt-spc2 sm:pt-spc11 pb-spc28">
        <div class="wrapper max-w-1440px ml-auto mr-auto flex xl:flex md:flex sm:block items-center flex-row">
            <div class="ourstory-expert-left w-2/4 xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-full sm:text-center xl:text-left">
                <img :src="bagpack" alt="Bagpack">
            </div>
            <div class="ourstory-expert-right w-2/4 xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-full sm:text-center xl:text-center sm:pt-spc6">
                <div class="ourstory-expert-right-content">
                    <div class="ourstory-expert-checkmark">
                        <img :src="checkmark" alt="Checkmark" class="ml-auto mr-auto">
                    </div>
                    <h1 class="whitespace-pre-line font-boldText leading-spc4 mt-8 mb-6 uppercase max-w-450px ml-auto mr-auto text-size15 xl:text-size15 lg:text-size15 md:text-size15 sm:text-size2 tracking-spc4">
                        Picked by
                        the experts
                    </h1>
                    <div class="ourstory-expert-subtitle max-w-511px ml-auto mr-auto text-size5 xl:text-size5 lg:text-size5 md:text-size5 sm:text-xl leading-8">
                        <p class=" my-6">
                            Every ready-kit essential is hand-picked by preparedness specialists like <strong> Kathryn Martorana</strong>
                        </p>
                        <p class=" my-6">
                            With over 10 years of experience handling major disasters from Hurricane Maria to wildfires, Kathryn has a broad disaster operations experience both in the field and in times of crisis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "OurStoryExpert",
        data() {
            return {
                bagpack: require('@/assets/images/our-story-expert.png'),
                checkmark: require('@/assets/images/checkmark.svg'),
            }
        }
    }
</script>

<style scoped>

</style>