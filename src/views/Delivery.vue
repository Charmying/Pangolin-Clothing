<style scoped>
    @import "../assets/css/customer.css";
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
                    <span>運送服務</span><br>
                    <span>Delivery</span>
                </h2>
            </div>
        </section>
        <!-- section 2 -->
        <section>
            <h3>最新消息</h3>
        </section>
        <!-- section 3 -->
        <section>
            <div class="customer">
                <h4>適用範圍</h4>
                <p>
                    宅配通送貨到府-
                    <br>
                    完成付款後三日內(不含國定假日與六日)會儘速使用宅配通寄送的方式寄出，若超過3個工作天尚末收到商品，請E-MAIL與客服連繫。 ※請留意：台灣本島運費為150元、離島地區為200元。
                    <br>
                    全家店到店取貨-
                    <br>
                    當您在網站購買商品時，可利用全家門市取貨的服務，完成訂單後三日內(不含國定假日與六日)會寄出，將訂購的商品送至您所指定的全家門市。 
                    <br>
                    ※請留意：超商取貨有材積限制(長＋寬＋高＜105公分)，如訂購商品超出材積請選擇宅配。
                    <br>
                    <br>
                    <br>
                    訂購與配送：完成訂購流程後，商品將依訂單順序於2-3個工作天內出貨，到貨日依指定物流配送時間而定。出貨天數的工作天，不包含週末及例假假日。若遇缺貨、瑕疵等商品狀況，會以電話或 email 聯繫。
                    <br>
                    週末與國定假日訂購及配送：出貨工作日為週一至週五，週末不出貨，訂單會於週一安排出貨。如遇國定假日，則會順延至正常上班日依序出貨。
                    <br>
                    物流配送天數預估：宅配(本島2-3工作天)。
                    <br>
                    如本店無法接受您的訂單，將於收到您的訂單後2個工作日內通知您。本店保留最後決定權。
                    <br>
                    台灣本島偏遠地區與離島暫無宅配服務。
                    <br>
                    暫無海外地區配送。
                </p>
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
    // import { onMounted } from 'vue';
    export default {
        components: {
            Header,
            Footer,
            BackToTop,
        },
        setup() {

        },

        // Option API
        // data() { return {}; },
        // mounted() {},
        // methods: {},
        // watch: {},
        // unmounted() {},
    };
</script>
