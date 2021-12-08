<template>
    <li :class="{'active': isAccordion}">
        <h1 class="xl:text-size5 lg:text-size5 md:text-size5 sm:text-base mt-8 leading-none relative tracking-spc2">
            {{ptAccordion.title}}
            <button @click="accordionToggle" class="accordion-toggle absolute right-0 w-spc72 h-spc72 text-size18 inline-block leading-spc12 font-light">
                +
            </button>
        </h1>
        <div class="faq-accordions-content mb-8 text-base leading-normal overflow-hidden tracking-spc2">
            <p class="my-4">
                {{ptAccordion.content}}
            </p>
        </div>
    </li>
</template>

<script>
    export default {
        props: [
            'ptAccordion'
        ],
        name: "PartnerAccordionItem",
        data() {
            return {
                isAccordion: false
            }
        },
        methods: {
            accordionToggle() {
                this.isAccordion = !this.isAccordion
            }
        }
    }
</script>

<style scoped>

</style>