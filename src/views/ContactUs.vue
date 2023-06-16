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
            <h3>聯絡我們</h3>
        </section>
        <!-- section 3 -->
        <section>
            <form class="contact-form" action="#" method="post">
                <div class="contact-form-block">
                    <div class="contact-form-content">
                        <div class="contact-form-content-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="name">名字：</label>
                            <input type="text" id="name" placeholder="請輸入你的名字">
                        </div>
                        <div class="contact-form-content-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="email">信箱：</label>
                            <input type="email" id="email" placeholder="請輸入你的信箱">
                        </div>
                        <div class="contact-form-content-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="phone">電話：</label>
                            <input type="tel" id="phone" placeholder="請輸入你的電話" maxlength="10">
                        </div>
                    </div>
                    <div class="contact-form-textarea" data-aos="fade-up" data-aos-duration="1000">
                        <label for="commemts">Comments：</label>
                        <textarea name="comments" id="commemts" rows="5" cols="20" placeholder="請輸入你的留言"></textarea>
                    </div>
                </div>
                <div class="contact-form-send">
                    <button type="submit" data-aos="fade-right" data-aos-duration="1000">SEND</button>
                </div>
            </form>
        </section>
    </main>
    <Footer />
    <BackToTop />
</template>

<script>
    import Header from "@/components/Header.vue";
    import Footer from "@/components/Footer.vue";
    import BackToTop from "@/components/BackToTop.vue";
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
