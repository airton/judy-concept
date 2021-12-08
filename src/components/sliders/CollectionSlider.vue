<template>
    <div class="collection-slide max-w-500px px-8 mx-auto">
        <div class="compare-row-item border-none" :class="'compare-row-item-'+product.id">
            <div class="compare-img max-w-350px mx-auto pt-8">
                <img :src="product.cmpImg" alt="">
            </div>
            <div class="compare-row-content flex w-full flex-col">
                <div class="compare-row-top items-center my-spc21 relative">
                    <div v-if="product.title || product.subtitle || product.price " class="compare-row-column w-full">
                        <h2 v-if="product.title" class="xl:text-size5 lg:text-size5 md:text-size5 sm:text-base font-bold leading-spc10 xl:mb-6 lg:mb-6 md:mb-6 sm:mb-3">
                            {{product.cmpTitle}}
                        </h2>
                        <p v-if="product.subtitle" class=" text-base leading-normal tracking-spc2 mb-6">
                            {{product.subtitle}}
                        </p>
                        <span class="price">
                        {{product.price}}
                    </span>
                    </div>
                    <div v-if="product.dimension || product.weight" class="compare-row-column">
                        <p v-if="product.dimension" class="text-xs leading-normal mt-5">
                            {{product.dimension}}
                        </p>
                        <span v-if="product.weight" class="weight text-xs leading-normal block">
                        {{product.weight}}
                    </span>
                    </div>
                    <div v-if="product.material" class="compare-row-column w-full mt-5 pb-8 border-b">
                        <p class="text-xs">
                            {{product.material}}
                        </p>
                    </div>
                </div>
                <!-- hidden Bottom -->
                <div class="compare-row-bottom flex flex-wrap items-start relative">
                    <div v-if="product.tools" class="compare-row-column mb-spc6 w-1/2">
                        <h2 v-if="product.tools && product.toolsTitle" class="text-sm leading-normal mb-spc60 font-medium">
                            {{product.toolsTitle}}
                        </h2>
                        <div class="xl:max-w-224px lg:max-w-224px md:max-w-224px sm:max-w-100p compare-cat-desc">
                            <p v-for="(item, i) in product.tools" :key="i" class="text-xs leading-normal tracking-spc2 ">
                                {{item.text}}
                            </p>
                        </div>
                    </div>
                    <div v-if="product.warmth" class="compare-row-column mb-spc6 w-1/2">
                        <h2 v-if="product.warmth && product.warmthTitle" class="text-sm leading-normal mb-spc60 font-medium">
                            {{product.warmthTitle}}
                        </h2>
                        <div class="xl:max-w-224px lg:max-w-224px md:max-w-224px sm:max-w-100p compare-cat-desc">
                            <p v-for="(item, i) in product.warmth" :key="i" class="text-xs leading-normal tracking-spc2 ">
                                {{item.text}}
                            </p>
                        </div>
                    </div>
                    <div v-if="product.safety" class="compare-row-column mb-spc6 w-1/2">
                        <h2 v-if="product.safety && product.safetyTitle" class="text-sm leading-normal mb-spc60 font-medium">
                            {{product.safetyTitle}}
                        </h2>
                        <div class="xl:max-w-224px lg:max-w-224px md:max-w-224px sm:max-w-100p compare-cat-desc">
                            <p v-for="(item, i) in product.safety" :key="i" class="text-xs leading-normal tracking-spc2 ">
                                {{item.text}}
                            </p>
                        </div>
                    </div>
                    <div v-if="product.firstaid" class="compare-row-column mb-spc6 w-1/2">
                        <h2 v-if="product.firstaid && product.firstaidTitle" class="text-sm leading-normal mb-spc60 font-medium">
                            {{product.firstaidTitle}}
                        </h2>
                        <div class="xl:max-w-224px lg:max-w-224px md:max-w-224px sm:max-w-100p compare-cat-desc">
                            <p v-for="(item, i) in product.firstaid" :key="i" class="text-xs leading-normal tracking-spc2 ">
                                {{item.text}}
                            </p>
                        </div>
                    </div>
                    <div v-if="product.food" class="compare-row-column mb-spc6 w-1/2">
                        <h2 v-if="product.food && product.foodTitle" class="text-sm leading-normal mb-spc60 font-medium">
                            {{product.foodTitle}}
                        </h2>
                        <div class="xl:max-w-224px lg:max-w-224px md:max-w-224px sm:max-w-100p compare-cat-desc">
                            <p v-for="(item, i) in product.food" :key="i" class="text-xs leading-normal tracking-spc2 ">
                                {{item.text}}
                            </p>
                        </div>
                    </div>
                    <div v-if="product.water" class="compare-row-column mb-spc6 w-1/2">
                        <h2 v-if="product.water && product.waterTitle" class="text-sm leading-normal mb-spc60 font-medium">
                            {{product.waterTitle}}
                        </h2>
                        <div class="xl:max-w-224px lg:max-w-224px md:max-w-224px sm:max-w-100p compare-cat-desc">
                            <p v-for="(item, i) in product.water" :key="i" class="text-xs leading-normal tracking-spc2 ">
                                {{item.text}}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CollectionSlider",
        props: {
            product: {}
        },

    }
</script>

<style scoped>

</style>