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
            <div class="about-content"></div>
            <h3>品牌故事</h3>
        </section>
        <!-- section 3 -->
        <section>
            <div class="about-us">
                <!-- data-aos="zoom-in" data-aos-duration="1500" -->
                <div class="about-us-text">
                    <!-- <p>
                        2010年、ライフスタイルブランドの HUMAN MADE は “The Future Is In The Past” のコンセプトのもとにNIGO® によって東京でスタートしました。
                        <br>
                        その時代の空気感を映し出す多種多様なスタイルとヴィンテージアイテムの数々。そして途切れることのないカルチャーの流れのなかで世界中のストリートに息づく大胆な発想。それらに日本の妥協なきモノづくり精神と東京らしい遊び心を織り交ぜ、さまざまなアイテムを世界へと発信しています。
                        <br>
                        HUMAN MADE のビジョンは、世界中に脈打つ創造性とアイデアの拠点となること。あらゆるカルチャーと世界中のクリエイターにとって、そして未来を担う若者たちにとっての理想郷となることです。
                    </p> -->
                    <p></p>
                    <p>{{ text }}</p>
                </div>
                <!-- <div class="about-us-text">
                    <p>
                        Launched by NIGO® in 2010, Human Made is a Tokyo-based lifestyle brand with the concept of “the future is in the past”.
                        <br>
                        Human Made draws inspiration from a diverse mix of styles and vintage items, which embody the atmosphere of times past, while exploring bold ideas that stand out amid the constant stream of street culture. Interweaving these elements with Japan’s uncompromising approach to craftsmanship and the playful spirit of Tokyo, Human Made creates a wide range of items for a global audience.
                        <br>
                        Human Made aspires to be a focal point for the culture, creativity and ideas that power the world.
                    </p>
                </div> -->
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
    import { ref, onMounted } from 'vue';
    export default {
        components: {
            Header,
            Footer,
            BackToTop,
        },
        setup() {
            const text = ref("");

            const showText = () => {
                const originalText = "2010年、ライフスタイルブランドの HUMAN MADE は “The Future Is In The Past” のコンセプトのもとにNIGO® によって東京でスタートしました。その時代の空気感を映し出す多種多様なスタイルとヴィンテージアイテムの数々。そして途切れることのないカルチャーの流れのなかで世界中のストリートに息づく大胆な発想。それらに日本の妥協なきモノづくり精神と東京らしい遊び心を織り交ぜ、さまざまなアイテムを世界へと発信しています。HUMAN MADE のビジョンは、世界中に脈打つ創造性とアイデアの拠点となること。あらゆるカルチャーと世界中のクリエイターにとって、そして未来を担う若者たちにとっての理想郷となることです";
                let index = 0;
                const intervalId = setInterval(() => {
                    text.value += originalText[index];
                    index++;
                    if (index === originalText.length) {
                        clearInterval(intervalId);
                    }
                }, 10) // 控制每個字出現的時間間隔，單位為毫秒
            }
        
            onMounted(() => {
                AOS.init();
                showText();
            })
        
            return {
                text,
                showText,
            }
        }

        // Option API
        // data() { return {}; },
        // mounted() {},
        // methods: {},
        // watch: {},
        // unmounted() {},

    };
</script>
