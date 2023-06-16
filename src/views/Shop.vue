<style scoped>
    @import "../assets/css/about.css";
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
                    <span>關於我們</span><br>
                    <span>About Us</span>
                </h2>
            </div>
        </section>
        <!-- section 2 -->
        <section>
            <h3>實體通路</h3>
        </section>
        <!-- section 3 -->
        <section>
            <div class="location">
                <div class="location-img" data-aos="fade-up" data-aos-duration="1000">
                    <img src="../assets/images/about/shop.webp" alt="">
                </div>
                <div class="location-content">
                    <div class="location-title" data-aos="fade-up" data-aos-duration="1000">北極總店</div>
                    <div class="location-text" data-aos="fade-up" data-aos-duration="1000">
                        <p>地址：北極</p>
                        <p>電話：01-23456789</p>
                        <p>Email：abc@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="location">
                <div class="location-img" data-aos="fade-up" data-aos-duration="1000">
                    <img src="../assets/images/about/shop.webp" alt="">
                </div>
                <div class="location-content">
                    <div class="location-title" data-aos="fade-up" data-aos-duration="1000">北極總店</div>
                    <div class="location-text" data-aos="fade-up" data-aos-duration="1000">
                        <p>地址：北極</p>
                        <p>電話：01-23456789</p>
                        <p>Email：abc@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="location">
                <div class="location-img" data-aos="fade-up" data-aos-duration="1000">
                    <img src="../assets/images/about/shop.webp" alt="">
                </div>
                <div class="location-content">
                    <div class="location-title" data-aos="fade-up" data-aos-duration="1000">北極總店</div>
                    <div class="location-text" data-aos="fade-up" data-aos-duration="1000">
                        <p>地址：北極</p>
                        <p>電話：01-23456789</p>
                        <p>Email：abc@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="location">
                <div class="location-img" data-aos="fade-up" data-aos-duration="1000">
                    <img src="../assets/images/about/shop.webp" alt="">
                </div>
                <div class="location-content">
                    <div class="location-title" data-aos="fade-up" data-aos-duration="1000">北極總店</div>
                    <div class="location-text" data-aos="fade-up" data-aos-duration="1000">
                        <p>地址：北極</p>
                        <p>電話：01-23456789</p>
                        <p>Email：abc@gmail.com</p>
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
