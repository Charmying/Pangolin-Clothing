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
                    <span>退換貨聲明</span><br>
                    <span>RETURN & EXCHANGE</span>
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
                    本網站大部份商品皆為限量與海外特別進口，所以一旦支付成功，除產品本身問題，我們不接受任何形式退換貨，如有問題，請在結賬時考慮清楚並詢問客服。
                    <br>
                    商品同步於實體門市販售，庫存或無法同步即時更新，下標前可先詢問庫存，如遇缺貨本網站會先為您取消訂單，請留意電子郵件的訂單狀態及簡訊。
                    <br>
                    如果在收貨時發現貨品有損壞，請在3日內通知客服。我們將很樂意幫助您退貨或者換貨（如果仍有庫存）。請在退回包裹內寫明您的訂單號碼以及退換原因。
                    <br>
                    恕不接受以下情形退換貨-
                    <br>
                    一．生產過程中難免有線頭或是溢膠等狀況發生，商品可販售則表示已通過製造商之合格檢驗，輕微的皺折、溢膠、鞋頭不對稱皆屬正常狀況，不接受以此原因退換貨。
                    <br>
                    二．當您欲退貨時，依民法規定，您與本店應互負交易解除回復原狀之責，因此:
                    <br>
                    ★請您保持商品全新狀態，並請確保相關配件發票均需檢附退回，可自行郵寄至本店收貨地址。
                    <br>
                    ★若商品發生因不當使用、拆卸等人為因素所致之故障、損毀、磨損、擦傷、刮傷、髒污、包裝破損不完整、原廠外盒損毀或式商品缺件之情況(勿直接以商品原廠外盒黏貼宅配單或書寫文字)，將無法受理退換貨。
                    <br>
                    三．本商店不接受個人心理因素要求退換貨。
                    <br>
                    四．賣場上所有白色內裡的鞋子及白色衣服均不接受更換款式、SIZE及退貨，購買前請買家注意。
                    <br>
                    五．商品圖會盡量以商品原色呈現，但照片顏色因螢幕設定或許會有些許誤差，商品實際顏色為基準，不接受以此原因退換貨。
                    <br>
                    如果您收到的商品尺寸與訂單中顯示的尺寸不符，也請在3日內通知客服（電郵onlinetw@clotinc.com)。我們將在仍有庫存的情況下盡可能協助您換貨。請在退回包裹內寫明您的訂單號碼以及退換原因。
                    <br>
                    如尺寸不合換貨需由客人自行負擔來回運費，更換後無法再次換貨。
                    <br>
                    請在與我們的客服確認退換貨後再發出你的退換包裹，否則將無人接收。
                    <br>
                    退換貨地址為：
                    <br>
                    JUICE TAIPEI
                    <br>
                    台北市大安區敦化南路一段161巷38號1樓
                    <br>
                    收件人：ONLINE JUICE 
                    <br>
                    聯繫電話（非客服電話）： (02)2751-3227
                    <br>
                    *請注意，所有退換貨需經由網站客服，實體門市均不接收網上訂單的退換。
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
