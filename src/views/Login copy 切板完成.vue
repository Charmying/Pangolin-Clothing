<style scoped>
    @import "../assets/css/login.css";

    /* 壓掉 style.css 的 main section  */
    main section {
        margin-bottom: 4rem;
    }
</style>

// h1 d-none 
// banner 用掉 h2

<template>
    <Header />
    <main>
        <!-- section 1 -->
        <section class="banner">
            <div class="banner-image"></div>
            <div class="banner-content">
                <h2>
                    <span>會員登入</span><br>
                    <span>Login</span>
                </h2>
            </div>
        </section>
        <!-- section 2 -->
        <section>
            <h3>登入 / 註冊</h3>
        </section>
        <!-- section 3 -->
        <section>
            <div class="list">
                <button @click="loginBtn" class="login-btn" :class="{ 'login-btn-click': loginBtnBoolean }">登入會員</button>
                <br>
                <button @click="registerBtn" class="register-btn" :class="{ 'register-btn-click': registerBtnBoolean }">註冊會員</button>
                <button @click="forgetBtn" class="forget-btn" :class="{ 'forget-btn-click': forgetBtnBoolean }">忘記密碼</button>
            </div>
        </section>
        <!-- section 4 -->
        <section>
            <form class="login-form" action="#" method="post">
                <h3 class="login-title" data-aos="fade-up" data-aos-duration="1000">登入會員</h3>
                <div class="login-block">
                    <div class="login-content">
                        <div class="login-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="loginEmail">信箱：</label>
                            <input type="email" id="loginEmail" placeholder="請輸入你的信箱">
                        </div>
                        <div class="login-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="loginPassword">密碼：</label>
                            <input type="password" id="loginPassword" placeholder="請輸入你的信箱">
                        </div>
                    </div>

                </div>
                <div class="login-send">
                    <button type="submit" data-aos="flip-up" data-aos-duration="1000">SEND</button>
                </div>
            </form>
            <form class="register-form" action="#" method="post">
                <h3 class="register-title" data-aos="fade-up" data-aos-duration="1000">註冊會員</h3>
                <div class="register-block">
                    <div class="register-content">
                        <div class="register-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="registerName">姓名：</label>
                            <input type="text" id="registerName" placeholder="請輸入你的姓名">
                        </div>
                        <div class="register-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="registerPhone">電話：</label>
                            <input type="text" id="registerPhone" placeholder="請輸入你的電話">
                        </div>
                        <div class="register-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="registerEmail">信箱：</label>
                            <input type="email" id="registerEmail" placeholder="請輸入你的信箱">
                        </div>
                        <div class="register-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="registerPassword">密碼：</label>
                            <input type="password" id="registerPassword" placeholder="請輸入你的密碼">
                        </div>
                        <div class="register-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="registerConfirmPassword">密碼：</label>
                            <input type="password" id="registerConfirmPassword" placeholder="請輸入你的密碼">
                        </div>

                        <!-- <label class="register-terms"><input type="checkbox">我已詳閱使用者服務條款</label> -->
                    </div>

                </div>
                <div class="register-send">
                    <button type="submit" data-aos="flip-up" data-aos-duration="1000">SEND</button>
                </div>
            </form>
            <form class="forget-password-form" action="#" method="post">
                <h3 class="forget-password-title" data-aos="fade-up" data-aos-duration="1000">忘記密碼</h3>
                <div class="forget-password-block">
                    <div class="forget-password-content">
                        <div class="forget-password-detail" data-aos="fade-up" data-aos-duration="1000">
                            <label for="forgetPasswordEmail">信箱：</label>
                            <input type="email" id="forgetPasswordEmail" placeholder="請輸入你的信箱">
                        </div>
                    </div>
                </div>
                <div class="forget-password-send">
                    <button type="submit" data-aos="flip-up" data-aos-duration="1000">SEND</button>
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
    import { ref, onMounted } from 'vue'
    export default {
        components: {
            Header,
            Footer,
            BackToTop,
        },
        setup() {

            // ========================================   click 事件 畫面   ======================================== //
            const loginBtnBoolean = ref(true);
            const registerBtnBoolean = ref(false);
            const forgetBtnBoolean = ref(false);

            function ButtonClick() {
                loginBtnBoolean.value = false;
                registerBtnBoolean.value = false;
                forgetBtnBoolean.value = false;
            }

            function FormDisplay() {
                document.querySelector(".login-form").classList.add("login-display");
                document.querySelector(".register-form").classList.add("register-display");
                document.querySelector(".forget-password-form").classList.add("forget-password-display");
            }

            function FormOpacity() {
                document.querySelector(".login-form").classList.remove("login-click");
                document.querySelector(".register-form").classList.remove("register-click");
                document.querySelector(".forget-password-form").classList.remove("forget-password-click");
            }

            function loginBtn() {
                ButtonClick();
                loginBtnBoolean.value = true;
                FormDisplay();
                FormOpacity();
                document.querySelector(".login-form").classList.add("login-click");
                // console.log(loginBtnBoolean.value);
            }

            function registerBtn() {
                ButtonClick();
                registerBtnBoolean.value = true;
                FormDisplay();
                FormOpacity();
                document.querySelector(".register-form").classList.add("register-click");
            }

            function forgetBtn() {
                ButtonClick();
                forgetBtnBoolean.value = true;
                FormDisplay();   // 不知道為什麼可以拿掉
                FormOpacity();
                document.querySelector(".forget-password-form").classList.add("forget-password-click");
            }


            onMounted(() => {
                AOS.init();
            })


            return {
                loginBtnBoolean,
                registerBtnBoolean,
                forgetBtnBoolean,
                ButtonClick,
                FormDisplay,
                FormOpacity,
                loginBtn,
                registerBtn,
                forgetBtn
            };



            // ========================================   click 事件 功能   ======================================== //

            // return {};

        },

        // Option API
        // data() {
        //     return {};
        // },
        // mounted() {},
        // methods: {},
        // watch: {},
        // unmounted() {},
    };
</script>
