<template>
    <router-link :to="{ name: 'product-detail', params: { product: product, slug: product.slug }}" class="plp-grid-item text-center" :class="'plp-grid-item-'+product.id">
        <div class="our-kits-slide-img" v-if="product.img">
            <img :src="product.img" alt="Our Kits Product">
            <img class="hover-img hidden" :src="product.hoverimg" alt="Our Kits Product">
        </div>
        <div v-if="product.price || product.title" class="our-kits-slide-copy">
            <h1
                    v-if="product.price"
                    class="text-size10 md:text-size10 sm:text-size5 whitespace-pre-line md:whitespace-pre-line sm:whitespace-normal mt-6 px-5 leading-tight uppercase font-boldText tracking-spc3 mb-6"
            >
                {{product.title}}
            </h1>
            <p v-if="product.price" class="our-kits-slide-price text-size5 leading-5">
                {{product.price}}
            </p>
        </div>
    </router-link>
</template>

<script>
    export default {
        name: "PlpItems",
        props: ['product'],
    }
</script>

<style scoped>

</style>