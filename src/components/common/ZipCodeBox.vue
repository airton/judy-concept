<template>
    <div class="zip-code-content">
        <h1 v-if="title" class="whitespace-pre-line text-size6 sm:text-size5 font-medium leading-spc9 sm:leading-spc13 mb-spc53 sm:mb-spc16">
            {{title}}
        </h1>
        <div class="zip-code-input-wrap max-w-800px">
            <form class="relative">
                <div class="zip-code-input-group pb-4">
                    <input class="xl:h-spc54 lg:h-spc54 md:h-spc54 sm:h-spc52 w-full bg-transparent text-primaryColor font-boldText xl:text-size9 lg:text-size9 md:text-size9 uppercase sm:text-size11" type="text" maxlength="5" placeholder="ZIPCODE">
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ZipCodeBox",
        props: ['title']
    }
</script>

<style scoped>

</style>