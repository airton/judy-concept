<template>
    <section class="ourstory-hero-banner h-spc62 bg-cover bg-no-repeat" :style="{backgroundImage: 'url('+bgimg+')'}" :class="classlist">
        <div class="ourstory-hero-content">
            <div class="our-story-hero-inner max-w-872px m-auto text-center">
                <h1 v-if="title" class="text-5xl md:text-5xl sm:text-size2 lg:max-w-100p md:max-w-100p sm:mx-auto sm:max-w-420px pt-spc61 px-spc49 leading-spc9 md:leading-spc9 sm:leading-spc6">
                    {{title}}
                </h1>
                <h2 v-if="subtitle" class="text-size5 leading-8 py-6 px-spc49">
                    {{subtitle}}
                </h2>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "OurStoryHero",
        props:['title', 'subtitle', 'bgimg', 'classlist']
    }
</script>

<style scoped>

</style>