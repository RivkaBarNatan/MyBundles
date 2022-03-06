<script>
    export default({
        mounted()
        {
            //action the setItems action in vuex
            this.$store.dispatch('setItems');
        },
        computed:{
            cityName(){
                return this.$store.getters.cityName
            },
            cityId(){
                return this.$store.getters.cityId
            },

            items(){
                return this.$store.getters.items;
            }
        }
    })
</script>

<template>
    <section class="brands-your-bundles">
        <div class="row bundles-row" v-for="item in items" :key="item">
            <div class="col-xl-6 col-lg-12 col-sm-12 bundle-container">
                <div class="reset-this">
                    <div class="card-box first-card-box position-relative">
                        <div class="bundle-row-container">
                            <div class="col-md-6 bundle-image-container">
                                <a v-bind:href="item.url" class="bundles_image">
                                    <img width="300" height="178" v-bind:src="item.image" class="attachment-300x196 size-300x196" alt="" sizes="(max-width: 300px) 100vw, 300px">
                                </a>
                            </div>
                            <div class="col-md-6 bundle-card">
                                <a v-bind:href="item.url" class="bundle-product-text-container">
                                    <div class="bundles_title">{{item.name}}</div>
                                    <div class="bundles_description">{{item.description}}</div>
                                </a>
                                <div class="inline price-and-button-container">
                                    <div class="inline-group">
                                        <div class="bundles_price">
                                            <span class="woocommerce-Price-amount amount">
                                                <bdi>
                                                    <span class="woocommerce-Price-currencySymbol">₪</span>
                                                    99.00
                                                </bdi>
                                            </span>
                                        </div>
                                    </div>
                                    <button v-if="item.stock" type="submit" name="add-to-cart" class="d-noned-md-flex single_add_to_cart_button button alt">
                                        <span>הוספה לסל</span>
                                    </button>
                                    <div v-if="!item.stock" class="soon-in-stock" bis_skin_checked="1">
                                        <span>בקרוב חוזר</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    section.brands-your-bundles, section.cart-brands-your-bundles {
        padding: 50px 50px 5rem;
        background: #fff;
        margin: 0 auto;
        width: 80%;
        position: relative;
        clear: both;
    }
    
    section.brands-your-bundles {
        padding: 50px 2.375rem;
        background: #fff;
        margin: 0 auto;
        width: 84%;
        position: relative;
        clear: both;
        max-width: 94.8rem;
    }
    section.brands-your-bundles {
        padding: 0;
        background: transparent;
        margin: 0 auto;
        margin-bottom: 4.125rem;
        width: 84%;
        max-width: 1550px;
        position: relative;
        top: -40px;
        display: flex;
        flex-wrap: wrap;
    }
    @media screen and (max-width: 1440px)
    {
        section.brands-your-bundles {
            width: 90%;
        }
    }
    @media screen and (max-width: 1280px){
        section.brands-your-bundles {
            width: 95%;
        }
    }
    @media only screen and (max-width: 992px){
        section.brands-your-bundles {
            padding: 0px 24px 50px 24px;
        }
    }
    @media only screen and (max-width: 992px){
        section.brands-your-bundles {
            width: 100%;
            margin-bottom: 0;
            top: unset;
        }
    }



    section.brands-your-bundles .bundles-row {
        margin-bottom: 1.25rem;
        margin-left: 0;
        margin-right: 0;
        display: flex;
        flex-wrap: wrap;
        width: 50%;
        justify-content: flex-end;
    }
    section.brands-your-bundles .bundle-container:first-of-type {
        margin-left: 1.25rem;
    }
    section.brands-your-bundles .bundle-container, section.cart-brands-your-bundles .bundle-container {
        padding: 0 10px;
    }
    section.brands-your-bundles .bundle-container {
        width: 95%;
        padding: 0;
    }
    section.brands-your-bundles .card-box, section.cart-brands-your-bundles .card-box {
        background: #ffffff;
        border: 1px solid #ced1d8;
        box-sizing: border-box;
        padding: 3rem 2rem 2rem;
        min-height: 19rem;
        height: 20rem;
    }
    section.brands-your-bundles .card-box .bundle-row-container {
        height: 100%;
    }
    .bundle-row-container {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }
    @media screen and (max-width: 1280px){
        .bundle-image-container {
            width: 45%;
        }
    }
    


    @media only screen and (max-width: 1750px){
            .bundle-image-container {
            width: 45%;
        }
    }
    .bundles_image {
        max-height: 196px;
        display: flex;
        justify-content: center;
    }
    section.brands-your-bundles .card-box .bundles_image img {
        width: 331px;
        height: 196px;
        object-fit: contain;
    }
    @media screen and (max-width: 1280px){
        .bundle-card {
            width: 55%;
        }
    }
    @media only screen and (max-width: 1750px)
    {
        .bundle-card {
            width: 55%;
        }
    }
    .bundle-card {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #234353;
        padding-right: 40px;
    }
    .bundle-card {
        padding-right: 15px;
    }
    @media screen and (max-width: 1280px){
        section.brands-your-bundles .card-box .bundles_title {
            font-size: 2.33rem;
            line-height: 2.33rem;
        }
    }
    
    section.brands-your-bundles .card-box .bundles_title {
        font-style: normal;
        font-weight: 900;
        font-size: 2.2rem;
        line-height: 2.2rem;
        text-decoration: none;
        color: #234353;
    }
    @media only screen and (max-width: 1600px){
        section.brands-your-bundles .card-box .bundles_title {
            font-size: 1.75rem;
            line-height: 1.75rem;
        }
    }
    section.brands-your-bundles .card-box .bundles_description {
        margin-top: 1rem;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        line-height: 21px;
        color: #234353 !important;
    }
    
    .bundle-card div.inline {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    @media only screen and (max-width: 1600px){
        .bundle-card .single_add_to_cart_button {
            padding: 0.5rem 1.8rem !important;
        }
    }
    
    .bundle-card .single_add_to_cart_button {
        white-space: nowrap;
    }
    .bundle-card div.inline {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
    }
    section.brands-your-bundles .inline-group {
        clear: both;
        display: inline-block;
    }
    section.brands-your-bundles .inline-group .bundles_price {
        font-size: 2.3rem;
        line-height: 2.3rem;
        font-weight: 700;
        text-align: right;
    }
    .woocommerce-Price-currencySymbol {
        margin-right: 8px;
    }
    span.woocommerce-Price-currencySymbol {
        margin-right: 0;
    }
    @media only screen and (max-width: 1600px){
        section.brands-your-bundles .inline-group .bundles_price {
            font-size: 1.75rem;
            line-height: 1.75rem;
        }
    }

    @media screen and (max-width: 1280px){
        section.brands-your-bundles .inline-group .bundles_price {
            font-size: 2.33rem;
            line-height: 2.33rem;
        }
    }
    .bundle-card .single_add_to_cart_button {
        white-space: nowrap;
    }
    @media only screen and (max-width: 1600px){
        .bundle-card .single_add_to_cart_button {
            padding: 0.5rem 1.8rem !important;
        }
    }
    
    .single_add_to_cart_button {
        align-items: center;
        display: flex;
        color: #234353;
        background-color: white;
        color: #234353;
        background-color: #ffffff;
        border: 1px solid #bdcbd2;
        white-space: nowrap;
        border-radius: 2px;
    }
    .soon-in-stock {
        background: rgba(226, 0, 26, 0.04);
        padding: 0 1.2rem;
        display: flex;
        align-items: center;
        height: 40px;
    }
    .soon-in-stock span {
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 35px;
        text-align: center;
        color: #e2001a;
        white-space: nowrap;
    }
</style>