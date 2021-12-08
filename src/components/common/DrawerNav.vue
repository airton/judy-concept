<template>
    <nav class="nav-drawer__nav">
        <ul class="nav-drawer__links text-center">
            <li class="nav-drawer__link block mb-12">
                <router-link to="/collections" class="inline-block font-boldText uppercase text-size3 tracking-spc1 leading-spc3 text-white hover:text-black">
                    Buy a Kit
                </router-link>
            </li>
            <li class="nav-drawer__link block mb-12">
                <router-link to="/our-story" class="inline-block font-boldText uppercase text-size3 tracking-spc1 leading-spc3 text-white hover:text-black">
                    Our Story
                </router-link>
            </li>
            <li class="nav-drawer__link block mb-12">
                <router-link to="/contact" class="inline-block font-boldText uppercase text-size3 tracking-spc1 leading-spc3 text-white hover:text-black">
                    Contact
                </router-link>
            </li>
            <li class="nav-drawer__link block">
                <router-link to="/faq" class="inline-block font-boldText uppercase text-size3 tracking-spc1 leading-spc3 text-white hover:text-black">
                    FAQ
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "DrawerNav"
    }
</script>

<style scoped>

</style>