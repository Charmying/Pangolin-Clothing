<style scoped>

footer {
    width: 100%;
    padding: 0 0.75rem 2.5rem;
    background-color: #26273B;
}

footer section {
    max-width: 1200px;
    display: flex; 
    margin: auto;
}

.footer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 3rem 0;
}

.footer-menu {
    width: 60%;
    display: flex;
}

.footer-list {
    width: calc(100% / 3);
    text-align: center;
}

.footer-title {
    line-height: 3;
    font-size: 18px;
    font-weight: 900;
    color: #C4A87E;
    cursor: default;
    transition: all .5s ease;
}

.footer-title:hover {
    color: #FFFFFF;
}

.footer-downarrow {
    display: none;
}

.footer-underline {
    width: 120px;
    height: 1px;
    display: block;
    margin: 0.5rem auto 1rem;
    background-color: #C4A87E;
}

.footer-options li {
    line-height: 3.5;
}

.footer-options li a {
    font-size: 15px;
    font-weight: 700;
    color: #C4A87E;
    cursor: pointer;
    transition: all .5s ease;
}

.footer-options li a:hover {
    color: #FFFFFF;
}

.footer-content {
    width: 35%;
    align-self: center;
    margin-bottom: 3rem;
}

/* .footer-contents {
    margin-top: 0.5rem;
}
 */
.footer-logo img {
    width: 100%;
    /* margin-bottom: 1.5rem; */
}

.footer-contents p {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    color: #C4A87E;
    transition: all .5s ease;
}

.footer-contents p:hover {
    color: #FFFFFF;
}

.footer-contents-email {
    display: flex;
    justify-content: center;
    margin-top: 2.5rem;
}

.footer-contents-email input {
    margin-right: 1rem;
    padding: 0.25rem 0.75em;
    border-radius: 10px;
    color: #26273B;
    /* background-color: #C4A87E; */
    border: 3px #C4A87E solid;
}

.footer-contents-email input::placeholder {
    font-weight: 700;
    color: #26273B !important;;
}

.footer-email-btn {
    width: fit-content;
    font-size: 16px;
    font-weight: 700;
    display: block;
    text-align: center;
    align-self: center;
    margin-left: 1rem;
    padding: 0.4rem 1.2rem;
    border-radius: 10px;
    color: #26273B;
    background-color: #C4A87E;
    cursor: pointer;
    transition: all .5s ease;
}

.footer-email-btn:hover {
    color: #FFFFFF;
}

.footer-disclaimer {
    /* text-align: center; */
    width: 80%;
    max-width: 1920px;
    margin: auto;
    color: #C4A87E;
}

@media screen and (max-width: 991px) {
    .footer {
        width: 95%;
        display: block;
        margin: auto;
        padding: 3rem 0 1rem;
    }

    .footer-menu {
        width: 100%;
        display: block;
    }

    .footer-list {
        width: 100%;
        text-align: left;
        margin-bottom: 1.75rem;
        /* margin-top: 3rem; */
    }

    .footer-title {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        cursor: pointer;
    }

    .footer-downarrow {
        display: block;
        width: 30px;
        height: 15px;
        transition: all 1s ease;
    }

    .footer-underline {
        width: 0%;
        margin: 0 0 0.5rem;
        transition: all 1s ease;
    }

    .footer-list:hover .footer-underline {
        width: 100%;
    }

    .footer-options {
        max-height: 0;
        overflow: hidden;
        transition: all 1s ease 1s;
    }

    .footer-content {
        width: 100%;
        display: flex;
        align-items: center;
        margin-top: 2.5rem;
    }

    .footer-logo {
        width: 50%;
    }

    .footer-contents {
        width: 50%;
    }

}

@media screen and (max-width: 768px) {
    .footer-content {
        display: block;
    }

    .footer-logo {
        width: 70%;
        margin: auto;
    }

    .footer-contents {
        width: 100%;
        margin-top: 1.5rem;
    }

}

</style>

<template>
    <footer>
        <section>
            <div class="footer">
                <div class="footer-menu">

                    <div class="footer-list">
                        <div class="footer-title">
                            <p>SHOP</p>
                            <img src="../assets/images/downarrow.webp" alt="" class="footer-downarrow">
                        </div>
                        <span class="footer-underline"></span>
                        <ul class="footer-options">
                            <li><a href="NewArrivals">最新商品</a></li>
                            <li><a href="Commodity">精選商品</a></li>
                            <li><a href="OnSale">特價商品</a></li>
                            <li><a href="Co-Branding">聯名商品</a></li>
                        </ul>
                    </div>

                    <div class="footer-list">
                        <div class="footer-title">
                            <p>ABOUT US</p>
                            <img src="../assets/images/downarrow.webp" alt="" class="footer-downarrow">
                        </div>
                        <span class="footer-underline"></span>
                        <ul class="footer-options">
                            <li><a href="AboutUs">品牌故事</a></li>
                            <li><a href="Shop">實體通路</a></li>
                            <li><a href="Recruit">人才招募</a></li>
                            <li><a href="ContactUs">聯絡我們</a></li>
                        </ul>
                    </div>

                    <div class="footer-list">
                        <div class="footer-title">
                            <p>CUSTOMER</p>
                            <img src="../assets/images/downarrow.webp" alt="" class="footer-downarrow">
                        </div>
                        <span class="footer-underline"></span>
                        <ul class="footer-options">
                            <li><a href="News">最新消息</a></li>
                            <li><a href="ReturnExchange">退換貨聲明</a></li>
                            <li><a href="Delivery">運送服務方式</a></li>
                            <li><a href="Privacy">隱私權保護聲明</a></li>
                        </ul>
                    </div>

                </div>
                <div class="footer-content">

                    <div class="footer-logo">
                        <img src="../assets/images/logo/logo.webp" alt="">
                    </div>

                    <div class="footer-contents">
                        <p>訂閱我們獲得最新消息</p>
                        <div class="footer-contents-email">
                            <input type="email" placeholder="請輸入你的Email">
                            <div class="footer-email-btn">SEND</div>
                        </div>
                    </div>
                </div>

            </div>


        </section>
        <p class="footer-disclaimer">本網站為緯育TibaMe_前端設計工程師班學員專題成果作品，本平台僅供學習、展示之用。 若有侵權疑慮，您可以私訊「TibaMe-前端設計工程師養成班」，後續會由專人協助處理。 COPYRIGHT © 2022 PARTYME Co.,Ltd. All rights reserved.</p>
    </footer>
</template>

<script>
    import { onMounted } from 'vue';
    export default {
        setup() {
            onMounted(() => {
                let footerTitle = document.getElementsByClassName("footer-title");

                for(let i = 0; i < footerTitle.length; i++){
                    let footerOptions = document.getElementsByClassName("footer-options");
                    let footerDownarrow = document.getElementsByClassName("footer-downarrow");
                    footerTitle[i].addEventListener("click", function(){
                    
                        if(footerOptions[i].style.maxHeight == ""){
                            footerOptions[i].style.maxHeight = footerOptions[i].scrollHeight + "px"; // 設定 CSS：max-height
                            // footerDownarrow[i].style.transform = "rotate(180deg)";
                            footerDownarrow[i].style.transform = "rotate(1980deg)";
                        }else{
                            footerOptions[i].style.maxHeight = ""; // 移除 CSS： max-height
                            footerDownarrow[i].style.transform = "rotate(0deg)";
                        }
                    });
                }
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