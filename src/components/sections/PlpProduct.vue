<template>
    <section class="plp-product-wrapper bg-white pt-spc69" :class="classList">
        <div class="wrapper max-w-1440px m-auto">
            <div class="plp-grid grid h-full">
                <PlpItems :product="product" v-for="product in products" :key="product.id" />
            </div>
        </div>
    </section>
</template>

<script>
    import PlpItems from "./PlpItems";

    export default {
        name: "PlpProduct",
        components: {PlpItems},
        props: [ 'PlpContent', 'classList'],
        data() {
            return {
                products: this.$props.PlpContent.products,
            }
        }
    }
</script>

<style scoped>

</style>