<template>
    <section class="home-hero bg-primaryColor h-screen relative">
        <div class="wrapper max-w-1404px h-full m-auto px-4">
            <div class="home-hero__flex flex flex-wrap items-center h-full">
                <div class="home-hero__left max-w-50p w-full flex-1 pl-spc2 xl:pl-spc2 lg:pl-8">
                    <div class="home-hero__left_content">
                        <h1 class="text-size1 xl:text-size1 lg:text-size8 md:text-size8 sm:text-size8 text-white font-boldText leading-spc1 xl:leading-spc1 lg:leading-spc9 md:leading-spc9 sm:leading-spc9 tracking-spc1 mb-spc6">
                            PREPARE
                            <br>
                            FOR WHAT
                            <br>
                            YOU CAN’T
                            <br>
                            PREDICT.
                        </h1>
                        <DoubleTextButton url="#" btnTitle="Shop our kits" btnHoverTitle="Get prepared" />
                    </div>
                </div>
                <div class="home-hero__right max-w-50p w-full flex-1 pt-spc3 pl-spc4">
                    <div class="home-hero__right_img">
                        <img :src="img" alt="Hero Banner">
                    </div>
                </div>
            </div>
        </div>
        <!-- home hero sticky-btn -->
        <div class="home-hero__sticky-btn bg-black fixed left-0 bottom-0 w-full z-50">
            <Button title="Shop our kits" url="/collections" />
        </div>

        <!-- Section Down Arrow -->
        <SectionDownArrow />

    </section>
</template>

<script>
    import DoubleTextButton from "../common/DoubleTextButton";
    import Button from "../common/Button";
    import SectionDownArrow from "../common/SectionDownArrow";
    export default {
        name: "HeroBanner",
        components: {
            SectionDownArrow,
            Button,
            DoubleTextButton
        },
        data() {
            return {
                btnTxt: 'Shop our kits',
                btnUrl: '#',
                img: require('@/assets/images/hero-products.png')
            }
        }
    }
</script>

<style scoped>

</style>