<template>
    <section class="contact-wrapper pt-spc28 pb-spc51 lg:pb-spc51 md:pb-spc51 sm:pb-spc6 bg-white">
        <div class="wrapper max-w-900px m-auto">
            <div class="contact-content pt-spc55">
                <h1 class="text-center text-size16 xl:text-size16 lg:text-size16 md:text-size16 sm:text-size2 leading-none uppercase font-boldText tracking-spc4 w-full max-w-580px xl:max-w-580px lg:max-w-580px md:max-w-580px sm:max-w-100p mx-auto xl:mb-spc70 lg:mb-spc70 md:mb-spc70 sm:mb-spc7">
                    {{title}}
                </h1>
                <div class="contact-header-copy text-center">
                    <p class="leading-normal">
                        {{subtitle}}
                    </p>
                    <p class="leading-normal">
                        {{subtitle2}}
                    </p>
                </div>
                <div class="contact-form xl:flex lg:flex md:flex sm:block items-center flex-row mt-spc71 pb-spc55 lg:pb-spc55 md:pb-spc55 sm:pb-8 xl:px-0 lg:px-0 md:px-0 sm:px-12">
                    <div class="contact-form-content xl:w-2/4 lg:w-2/4 md:w-2/4 sm:w-full">
                        <form>
                            <input class="h-spc55 text-black block w-full mb-12 text-size17" type="text" placeholder="Name">
                            <input class="h-spc55 text-black block w-full mb-12 text-size17" type="email" name="email" placeholder="Email">
                            <input class="h-spc55 text-black block w-full mb-12 text-size17" type="tel" name="tel" placeholder="Phone Number">
                            <textarea
                                    class="text-size17 mb-12 w-full h-spc55 text-black"
                                    name="content"
                                    id="content" cols="30" rows="10" placeholder="Message"></textarea>
                            <button type="submit" class="bg-black text-white text-center w-full text-2xl py-3 px-spc23 font-medium leading-6">
                                Send
                            </button>
                        </form>
                    </div>
                    <div class="contact-img w-2/4 mx-10 xl:block lg:block md:block sm:hidden">
                        <img class="w-full max-w-336px m-auto" :src="img" alt="Contact">
                    </div>
                </div>
                <div class="contact-info flex xl:px-0 lg:px-0 md:px-0 sm:px-12" v-if="email || phonenum">
                    <div class="contact-point xl:mr-spc54 lg:mr-spc54 md:mr-spc54 sm:mr-8" v-if="email">
                        <h4 class="text-xs leading-spc11 uppercase mb-2">
                            Email
                        </h4>
                        <h2 class="text-2xl leading-none">
                            {{email}}
                        </h2>
                    </div>
                    <div class="contact-point" v-if="phonenum">
                        <h4 class="text-xs leading-spc11 uppercase mb-2">
                            Text
                        </h4>
                        <h2 class="text-2xl leading-none">
                            {{phonenum}}
                        </h2>
                    </div>
                </div>
                <div class="contact-img pt-12 contact-img-mobile xl:hidden lg:hidden md:hidden sm:block">
                    <img class="w-full max-w-336px m-auto" :src="img" alt="Contact">
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "ContactForm",
        props: ['title', 'subtitle', 'subtitle2', 'img', 'email', 'phonenum']
    }
</script>

<style scoped>

</style>