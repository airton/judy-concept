<template>
    <router-link :to="{ name: 'product-detail', params: { product: product, slug: product.slug }}" class="our-kits-slide-item">
        <div class="our-kits-slide-img mx-5 mb-spc21" v-if="product.img">
            <img :src="product.img" alt="Our Kits Product">
            <img class="hover-img hidden" :src="product.hoverimg" alt="Our Kits Product">
        </div>
        <div v-if="product.price || product.title" class="our-kits-slide-copy">
            <h1
                v-if="product.price"
                class="text-size5 uppercase font-boldText tracking-spc3 mb-6 leading-spc2"
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
        name: "OurKitsItems",
        props: ['product'],
    }
</script>

<style scoped>

</style>