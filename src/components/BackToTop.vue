<style scoped>

.back-to-top {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;   
    align-items: center;   
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 9999;
    border-radius: 50%;
    background-color: #26273B;
    cursor: pointer;
    transform: translateY(0%);
    transition: all 0.5s linear;
}

.back-to-top:hover {
    box-shadow: 0 0 15px #C4A87E;
}

.back-to-top.hide {
    opacity: 0;
    transform: translateY(150%);
}

.back-to-top img {
    width: 35px;
        height: 30px;
}

</style>

<template>
    <section>
        <div class="back-to-top hide" @click="BackToTop">
            <img src="../assets/images/uparrow.webp" alt="back-to-top">
        </div>
    </section>
</template>

<script>
    import { onMounted } from 'vue';
    export default {
        setup() {
            onMounted(() => {
                $(document).ready(function () {
                    // 捲軸偵測距離頂部超過 0 才顯示按鈕
                    $(window).scroll(function () {
                        if ($(window).scrollTop() > 0) {
                            if ($(".back-to-top").hasClass("hide")) {
                                $(".back-to-top").toggleClass("hide");
                            }
                        } else {
                            $(".back-to-top").addClass("hide");
                        }
                    });
              
                    // 點擊按鈕回頂部
                    $(".back-to-top").on("click", function (event) {
                        $("html, body").animate(
                            {
                                scrollTop: 0
                            },
                            10 // 回頂部時間為 10 毫秒
                        );
                    });
                });
            })

            // option api methods
            const BackToTop = () => {
                window.scrollTo({ 
                       top: 0, 
                       behavior: "smooth" 
                });
            }
            
            return { BackToTop };
        },

        // Option API
        // data() { return {}; },
        // mounted() {},
        // methods: {},
        // watch: {},
        // unmounted() {},
    };
</script>