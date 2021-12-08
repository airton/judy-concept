<template>
    <header :class="{'active':ismenuVisible}" class="header-wrapper fixed w-full bg-white top-0 z-1024">
        <div class="wrapper max-w-1404px  m-auto px-4 py-8">
            <div class="header__content__inner px-8 flex justify-between items-center">
                <div class="header__content__left flex flex-1">
                    <button class="header__nav-toggle" @click="menuVisibleToggle">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M30 9.70361H20.2918V0H9.70361V9.70361H0V20.2918H9.70361V30H20.2918V20.2918H30V9.70361Z" fill="black"></path>
                        </svg>
                    </button>
                </div>
                <div class="header__content__center flex-1  flex items-center justify-center">
                    <!-- Logo -->
                    <LogoBlack />
                </div>
                <div class="header__content__right flex items-center flex-1 justify-end">
                    <!-- Popup Phone -->
                    <PopupPhone />

                    <!-- Header Cart -->
                    <HeaderCart />
                </div>
            </div>

        </div>

        <!-- Nav Drawer -->
        <div :class="{'active':ismenuVisible}" class="nav-drawer bg-no-repeat opacity-0 invisible h-0 flex items-center justify-center">
            <DrawerNav />
        </div>

        <!-- sidebar Cart Drawer -->
        <SidebarCartDrawer />
    </header>
</template>

<script>
    import LogoBlack from "./LogoBlack";
    import PopupPhone from "./PopupPhone";
    import HeaderCart from "./HeaderCart";
    import DrawerNav from "./DrawerNav";
    import $ from 'jquery'
    import SidebarCartDrawer from "./SidebarCartDrawer";

    export default {
        name: "ThemeHeader",
        components: {
            SidebarCartDrawer,
            DrawerNav,
            HeaderCart,
            PopupPhone,
            LogoBlack,
        },
        data() {
            return {
                ismenuVisible: false
            }
        },
        methods: {
            menuVisibleToggle() {
                this.ismenuVisible = !this.ismenuVisible
            }
        },
        mounted() {

            /*$(document).click('.header__nav-toggle', function () {
                $("body").toggleClass('nav-drawer-open')
            });*/

            /* mini cart */
            $(document).on('click', '.header__cart', function () {
                $("body").addClass('sidebar-cart-open');
            });
            $(document).on('click', '.mini-cart-close-trigger, .sidebar-cart-drawer-bg', function () {
                $("body").removeClass('sidebar-cart-open');
            });


            var prevScrollpos = window.pageYOffset;
            window.onscroll = function() {
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos) {
                    $(".header-wrapper").addClass('header-is-active');
                } else {
                    $(".header-wrapper").removeClass('header-is-active');
                }
                prevScrollpos = currentScrollPos;
            };

            $(window).scroll(function(){
                if ($(window).scrollTop() < 30) {
                    $(".header-wrapper").removeClass('header-is-active');
                }
                if ($(window).scrollTop() >= 60) {
                    $('body').addClass('body-is-active');
                    if ($(window).scrollTop() >= 870) {
                        $('body').removeClass('body-is-active');
                    }
                }
                else {
                    $('body').removeClass('body-is-active');
                }
            });

            /*=========== When window will resize then this action will work ============*/

            $(window).on('resize scroll', function () {
                if ($(window).width() < 750) {
                    $('body').addClass('menu-mobile');
                    if ($(window).scrollTop() >= 30) {
                        $('body').removeClass('menu-mobile body-is-active');
                    }
                }else {
                    $('body').removeClass('menu-mobile');
                }
            });

        }
    }
</script>

<style>

</style>