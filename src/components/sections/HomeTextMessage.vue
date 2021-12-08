<template>
    <section class="home-text-messages-wrapper xl:pt-spc42 lg:pt-spc13 md:pt-spc13 sm:pt-spc13 xl:pb-spc43 lg:pb-spc13 md:pb-spc13 sm:pb-spc13 ">
        <div class="wrapper max-w-1404px m-auto px-4">
            <div class="home-text-messages-flex xl:flex lg:block md:block sm:block items-start">
                <div class="home-text-message-vertical-scroll overflow-hidden relative xl:ml-spc37 lg:ml-0 lg:text-center sm:ml-0 md:text-left sm:text-center">
                    <div class="home-text-message-vertical-scroll-block home-text-message-vertical-scroll-block-first relative">
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                        <div class="home-text-message-vertical-scroll-block home-text-message-vertical-scroll-block-clone absolute w-full">
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 pb-4 block">I WILL GET PREPARED</span>
                            <span class="text-message-vertical-scroll-line xl:text-size8 md:text-size10 sm:text-size5 font-boldText tracking-spc4 xl:leading-spc6 md:leading-spc13 sm:leading-spc2 block">I WILL GET PREPARED</span>
                        </div>
                    </div>
                </div>
                <div class="home-text-message-messages flex-1 w-2/4 lg:mx-auto md:w-2/4 sm:w-full xl:pl-spc2 lg:pl-0 md:pl-spc2 sm:pl-4 xl:pt-4 lg:pt-spc13 md:pt-spc13 sm:pt-spc13 xl:pr-spc41 lg:pr-0 md:pr-spc41 sm:pr-4 ">
                    <div class="home-text-message-convo xl:max-w-100p md:max-w-100p sm:max-w-350px sm:mx-auto">

                        <div :class="'home-text-message-bubble mb-spc29 home-text-message-bubble-'+message.id" v-for="message in messages" :key="message.id">
                            <div class="bubble__message relative bg-primaryColor text-white min-w-117px w-spc40 md:w-spc40 sm:w-spc74 py-4 px-5 text-size5 md:text-size5 sm:text-xl leading-8 pt-spc38 px-6 pb-spc39">
                                <p>
                                    {{message.title}}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "HomeTextMessage",
        data() {
            return {
                messages: [
                    {
                        id: 1,
                        title: 'Everyone keeps saying they will get “prepared”, what does that even mean?!'
                    },
                    {
                        id: 2,
                        title: 'It means... order a JUDY!'
                    },
                    {
                        id: 3,
                        title: 'Okay thx! Now I can breathe.'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>