<template>
    <section class="instagram-wrapper relative">
        <span class="home-instagram__hashtag inline-block text-base font-medium absolute">
            Get <a href="https://instagram.com/">#readyjudy</a>
        </span>
        <div class="instagram-container">
            <div class="instagram-items flex relative w-full transition-transform box-border">
                <a :href="item.url ? item.url : '#'" class="instagram-item flex-1 max-w-20p w-auto transition-transform relative" v-for="(item, i) in instagramContent.instagramItems" :key="i">
                    <img :src="item.img" alt="Instagram">
                </a>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: "InstagramFeed",
        props: ['instagramContent']
    }
</script>

<style scoped>

</style>