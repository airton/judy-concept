<template>
    <div class="compare-row-item flex" :class="'compare-row-item-'+product.id">
        <div class="compare-img max-w-350px pt-8">
            <img :src="product.cmpImg" alt="">
        </div>
        <div class="compare-row-content flex w-full flex-col">
            <div class="compare-row-top flex items-center my-spc21 relative">
                <button @click="compareInfoToggle" :class="{'active': compareInfo}" class="absolute compare-toggle-btn w-8 h-8 text-size8 leading-8 font-light">+</button>
                <div v-if="product.title || product.subtitle || product.price " class="compare-row-column w-1/3">
                    <h2 v-if="product.title" class="text-size5 leading-spc10 mb-6">
                        {{product.cmpTitle}}
                    </h2>
                    <p v-if="product.subtitle" class="max-w-224px text-base leading-normal tracking-spc2 mb-6">
                        {{product.subtitle}}
                    </p>
                    <span class="price">
                        {{product.price}}
                    </span>
                </div>
                <div v-if="product.dimension || product.weight" class="compare-row-column w-1/3">
                    <p v-if="product.dimension" class="text-base leading-normal mb-5">
                        {{product.dimension}}
                    </p>
                    <span v-if="product.weight" class="weight text-base leading-normal block">
                        {{product.weight}}
                    </span>
                </div>
                <div v-if="product.material" class="compare-row-column w-1/3">
                    <p class="text-xs">
                        {{product.material}}
                    </p>
                </div>
            </div>
            <!-- hidden Bottom -->
            <div v-show="compareInfo" class="compare-row-bottom flex flex-wrap items-start relative">
                <div v-if="product.tools" class="compare-row-column mb-spc6 w-1/3">
                    <h2 v-if="product.tools && product.toolsTitle" class="text-base leading-normal mb-spc60 font-medium">
                        {{product.toolsTitle}}
                    </h2>
                    <div class="max-w-224px compare-cat-desc">
                        <p v-for="(item, i) in product.tools" :key="i" class="text-base leading-normal tracking-spc2 ">
                            {{item.text}}
                        </p>
                    </div>
                </div>
                <div v-if="product.warmth" class="compare-row-column mb-spc6 w-1/3">
                    <h2 v-if="product.warmth && product.warmthTitle" class="text-base leading-normal mb-spc60 font-medium">
                        {{product.warmthTitle}}
                    </h2>
                    <div class="max-w-224px compare-cat-desc">
                        <p v-for="(item, i) in product.warmth" :key="i" class="text-base leading-normal tracking-spc2 ">
                            {{item.text}}
                        </p>
                    </div>
                </div>
                <div v-if="product.safety" class="compare-row-column mb-spc6 w-1/3">
                    <h2 v-if="product.safety && product.safetyTitle" class="text-base leading-normal mb-spc60 font-medium">
                        {{product.safetyTitle}}
                    </h2>
                    <div class="max-w-224px compare-cat-desc">
                        <p v-for="(item, i) in product.safety" :key="i" class="text-base leading-normal tracking-spc2 ">
                            {{item.text}}
                        </p>
                    </div>
                </div>
                <div v-if="product.firstaid" class="compare-row-column mb-spc6 w-1/3">
                    <h2 v-if="product.firstaid && product.firstaidTitle" class="text-base leading-normal mb-spc60 font-medium">
                        {{product.firstaidTitle}}
                    </h2>
                    <div class="max-w-224px compare-cat-desc">
                        <p v-for="(item, i) in product.firstaid" :key="i" class="text-base leading-normal tracking-spc2 ">
                            {{item.text}}
                        </p>
                    </div>
                </div>
                <div v-if="product.food" class="compare-row-column mb-spc6 w-1/3">
                    <h2 v-if="product.food && product.foodTitle" class="text-base leading-normal mb-spc60 font-medium">
                        {{product.foodTitle}}
                    </h2>
                    <div class="max-w-224px compare-cat-desc">
                        <p v-for="(item, i) in product.food" :key="i" class="text-base leading-normal tracking-spc2 ">
                            {{item.text}}
                        </p>
                    </div>
                </div>
                <div v-if="product.water" class="compare-row-column mb-spc6 w-1/3">
                    <h2 v-if="product.water && product.waterTitle" class="text-base leading-normal mb-spc60 font-medium">
                        {{product.waterTitle}}
                    </h2>
                    <div class="max-w-224px compare-cat-desc">
                        <p v-for="(item, i) in product.water" :key="i" class="text-base leading-normal tracking-spc2 ">
                            {{item.text}}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CompareKitsItem",
        props: ['product'],
        data() {
            return {
                compareInfo: false
            }
        },
        methods: {
            compareInfoToggle() {
                this.compareInfo = !this.compareInfo
            }
        }
    }
</script>

<style scoped>

</style>