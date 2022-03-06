<script>
    import CityModal from './CityModal.vue'

    export default
    {
        computed:{
            selectedCity(){
                return this.$store.getters.cityName;
            }
        },
        components: { CityModal }
    }
</script>

<template>
    <header class="header-fixed front-page-header position-static">
        <div class="header-limiter">
            <div class="right-header">
                <a class="logo-container">
                    <img class="d-none d-lg-block" src="https://mybundles.co.il/wp-content/uploads/2020/12/site-logo.png">
                    <h1 class="logo">
                        <span class="logo-second-part">BUNDLES</span>
                        <span class="logo-first-part">MY</span>
                    </h1>
                </a>
                <div class="after_logo d-none d-lg-block">
                    <button class="city-selector" data-bs-toggle="modal" data-bs-target="#city-select-modal">
                        <span>{{selectedCity}}</span>
                        <img src="https://mybundles.co.il/wp-content/themes/anyapp-child/assets/images/city-selector-arrow.svg" alt="">
                    </button>
                </div>
            </div>
            <div class="left_header">
                <nav>
                    <span class="d-none d-lg-block header-menu-item">
                        <a class="current" href="https://mybundles.co.il/">הבאנדלים שלנו</a>
                    </span>
                    <span class="d-none d-lg-block header-menu-item">
                        <a class="" href="https://mybundles.co.il/how-its-works/">מה זה מיי באנדלס</a>
                    </span>
                </nav>
                <div class="social-icons">
                    <ul>
                        <li id="shopping-cart-container">
                            <div class="cart-link-container">
                                <a class="hide-on-mobile shopping-cart-link">
                                    <img src="https://mybundles.co.il/wp-content/uploads/2021/02/shopping-cart.svg">
                                </a>
                            </div>
                        </li>
                        <li class="signup_and_login d-none d-lg-inline-flex">
                            <a class="signup_header" href="/login">כניסה</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
    <CityModal></CityModal>
</template>

<style scoped>
@import '../assets/header.css';
</style>