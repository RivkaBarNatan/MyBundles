<script>
    import axios from 'axios'
    import Items from './Items.vue'

    export default
    {
        data()
        {
            return {
                time: "",
                brands: null,
            };
        },
        created()
        {
            //computed time
            setInterval(() => {
                this.getDeliveryTime();
            }, 1000);
        },
        methods:
        {
            getDeliveryTime() {
                var hours = new Date().getHours() + 1;
                var minutes = new Date().getMinutes();
                this.time = hours + ":" + minutes;
            }
        },
        mounted()
        {
            //Get the brands list
            axios.get("https://app.kch.org.il/dummy_data.php?makers").then(response => (this.brands = response.data));
        },
        components: { Items }
    }
</script>

<template>
    <div id="content" class="site-content">
        <div class="ast-container">
            <div class="entry-content-page">
                <div class="cover-section-container">
                    <section class="cover-section" style="background-image: url('https://mybundles.co.il/wp-content/uploads/2021/07/1189079760.png')">
                        <div class="row">
                            <div class="col-lg-12 main-banner">
                                <div class="cover-content" style="background-image: url('https://mybundles.co.il/wp-content/uploads/2021/08/1189079760_mobile.svg')">
                                    <div class="main-text" style="color: #234353"><div class="content-text">חבילות שמתאימות לכם</div>
                                        <div class="content-text"><strong>תוך שעה מהיצרן אצלכם.</strong></div>
                                    </div>
                                    <div class="content-btn">
                                        <div class="d-flex align-items-center">
                                            <p>הזמנתם עכשיו, הבאנדל יגיע עד-</p>
                                            <span class="wrap-clock">
                                                <b class="clock me-0" id="clock">{{time}}</b>
                                                <span class="dot d-block" style></span>
                                            </span>
                                        </div>
                                    </div>
                                    <div id="wrap-brands" class="wrap-brands hide-on-mobile">
                                        <a class="logo-black-white" v-for="brand in brands" :key="brand" v-bind:href="brand.href">
                                            <img class="brand-image-hover" v-bind:src="brand['brand-image-hover']">
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <Items></Items>
                <section class="bundles_map">
                    <img width="1387" height="446" src="https://mybundles.co.il/wp-content/uploads/2021/06/מפה-דסקופ-20.jpg" class="d-none d-md-block" alt="" loading="lazy" srcset="https://mybundles.co.il/wp-content/uploads/2021/06/מפה-דסקופ-20.jpg 1387w, https://mybundles.co.il/wp-content/uploads/2021/06/מפה-דסקופ-20-600x193.jpg 600w, https://mybundles.co.il/wp-content/uploads/2021/06/מפה-דסקופ-20-300x96.jpg 300w, https://mybundles.co.il/wp-content/uploads/2021/06/מפה-דסקופ-20-1024x329.jpg 1024w, https://mybundles.co.il/wp-content/uploads/2021/06/מפה-דסקופ-20-768x247.jpg 768w" sizes="(max-width: 1387px) 100vw, 1387px">
                    <div class="bundles-map-title">
                        <div class="first-part">
                            <strong> מיי </strong>
                            <span> באנדלס </span>
                        </div>
                        <div>
                            <strong style="font-size: smaller">חבילות שצריכים בכל מקום<span class="dot">.</span></strong>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>

    

</template>

<style scoped>
@import '../assets/home.css';
</style>