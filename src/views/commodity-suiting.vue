<style scoped>
    /* style.css */
    @import "../assets/css/commodity-detail.css";
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
                    <span>FEAR OF GOD</span><br>
                    <span>Twill Car Coat</span>
                </h2>
            </div>
        </section>
        <!-- section 2 -->
        <section></section>


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
        setup() {},

        // Option API
        // data() { return {}; },
        // mounted() {},
        // methods: {},
        // watch: {},
        // unmounted() {},
    };
</script>
