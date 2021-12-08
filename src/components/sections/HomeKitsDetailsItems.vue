<template>
    <div class="home-kit-details-highlight-item flex-1 min-w-50p md:min-w-50p sm:min-w-100p px-4 mb-spc32 md:mb-spc32 sm:mb-spc70">
        <div class="home-kit-details-text-container">
            <button @click="quizeToggle" :class="{'quiz-active-button': active}" class="home-kit-details-item-toggle text-size5 font-boldText leading-8 uppercase tracking-spc4 md:w-auto sm:w-full md:block sm:flex sm:items-center sm:justify-between">
                <h3 class="whitespace-pre-line text-left mb-3 text-size7 tracking-spc3">
                    {{quizcontent.title}}
                </h3>
                <span class="home-kit-details-highlights__item-icon text-size6 hidden md:hidden sm:block">+</span>
            </button>
            <div :class="{'quiz-active': active}" class="quiz-body whitespace-pre-line md:whitespace-pre-line sm:whitespace-normal leading-normal block text-base">
                <p class="quiz-content"> {{quizcontent.desc}}</p>
            </div>
        </div>
    </div>
</template>

<script>


    export default {
        name: "HomeKitDetailsItems",
        props: ['quizcontent'],
        data() {
            return {
                active: false
            }
        },
        methods: {
            quizeToggle() {
                this.active = !this.active
            }
        }
    }
</script>

<style scoped>

</style>