<template>
    <footer class="footer-wrapper bg-black py-spc48 md:py-spc48 sm:py-spc44 relative">
        <div class="wrapper max-w-1404px m-auto px-spc11 md:px-spc11 sm:px-8">
            <div class="footer-content-flex flex md:flex sm:block justify-between flex-row">
                <div class="footer-contact flex-1">
                    <div class="footer-contact-subscribe-box w-full max-w-524px">
                        <h1 class="text-5xl md:text-5xl sm:text-size2 text-white mr-spc3 mb-spc3 md:mb-spc3 sm:mb-spc13 sm:pr-0 leading-spc7">
                            Stay covered with the latest
                        </h1>
                        <form>
                            <div class="footer-input-field relative">
                                <input
                                    class="w-full bg-transparent text-size2 md:text-size2 sm:text-base pb-spc39 md:pb-spc39 sm:pb-spc7 pr-10 text-white"
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    required >
                                <button type="submit" name="commit" class="footer-input-btn w-spc44 h-spc44 absolute top-0 right-0 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 m-auto" width="16" height="16" viewBox="0 0 16 16">
                                        <defs>
                                            <clipPath id="clip-path">
                                                <rect width="16" height="16" fill="none"></rect>
                                            </clipPath>
                                        </defs>
                                        <g id="icon_arrow" data-name="icon/arrow" transform="translate(0 0)" clip-path="url(#clip-path)">
                                            <path id="Path" d="M12.172,6.971,6.808,1.454,8.222,0,16,8,8.222,16,6.808,14.546l5.364-5.517H0V6.971Z"></path>
                                        </g>
                                    </svg>
                                </button>
                            </div>
                        </form>
                    </div>
                    <div class="footer-social-network mt-spc45 md:mt-spc45 sm:mt-spc6">
                        <Socials />
                    </div>
                </div>
                <div class="footer-links text-right md:text-right sm:text-left flex-1">
                    <ul class="footer-quick-link flex flex-col mt-spc49">
                        <li v-for="(item, i) in quickLinks" :key="i" class="mt-4">
                            <a
                                :href="item.path"
                                class="text-white uppercase text-sm tracking-spc5 leading-spc8"
                            >
                                {{item.title}}
                            </a>
                        </li>
                    </ul>
                    <div class="footer-logo mt-spc17 md:mt-spc17 sm:mt-spc6">
                        <LogoWhite />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import Socials from "./Socials";
    import LogoWhite from "./LogoWhite";



    export default {
        name: "ThemeFooter",
        components: {
            LogoWhite,
            Socials
        },
        data() {
            return {
                quickLinks: [
                    {
                        path: '/our-story',
                        title: 'Our Story'
                    },
                    {
                        path: '/contact',
                        title: 'Contact Us'
                    },
                    {
                        path: '/faq',
                        title: 'Faq'
                    },
                    {
                        path: '#',
                        title: 'Terms of Service'
                    },
                ]
            }
        }
    }
</script>

<style scoped>

</style>