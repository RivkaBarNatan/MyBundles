<script>
    import axios from 'axios'
    export default{
        data(){
            return{
                cities:[]
            }
        },
        mounted() {
            //Get the cities list
            axios.get("https://app.kch.org.il/dummy_data.php?cities").then(response =>{
                this.cities = response.data;
            });
        },
    }
</script>

<template>
    <footer style="padding: 60px 0px;" class="home_page_footer">
        <div class="row footer-container">
            <div class="col-lg-3 col-12 mb-5">
                <div class="d-flex align-items-center">
                    <img width="60" height="60" src="https://mybundles.co.il/wp-content/uploads/2021/07/logo-3.svg" class="ms-3" alt="" loading="lazy" srcset="https://mybundles.co.il/wp-content/uploads//2021/07/logo-3.svg 150w, https://mybundles.co.il/wp-content/uploads//2021/07/logo-3.svg 300w, https://mybundles.co.il/wp-content/uploads//2021/07/logo-3.svg 1024w" sizes="(max-width: 60px) 100vw, 60px">
                    <span class="footer-logo" style=""><strong>MY</strong>BUNDLES</span>
                </div>
            </div>
            <div class="col-lg-2 col-6" style="margin-bottom:30px;">
                <h3>באנדלים פופולריים</h3>
                <div>
                    <a class="footer_links" href="https://mybundles.co.il/product/tnuva-149-2/">תנובה כל מה שצריך</a>
                    <a class="footer_links" href="https://mybundles.co.il/product/hanamal-199/">הנמל על השולחן</a>
                    <a class="footer_links" href="https://mybundles.co.il/product/strauss-99-2/">שטראוס מסיבה</a>
                    <a class="footer_links" href="https://mybundles.co.il/product/sano-149/">פשוט סנו</a>
                    <a class="footer_links" href="https://mybundles.co.il/product/simrit-99/">חורף חם עם שמרית</a>
                </div>
            </div>
            <div class="col-lg-2 col-6" style="margin-bottom:30px;">
                <h3>מפת באנדלים ארצית</h3>
                <div class="row">
                    <div class="col-md footer_list">
                        <a class="footer_links city_picker" v-for="city in cities" :key="city">{{city.name}}</a>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-6" style="margin-bottom:30px;">
                <h3>תמיכה ושירות</h3>
                <a href="/faq" class="footer_links" style="margin-bottom: 25px !important;display: block;">שאלות נפוצות</a>
                <div class="warp_helping_info">
                    <p>
                        <a class="footer_links" style="line-height: 1.2rem;" href="tel:*6455">6455*</a>
                        <a class="footer_links" style="line-height: 1.2rem;" href="tel:039682050">03-9682050</a>
                        <a class="footer_links" style="line-height: 1.2rem;" href="mailto:help@mybundles.co.il">help@mybundles.co.il</a>
                    </p>
                    <br>
                    <p>ימים א-ה 23:00 – 07:00<br>
                    יום ו 12:30 – 07:00</p>
                    <p>המגשימים 15, פתח תקווה</p>
                </div>
            </div>
            <div class="col-lg-3 col-6 d-flex" style="margin-bottom:30px;">
                <div class="footer-menu-container">
                    <h3>מיי באנדלס</h3>
                    <div>
                        <a class="footer_links" href="/how-its-works">איך זה עובד</a>
                        <a class="footer_links" href="/about-us">בואו נכיר</a>
                        <a class="footer_links" href="https://mybundles.co.il/careers/">קריירה</a>
                        <a class="footer_links" href="https://mybundles.co.il/join-us-as-courier/">הצטרפות כמפיצים/ות</a>
                        <a class="footer_links" href="/contact">יצירת קשר</a>
                    </div>
                </div>
                <div>
                    <ul class="icons-list-container">
                        <li class="social-link">
                            <a href="https://www.facebook.com/mybundles.co.il/">
                                <img src="https://mybundles.co.il/wp-content/uploads/2020/12/facebook-1.svg">
                            </a>
                        </li>
                        <li class="social-link">
                            <a href="https://twitter.com/MyBundlesIL">
                                <img src="https://mybundles.co.il/wp-content/uploads/2020/12/twitter.svg">
                            </a>
                        </li>
                        <li class="social-link">
                            <a href="https://www.youtube.com/channel/UCPc30kQdHdzIuNr7l_rO3iw">
                                <img src="https://mybundles.co.il/wp-content/uploads/2020/12/youtube.svg">
                            </a>
                        </li>
                        <li class="social-link">
                            <a href="https://www.instagram.com/mybundles.co.il">
                                <img src="https://mybundles.co.il/wp-content/uploads/2020/12/Frame-708.svg">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
@import '../assets/footer.css';
</style>