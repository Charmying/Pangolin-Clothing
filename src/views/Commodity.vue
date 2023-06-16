<style scoped>
    /* style.css */
    @import "../assets/css/commodity.css";
</style>

// h1 d-none 
// banner 用掉 h2

<template>
    <h1 class="d-none">Title</h1>
    <Header />
    <main>
        <!-- section 1 -->
        <section class="banner">
            <div class="banner-image"></div>
            <div class="banner-content">
                <h2>
                    <span>精選商品</span><br>
                    <span>Commodity-Select</span>
                </h2>
            </div>
        </section>
        <!-- section 2 -->
        <section>
            <h3>精選商品</h3>
        </section>
        <!-- section 3 -->
        <section>
            <div class="select-list">
                <button class="select-button button_all" data-aos="flip-down" data-aos-duration="1000" data-filter="all">All</button>
            </div>
            <div class="container text-center">
                <div class="row row-cols-2 row-cols-sm-3 row-cols-md-6">

                    <div class="select-list">
                        <button class="select-button button_clothing" data-aos="flip-up" data-aos-duration="1000" data-filter="tops">上裝</button>
                    </div>
                    <div class="select-list">
                        <button class="select-button button_pants" data-aos="flip-up" data-aos-duration="1000" data-filter="bottoms">下裝</button>
                    </div>
                    <div class="select-list">
                        <button class="select-button button_bags" data-aos="flip-up" data-aos-duration="1000" data-filter="suiting">西裝</button>
                    </div>
                    <div class="select-list">
                        <button class="select-button button_bags" data-aos="flip-up" data-aos-duration="1000" data-filter="outerwear">外套</button>
                    </div>
                    <div class="select-list">
                        <button class="select-button button_bags" data-aos="flip-up" data-aos-duration="1000" data-filter="footwear">鞋子</button>
                    </div>
                    <div class="select-list">
                        <button class="select-button button_bags" data-aos="flip-up" data-aos-duration="1000" data-filter="accessories">配件</button>
                    </div>
                </div>
            </div>
        </section>
        <!-- section 4 -->
        <section>
            <div class="container text-center">
                <div class="row row-cols-2 row-cols-lg-4">
                    <div class="col commodity tops">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/tops.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Merino 3/4 Crew</h4>
                                <p class="ori-price">NT$29,900</p>
                                <p class="price">NT$29,899</p>
                            </div>
                            <a href="commodity-tops" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity bottoms">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/bottoms.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim 5 Pocket</h4>
                                <p class="ori-price">NT$‌28,200</p>
                                <p class="price">NT$28,199</p>
                            </div>
                            <a href="commodity-bottoms" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity suiting">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/suiting.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Twill Car Coat</h4>
                                <p class="ori-price">NT$‌94,000</p>
                                <p class="price">NT$93,999</p>
                            </div>
                            <a href="commodity-suiting" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity outerwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/outerwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim Jacket</h4>
                                <p class="ori-price">NT$‌41,200</p>
                                <p class="price">NT$41,199</p>
                            </div>
                            <a href="commodity-outerwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity footwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/footwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Cowboy Boot</h4>
                                <p class="ori-price">NT$‌33,700</p>
                                <p class="price">NT$33,699</p>
                            </div>
                            <a href="commodity-footwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity accessories">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/accessories.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>The 1983</h4>
                                <p class="ori-price">NT$‌10,800</p>
                                <p class="price">NT$10,799</p>
                            </div>
                            <a href="commodity-accessories" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity tops">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/tops.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Merino 3/4 Crew</h4>
                                <p class="ori-price">NT$29,900</p>
                                <p class="price">NT$29,899</p>
                            </div>
                            <a href="commodity-tops" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity bottoms">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/bottoms.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim 5 Pocket</h4>
                                <p class="ori-price">NT$‌28,200</p>
                                <p class="price">NT$28,199</p>
                            </div>
                            <a href="commodity-bottoms" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity suiting">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/suiting.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Twill Car Coat</h4>
                                <p class="ori-price">NT$‌94,000</p>
                                <p class="price">NT$93,999</p>
                            </div>
                            <a href="commodity-suiting" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity outerwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/outerwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim Jacket</h4>
                                <p class="ori-price">NT$‌41,200</p>
                                <p class="price">NT$41,199</p>
                            </div>
                            <a href="commodity-outerwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity footwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/footwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Cowboy Boot</h4>
                                <p class="ori-price">NT$‌33,700</p>
                                <p class="price">NT$33,699</p>
                            </div>
                            <a href="commodity-footwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity accessories">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/accessories.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>The 1983</h4>
                                <p class="ori-price">NT$‌10,800</p>
                                <p class="price">NT$10,799</p>
                            </div>
                            <a href="commodity-accessories" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity tops">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/tops.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Merino 3/4 Crew</h4>
                                <p class="ori-price">NT$29,900</p>
                                <p class="price">NT$29,899</p>
                            </div>
                            <a href="commodity-tops" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity bottoms">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/bottoms.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim 5 Pocket</h4>
                                <p class="ori-price">NT$‌28,200</p>
                                <p class="price">NT$28,199</p>
                            </div>
                            <a href="commodity-bottoms" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity suiting">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/suiting.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Twill Car Coat</h4>
                                <p class="ori-price">NT$‌94,000</p>
                                <p class="price">NT$93,999</p>
                            </div>
                            <a href="commodity-suiting" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity outerwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/outerwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim Jacket</h4>
                                <p class="ori-price">NT$‌41,200</p>
                                <p class="price">NT$41,199</p>
                            </div>
                            <a href="commodity-outerwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity footwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/footwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Cowboy Boot</h4>
                                <p class="ori-price">NT$‌33,700</p>
                                <p class="price">NT$33,699</p>
                            </div>
                            <a href="commodity-footwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity accessories">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/accessories.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>The 1983</h4>
                                <p class="ori-price">NT$‌10,800</p>
                                <p class="price">NT$10,799</p>
                            </div>
                            <a href="commodity-accessories" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity tops">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/tops.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Merino 3/4 Crew</h4>
                                <p class="ori-price">NT$29,900</p>
                                <p class="price">NT$29,899</p>
                            </div>
                            <a href="commodity-tops" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity bottoms">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/bottoms.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim 5 Pocket</h4>
                                <p class="ori-price">NT$‌28,200</p>
                                <p class="price">NT$28,199</p>
                            </div>
                            <a href="commodity-bottoms" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity suiting">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/suiting.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Twill Car Coat</h4>
                                <p class="ori-price">NT$‌94,000</p>
                                <p class="price">NT$93,999</p>
                            </div>
                            <a href="commodity-suiting" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity outerwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/outerwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim Jacket</h4>
                                <p class="ori-price">NT$‌41,200</p>
                                <p class="price">NT$41,199</p>
                            </div>
                            <a href="commodity-outerwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity footwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/footwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Cowboy Boot</h4>
                                <p class="ori-price">NT$‌33,700</p>
                                <p class="price">NT$33,699</p>
                            </div>
                            <a href="commodity-footwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity accessories">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/accessories.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>The 1983</h4>
                                <p class="ori-price">NT$‌10,800</p>
                                <p class="price">NT$10,799</p>
                            </div>
                            <a href="commodity-accessories" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity tops">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/tops.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Merino 3/4 Crew</h4>
                                <p class="ori-price">NT$29,900</p>
                                <p class="price">NT$29,899</p>
                            </div>
                            <a href="commodity-tops" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity bottoms">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/bottoms.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim 5 Pocket</h4>
                                <p class="ori-price">NT$‌28,200</p>
                                <p class="price">NT$28,199</p>
                            </div>
                            <a href="commodity-bottoms" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity suiting">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/suiting.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Twill Car Coat</h4>
                                <p class="ori-price">NT$‌94,000</p>
                                <p class="price">NT$93,999</p>
                            </div>
                            <a href="commodity-suiting" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity outerwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/outerwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Denim Jacket</h4>
                                <p class="ori-price">NT$‌41,200</p>
                                <p class="price">NT$41,199</p>
                            </div>
                            <a href="commodity-outerwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                    <div class="col commodity footwear">
                        <div class="item">
                            <div class="item-pic">
                                <img src="../assets/images/commodity/footwear.webp" alt="">
                            </div>
                            <div class="item-text">
                                <h4 class="title">FEAR OF GOD<br>Cowboy Boot</h4>
                                <p class="ori-price">NT$‌33,700</p>
                                <p class="price">NT$33,699</p>
                            </div>
                            <a href="commodity-footwear" class="item-btn">Buy</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <Footer />
    <BackToTop />
</template>

<script>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
    import BackToTop from "@/components/BackToTop.vue";
    import { onMounted } from 'vue';
    export default {
        components: {
            Header,
            Footer,
            BackToTop,
        },
        setup() {
            onMounted(() => {
                AOS.init();
                function commodity() {
                    const buttons = document.querySelectorAll(".select-button");
                    const cards = document.querySelectorAll(".commodity");
                    
                    function filter(category, items) {
                        items.forEach((item) => {
                            const isItemFiltered = !item.classList.contains(category);
                            const isShowAll = category.toLowerCase() === "all";
                            if (isItemFiltered && !isShowAll) {
                                item.classList.add("d-none");
                            } else {
                                item.classList.remove("d-none");
                            }
                        });
                    }
                    
                    buttons.forEach((button) => {
                        button.addEventListener("click", () => {
                            const currentCategory = button.dataset.filter;
                            console.log(currentCategory);
                            filter(currentCategory, cards);
                        });
                    });
                }
          
                commodity();
            })
        },

        // Option API
        // data() { return {}; },
        // mounted() {},
        // methods: {},
        // watch: {},
        // unmounted() {},
    };
</script>
