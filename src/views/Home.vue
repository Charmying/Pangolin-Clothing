<style scoped>
    @import "../assets/css/home.css";
</style>

// h1 d-none

<template>
    <h1 class="d-none">Title</h1>
    <Header />
    <main>
        <!-- section 1 -->
        <section class="banner-carousel">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="2000">
                        <a href="/">
                            <img class="d-block w-100" src="../assets/images/banner/home-banner-1.webp">
                        </a>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <a href="/">
                            <img class="d-block w-100" src="../assets/images/banner/home-banner-1.webp">
                        </a>
                    </div>
                    <div class="carousel-item" data-bs-interval="2000">
                        <a href="/">
                            <img class="d-block w-100" src="../assets/images/banner/home-banner-1.webp">
                        </a>
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </section>
        <!-- section 2 -->
        <section>
            <nav class="select-btn">
                <ul>
                    <li><a href="#section-3">最新商品</a></li>
                    <li><a href="#section-4">特價商品</a></li>
                    <li><a href="#section-5">聯名商品</a></li>
                    <!-- <li><a href="#section-6">精選商品</a></li> -->
                    <li><a href="#section-7">最新消息</a></li>
                    <li><a href="#section-8">關於我們</a></li>
                </ul>
            </nav>
        </section>
        <!-- section 3 -->
        <section id="section-3">
            <div class="tri" id="tri">
                <div class="tri-carousel" data-aos="zoom-in" data-aos-duration="1000">
                    <input class="tri-btn" id="tri-item-1" type="radio" name="slider" checked>
                    <input class="tri-btn" id="tri-item-2" type="radio" name="slider">
                    <input class="tri-btn" id="tri-item-3" type="radio" name="slider">
                    <div class="tri-images">
                        <label class="tri-image tri-image1" for="tri-item-1">
                            <img src="../assets/images/new-arrivals/new-arrivals-3.webp" alt="">
                            <p>Merino 3/4 Crew</p>
                        </label>
                        <label class="tri-image tri-image2" for="tri-item-2">
                            <img src="../assets/images/new-arrivals/new-arrivals-2.webp" alt="">
                            <p>Viscose Tricot Crewneck</p>
                        </label>
                        <label class="tri-image tri-image3" for="tri-item-3">
                            <img src="../assets/images/new-arrivals/new-arrivals-1.webp" alt="">
                            <p>Viscose Tricot Track Jacket</p>
                        </label>
                    </div>
                </div>
                <div class="tri-text" data-aos="zoom-in" data-aos-duration="1000">
                    <h2>最新到貨</h2>
                    <p>
                        <!-- PANGOLIN<br> -->
                        夏季新品<br>
                        全館下殺1元起<br>
                    </p>
                
                </div>
            </div>
            <div class="tri-btn" data-aos="flip-up" data-aos-duration="1000">
                <a href="NewArrivals">button</a>
            </div>
        </section>
        <!-- section 4 -->
        <section id="section-4">
            <h2>特價商品</h2>
            <div class="item-block">
                <div class="item">
                    <div class="item-image" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../assets/images/onsale/onsale-4.webp" alt="...">
                    </div>
                    <div class="item-body">
                        <p class="item-title">【CLOT】<br>LEOPARD ARMY JACKET</p>
                        <p class="item-text-ori">NT$12,980</p>
                        <p class="item-text">NT$9,086</p>
                    </div>
                    <a href="#" class="item-btn" data-aos="flip-up" data-aos-duration="1000">GOGOGO</a>
                </div>
                <div class="item">
                    <div class="item-image" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../assets/images/onsale/onsale-3.webp" alt="...">
                    </div>
                    <div class="item-body">
                        <p class="item-title">【CLOT】<br>CHINESE ZIP UP HOODIE</p>
                        <p class="item-text-ori">NT$5,680</p>
                        <p class="item-text">NT$2,840</p>
                    </div>
                    <a href="#" class="item-btn" data-aos="flip-up" data-aos-duration="1000">GOGOGO</a>
                </div>
                <div class="item">
                    <div class="item-image" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../assets/images/onsale/onsale-2.webp" alt="...">
                    </div>
                    <div class="item-body">
                        <p class="item-title">【CLOT】<br>CHINESE CREW NECK</p>
                        <p class="item-text-ori">NT$4,680</p>
                        <p class="item-text">NT$2,340</p>
                    </div>
                    <a href="#" class="item-btn" data-aos="flip-up" data-aos-duration="1000">GOGOGO</a>
                </div>
                <div class="item">
                    <div class="item-image" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../assets/images/onsale/onsale-1.webp" alt="...">
                    </div>
                    <div class="item-body">
                        <p class="item-title">【CLOT】<br>LOOSE CARROT PANTS</p>
                        <p class="item-text-ori">NT$5,680</p>
                        <p class="item-text">NT$2,840</p>
                    </div>
                    <a href="#" class="item-btn" data-aos="flip-up" data-aos-duration="1000">GOGOGO</a>
                </div>
                <div class="item-more" data-aos="fade-right" data-aos-duration="1000">
                    <a href="OnSale">更多優惠→</a>
                </div>
            </div>
        </section>
        <!-- section 5 -->
        <section id="section-5">
            <h2>聯名商品</h2>
            <div class="item-block">
                <div class="item">
                    <div class="item-image" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../assets/images/co-branding/co-branding-4.webp" alt="...">
                    </div>
                    <div class="item-body">
                        <p class="item-title">【CLOT】<br>LEOPARD ARMY JACKET</p>
                        <!-- <p class="item-text-ori">NT$12,980</p>
                        <p class="item-text">NT$9,086</p> -->
                    </div>
                    <a href="#" class="item-btn" data-aos="flip-up" data-aos-duration="1000">查看更多</a>
                </div>
                <div class="item">
                    <div class="item-image" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../assets/images/co-branding/co-branding-3.webp" alt="...">
                    </div>
                    <div class="item-body">
                        <p class="item-title">【CLOT】<br>CHINESE ZIP UP HOODIE</p>
                        <!-- <p class="item-text-ori">NT$5,680</p>
                        <p class="item-text">NT$2,840</p> -->
                    </div>
                    <a href="#" class="item-btn" data-aos="flip-up" data-aos-duration="1000">查看更多</a>
                </div>
                <div class="item">
                    <div class="item-image" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../assets/images/co-branding/co-branding-2.webp" alt="...">
                    </div>
                    <div class="item-body">
                        <p class="item-title">【CLOT】<br>CHINESE CREW NECK</p>
                        <!-- <p class="item-text-ori">NT$4,680</p>
                        <p class="item-text">NT$2,340</p> -->
                    </div>
                    <a href="#" class="item-btn" data-aos="flip-up" data-aos-duration="1000">查看更多</a>
                </div>
                <div class="item">
                    <div class="item-image" data-aos="zoom-in" data-aos-duration="1000">
                        <img src="../assets/images/co-branding/co-branding-1.webp" alt="...">
                    </div>
                    <div class="item-body">
                        <p class="item-title">【CLOT】<br>LOOSE CARROT PANTS</p>
                        <!-- <p class="item-text-ori">NT$5,680</p>
                        <p class="item-text">NT$2,840</p> -->
                    </div>
                    <a href="#" class="item-btn" data-aos="flip-up" data-aos-duration="1000">查看更多</a>
                </div>
                <div class="item-more" data-aos="fade-right" data-aos-duration="1000">
                    <a href="Co-Branding">更多優惠→</a>
                </div>
            </div>
        </section>
        <!-- section 6 -->
        <!-- <section id="section-6">
            <h2>精選商品</h2>
            <div class="allItem">
                <a href="#" class="allItem-block">
                    <div class="allItem-text">
                        <div class="allItem-title" data-aos="flip-down" data-aos-duration="1000">
                            <h3>衣服</h3>
                        </div>
                    </div>
                    <div class="allItem-image" data-aos="zoom-in" data-aos-duration="1000">
                        <a href="#">
                            <img src="../assets/images/home/commodity-6.webp" alt="">
                        </a>
                    </div>
                </a>
                <a href="#" class="allItem-block">
                    <div class="allItem-text">
                        <div class="allItem-title" data-aos="flip-down" data-aos-duration="1000">
                            <h3>下裝</h3>
                        </div>
                    </div>
                    <div class="allItem-image" data-aos="zoom-in" data-aos-duration="1000">
                        <a href="#">
                            <img src="../assets/images/home/commodity-5.webp" alt="">
                        </a>
                    </div>
                </a>
                <a href="#" class="allItem-block">
                    <div class="allItem-text">
                        <div class="allItem-title" data-aos="flip-down" data-aos-duration="1000">
                            <h3>西裝</h3>
                        </div>
                    </div>
                    <div class="allItem-image" data-aos="zoom-in" data-aos-duration="1000">
                        <a href="#">
                            <img src="../assets/images/home/commodity-4.webp" alt="">
                        </a>
                    </div>
                </a>
                <a href="#" class="allItem-block">
                    <div class="allItem-text">
                        <div class="allItem-title" data-aos="flip-down" data-aos-duration="1000">
                            <h3>外套</h3>
                        </div>
                    </div>
                    <div class="allItem-image" data-aos="zoom-in" data-aos-duration="1000">
                        <a href="#">
                            <img src="../assets/images/home/commodity-3.webp" alt="">
                        </a>
                    </div>
                </a>
                <a href="#" class="allItem-block">
                    <div class="allItem-text">
                        <div class="allItem-title" data-aos="flip-down" data-aos-duration="1000">
                            <h3>鞋子</h3>
                        </div>
                    </div>
                    <div class="allItem-image" data-aos="zoom-in" data-aos-duration="1000">
                        <a href="#">
                            <img src="../assets/images/home/commodity-2.webp" alt="">
                        </a>
                    </div>
                </a>
                <a href="#" class="allItem-block">
                    <div class="allItem-text">
                        <div class="allItem-title" data-aos="flip-down" data-aos-duration="1000">
                            <h3>配件</h3>
                        </div>
                    </div>
                    <div class="allItem-image" data-aos="zoom-in" data-aos-duration="1000">
                        <a href="#">
                            <img src="../assets/images/home/commodity-1.webp" alt="">
                        </a>
                    </div>
                </a>
            </div>
        </section> -->
        <!-- section 7 -->
        <section id="section-7">
            <h2>最新消息</h2>
            <div class="news">
                <div class="news-block">
                    <div class="news-content">
                        <div class="news-image" data-aos="fade-down" data-aos-duration="1000">
                            <a href="#">
                                <img src="../assets/images/news/news-4.webp" alt="">
                            </a>
                        </div>
                        <a href="#">
                            <div class="news-text" data-aos="fade-up" data-aos-duration="1000">
                                <h3>龍迷照過來！衣服、鞋子樣樣有！那些年我們一起追的 G-Dragon 聯名商品</h3>
                                <p>
                                    PEACEMINUSONE 與 Nike 的最新聯乘系列，將於本週正式開賣，該系列除了有黑白配色的 Kwondo1，還推出 3 款服飾單品，相信不少 GD 粉們早已摩拳擦掌，準備大肆搶購一番。今天就來幫大家回顧，G-Dragon 過往還曾推出哪些讓人瘋搶的「現象級」潮流商品。
                                    <br>
                                    PEACEMINUSONE x Nike Air Force 1「Para-Noise 2.0」在 2020 年年底時發售，鞋身以白色呈現，外層會隨著使用者的穿著習慣而掉漆，漸漸顯露出隱藏在其後的 GD 塗鴉，是該鞋的最大亮點。鞋舌上的小雛菊，讓人一眼就看出該鞋的特殊身分；值得一提的是，該鞋附贈的黑白鞋帶還有專屬繫法，供不同使用者自行選擇。整雙鞋不僅兼具設計巧思、饒富藝術氛圍，還會因為使用方式的不同，而有各自的樣貌，與其說是球鞋，倒不如說是一樣藝術品。
                                    <br>
                                    PEACEMINUSONE x Nike Kwondo 1 於 2021 年年底問世，全白的配色讓其擁有貴族般的高雅，但在華麗的外表下，其實隱藏著「多元融合」的意涵。該鞋的命名方式，是由跆拳道、GD 本名、加上 Nike 標語「Just Do It」組成；該鞋的設計則是參考牛津鞋、足球鞋、高爾夫球鞋、滑板鞋、保齡球鞋等，集各類鞋型特色於一身，這個看似充滿衝突的概念，在 GD 的巧手下融合得恰如其分，還能傳遞創作理念，讓球鞋不再是雙球鞋，而是有意義的收藏品。
                                    <br>
                                    藤原浩和 G-Dragon 的 3 方聯乘在 2020 年年中登場，合作伙伴之一的 THE CONVENI 同樣也是由藤原浩發想、以便利商店為主題的概念店，主要販售一系列以日常用品為包裝的潮流商品。這樣強強聯手所推出的商品，設計上自然是簡單暴力，除了有 PEACEMINUSONE 標誌性的文件夾外，還有印上 3 大品牌 Logo 的黑白雙色短、長 T，各樣商品都十分具有收藏價值，與其穿在路上帥，不如放在家中當擺設，還更有紀念性。
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="news-block">
                    <div class="news-content">
                        <div class="news-image" data-aos="fade-down" data-aos-duration="1000">
                            <a href="#">
                                <img src="../assets/images/news/news-3.webp" alt="">
                            </a>
                        </div>
                        <a href="#">
                            <div class="news-text" data-aos="fade-up" data-aos-duration="1000">
                                <h3>小鱷魚結合 Demogorgon 太狂！ LACOSTE x NETFLIX 聯名系列登場，《怪奇物語》、《性愛自修室》…都來了！</h3>
                                <p>
                                    當時尚出現在人氣熱播劇中，新的潮流風潮往往就此掀開，點燃劇粉的熱情。近日，法國高端運動時尚品牌 LACOSTE 驚喜宣布，將與當下火熱的串流平台 NETFLIX（網飛）攜手打造創意聯名系列，並致敬一系列網飛人氣劇集。
                                    <br>
                                    文化是世界溝通的橋樑，LACOSTE和NETFLIX藉由本次創新的合作，運用著名影集的元素創造全新的時尚設計系列，基於雙方品牌共同追求創意的信念，旨在與不同文化、年齡、擁有不同興趣的人們進行對話，讓多元文化交匯出精彩的火花。LACOSTE和NETFLIX精選《怪奇物語（Stranger Things）》,《性愛自修室（Sex  Education）》,《柏捷頓家族：名門韻事（Bridgerton）》,《亞森·羅蘋（Lupin）》等八部熱門劇集作為設計靈感來源，並將這些劇集的元素注入LACOSTE的經典服飾設計中。無論你是喜愛冒險、浪漫愛情故事、青春校園劇還是科幻電視劇的影迷，這個全新的聯名系列都將帶給粉絲們一場全新的時尚視覺盛宴，找到共鳴，建立同盟。
                                    <br>
                                    LACOSTE品牌全球副總裁Catherine Spindler表示:「我們非常高興能與NETFLIX（網飛）合作，這是時尚潮流和影視行業的一次奇妙碰撞，也是兩個引領各自創新領域的國際品牌間的交匯與融合。我們雙方都具有著獨特且無與倫比的力量，能把來自各行各業的人們聚集在一起。這個全新系列，是我們創意結盟的成果，它代表了我們雙方各自的精神、能量和產業專業度。」
                                    <br>
                                    NETFLIX消費品副總裁Josh Simon也表示：「這個系列非常引人注目且極具創意，當粉絲們穿上這個系列，可以表達他對角色和劇集的喜愛。因此我認為這次合作是一個融合時尚和娛樂的獨特展示，聯名服飾成為NETFLIX與LACOSTE合作講述故事的強大媒介。」
                                    <br>
                                    依據這八大熱門劇集的風格為靈感，LACOSTE提取了劇中元素，標誌性鱷魚LOGO被重新設計，以刺繡或植絨的方式，運用在經典款服飾之上。中性款POLO衫、帽子、T恤、運動套裝及配飾，都結合了運動與時尚的經典元素，構成了此次聯名系列的重點部分。LACOSTE標誌性小鱷魚也搖身一變，客串上了NETFLIX劇集中的角色。為回應NETFLIX最具人氣影集之一《怪奇物語（Stranger Things）》的奇幻風格，小鱷魚被換上了該劇異空間魔神的花瓣巨口，招搖醒目；為了向《柏捷頓家族：名門韻事（Bridgerton）》中的夏洛特女王致敬，小鱷魚戴上了一頂巨大的假髮；更有聯名單品採用了類似朱伊紋印花（Toile de Jouy）的設計，描摹這些喬裝打扮的鱷魚們在各個劇集角色之間自由變化與穿梭的模樣。這一聯名系列，讓粉絲們有機會通過服飾，傳遞對自己所喜歡劇集的熱愛，並把這種熱愛融入到自己的個人風格與現實生活之中。
                                    <br>
                                    本次，LACOSTE同步推出頗具看點的系列創意視覺大片，將小鱷魚帶到了一個LACOSTE多元宇宙和NETFLIX奇幻劇集的世界之中。影片中佈景美輪美奐，結合妙趣橫生的劇情，穿著LACOSTE x NETFLIX聯名服飾各個人物角色，也打破了人們對NETFLIX粉絲們的刻板印象——他們不再被局限於宅家看劇這一單一場景，而是走入真實生活場景，玩轉時尚的多樣風格。
                                    <br>
                                    LACOSTE x NETFLIX 聯名系列將於2023年4月12日起，於 LACOSTE 全省門市限量販售，有興趣的朋友千萬別錯過！
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="news-block">
                    <div class="news-content">
                        <div class="news-image" data-aos="fade-down" data-aos-duration="1000">
                            <a href="#">
                                <img src="../assets/images/news/news-2.webp" alt="">
                            </a>
                        </div>
                        <a href="#">
                            <div class="news-text" data-aos="fade-up" data-aos-duration="1000">
                                <h3>跟著 PALLADIUM 把城市的煩惱通通打包！套上橘標防水鞋、帶著BAROUDEUR雙層戰術後背包旅行說走就走！現在只要購買就有機會獲得東京來回機票！</h3>
                                <p>
                                    最近旅遊風氣再起，看著大家都出國或者去了外縣市 Chill，你是否也心癢難耐？別想了，PALLADIUM 幫你把裝備都搭好，到門市刷完直接出發！就來看看這次 PALLADIUM 延續其不羈自由的 GO OUT 城市出走宣言，為每個不安分的靈魂獻上的鞋款新色與包袋單品！
                                    <br>
                                    本次為大家囊括四大熱門橘標防水系列，有高筒與低筒各兩款，百搭潮流色系鞋履將成為你2023上半年必收鞋款之一！還外加兩款BAROUDEUR雙層戰術後背包與機能潮流服飾，鞋衣包都有，旅行說走就走。
                                    <br>
                                    潮人就是無時無刻都要穿搭在線！PALLADIUM 的全新春夏服飾系列也絕對讓你驚豔！一台車、一雙靴、一個包，簡單又帥氣的配飾，公路旅行穿搭就這麼搭！
                                    <br>
                                    第一套公路穿搭就是用顏色跳出個人潮感！誰說穿搭不能以包款和鞋款為主角？上衣以大地色鋪墊，下身採萬能百搭休閒淺藍牛仔褲，鞋子則是低筒鞋身的橘標防水OX TRAVEL LITE+系列，俐落輕奢鞋型與機能對撞，鞋身亮橘與包款呼應，帥進細節就是不一樣！最後就是BAROUDEUR雙層戰術後背包，營火橘亮眼又兼具22L大容量的雙層收納實用性，怎麼能不愛這個單品？
                                    <br>
                                    說到公路穿搭，奶茶色系肯定需要來一套，整體以自然茶褐色為基礎，舒服又好看的顏色貫穿服飾、靴款、包袋，在自然景色中來一張帥照，也能輕易跳出綠色氛圍！靴款採用橘標防水TRAVEL LITE+系列PAMPA經典法式軍靴，搭載了第二代FAST LACING快速綁帶系統設計，可一拉輕鬆上腳，打破靴款不易穿脫的刻板印象，快速穿脫超方便，同時防水機能也非常到位！最後的BAROUDEUR雙層戰術後背包，收束了整套穿搭的奶茶色自然系主題，其四種背帶設計，與22L雙層全開式收納大空間，霸氣又好用，就是旅行必備！
                                    <br>
                                    灰色一直都是質感代表，從白TEE、多層次灰色短褲，到經典定番橘標防水RCYCL LT+Z黑色軍靴與墨綠色BAROUDEUR雙層戰術後背包。質感與機能一次打理。橘標防水RCYCL LT+Z軍靴的再生防水拉鍊設計，一如這雙靴款的靈魂，好穿脫、防水又十分 iconic，再來其 LITE+進化輕量大底，讓你揮別過去沉重的靴款，說走就走，輕鬆又有型！
                                    <br>
                                    女生這樣搭也可以，以奶茶色與褐金色為底蘊，加上沉著的深藍外套打底，潮流機能女孩形象一套搞定！奶茶色靴款就是曾被 DIZZY DIZZO 演繹的橘標防水OFF-GRID輪胎潮鞋！其球鞋輪廓外型，加上快速綁帶系統與橘標防水雙科技，讓戶外潮人無不動心，最重要的是搭載OFF-GRID全地形輪胎大底，耐磨度大大提升，標誌性外型線條可說是大家人腳一雙的最大主因！這次為各位捎來的奶茶金新色，無疑會是下一雙戶外大勢靴履，你還不快到店上好好把握？
                                    <br>
                                    看完四套公路旅行穿搭，其中BAROUDEUR雙層戰術後背包，猶如靈魂角色班貫穿全場。正著背、提著拿，四種背帶設計(雙肩背帶、上提帶、側提帶、行李拉桿彈性固定帶)你想怎麼掛就怎麼掛，材質上有尼龍與帆布兩種選擇，分別是輕盈防刮尼龍包面材質與重磅軍用帆布材質，皆有22L雙層全開式收納超大空間，讓你放什麼都OK，再來減壓胸扣固定帶和全背減壓緩衝設計，讓你全程超好背。出外旅行，好搭好用又好背，這顆不敗不行了吧？
                                    <br>
                                    法國原創背包與橘標防水軍靴的恣意搭配也是你下手的關鍵，多色與多鞋型選擇，讓你一店就能選到能跟你一起踏上旅程的最適靴履與包款！
                                    <br>
                                    PALLADIUM寵粉不手軟，風格季優惠活動4月14日正式開跑，動期間凡至門市消費，不限金額登錄發票雙周抽最大獎台北-東京雙人來回機票，還有機會拿萬元購物金；針對懂玩懂買世界旅人結帳出示住宿交通旅遊憑證，限時加碼最高享12%旅遊贊助金回饋現抵，讓你一單玩到底的時刻就是現在，不想錯過更多好東西？現在就到 PALLADIUM 門市試穿買起來！
                                </p>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="news-block">
                    <div class="news-content">
                        <div class="news-image" data-aos="fade-down" data-aos-duration="1000">
                            <a href="#">
                                <img src="../assets/images/news/news-1.webp" alt="">
                            </a>
                        </div>
                        <a href="#">
                            <div class="news-text" data-aos="fade-up" data-aos-duration="1000">
                                <h3>限定商品同步推出！《CHUMS 40 週年慶》正式開跑</h3>
                                <p>
                                    1983年創立的美國戶外休閒露營品牌CHUMS於今年迎來品牌40週年，堅持實用、舒適、樂活 Lifestyle 的設計理念，展現豐富多彩的簡潔時尚風格，廣受親子家庭與熱愛戶外的青年族群喜愛。為歡迎40週年里程碑，品牌將於3月31日至4月19日舉辦《CHUMS 40週年慶》活動，祭出四大歡慶內容，同步推出40週年限定商品，喜愛戶外露營的朋友們千萬別錯過。今年就來CHUMS添購全新戶外新衣及最繽紛療癒的露營裝備吧！
                                    <br>
                                    Urban Outdoor潮流興起，講究細節的Glamping(豪華露營)亦成為風潮，裝備不但要求實用性能，個人品味與享樂性質的設計亦十分重要。如何享受一個富有個人風格的戶外樂趣？個人穿搭風格與小物配置就是關鍵。創立於1983年的CHUMS正是這種生活要求的代表品牌，在實用與玩味間，取得豐富品牌特色的平衡。本次新推出CHUMS 40週年限定商品，共推出三款限定商品：「40 Years Old Booby T-Shirt」、「CHUMS 40 Years T-Shirt」、「40 Years CHUMS Logo T-Shirt」，結合品牌吉祥物「紅腳鰹鳥Booby」元素，以簡單設計、繽紛色彩為設計理念，減去對服飾性能的擔憂，令露營者能夠盡情享受山野。
                                    <br>
                                    《CHUMS 40週年慶》活動將於3月31日至4月19日舉辦，品牌祭出四大歡慶內容。除此之外，於4月5日前搶先單筆消費滿 $1,000，即贈限量Masking Tape紙膠帶，邀請粉絲一同感受40週年帶來的歡慶氣氛。
                                    <br>
                                    第一重：活動期間，新品服飾、包袋、配件摩曼頓會員獨享新品全面85折。
                                    <br>
                                    第二重：活動期間，凡購買 40週年限定商品，贈75折服飾折扣券一張 (使用期限4/28-5/31)。
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                <div class="news-link" data-aos="fade-right" data-aos-duration="1000">
                    <a href="#">更多消息→</a>
                </div>
            </div>
        </section>
        <!-- section 8 -->
        <section id="section-8">
            <h2>關於我們</h2>
            <div class="about">
                <div class="about-container" >
                
                    <div class="about-block">
                        <div class="about-thumb">
                            <a href="#" class="about-link">
                                <img src="../assets/images/home/about-3.webp" alt="">
                                <h3>品牌簡介</h3>
                            </a>
                        </div>
                    </div>
                
                    <div class="about-block">
                        <div class="about-thumb">
                            <a href="#" class="about-link">
                                <img src="../assets/images/home/about-2.webp" alt="">
                                <h3>運送服務</h3>
                            </a>
                        </div>
                    </div>
                
                    <div class="about-block">
                        <div class="about-thumb">
                            <a href="#" class="about-link">
                                <img src="../assets/images/home/about-1.webp" alt="">
                                <h3>實體通路</h3>
                            </a>
                        </div>
                    </div>
                
                    
                </div>
            </div>
        </section>
        <!-- section ? -->
        <!-- <section id="section-?">
            <div class="card-block">
                <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4">
                    <div class="outer-card card col">
                        <div class="card h-100 card-border">
                            <div class="card-image">
                                <img src="../assets/images/select-1.webp" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <p class="card-title">Card title</p>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="outer-card card col">
                        <div class="card h-100 card-border">
                            <div class="card-image">
                                <img src="../assets/images/select-1.webp" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <p class="card-title">Card title</p>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="outer-card card col">
                        <div class="card h-100 card-border">
                            <div class="card-image">
                                <img src="../assets/images/select-1.webp" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <p class="card-title">Card title</p>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="outer-card card col">
                        <div class="card h-100 card-border">
                            <div class="card-image">
                                <img src="../assets/images/select-1.webp" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <p class="card-title">Card title</p>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="outer-card card col">
                        <div class="card h-100 card-border">
                            <div class="card-image">
                                <img src="../assets/images/select-1.webp" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <p class="card-title">Card title</p>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                    <div class="outer-card card col">
                        <div class="card h-100 card-border">
                            <div class="card-image">
                                <img src="../assets/images/select-1.webp" class="card-img-top" alt="...">
                            </div>
                            <div class="card-body">
                                <p class="card-title">Card title</p>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section> -->
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
                // section 3 三角形自動移動(含 click 事件)
                let triangleBtn = document.querySelectorAll(".tri-btn");
                function triangle_click(i){
                    setTimeout(function(){
                    
                        triangleBtn[i].click();
                        i++;
                    
                        if(i <= 2) {
                            triangle_click(i);
                        }
                    
                        if(i > 2) {
                            let i = 0;
                            triangle_click(i);
                        }
                    }, 4000);
                }
                window.addEventListener("load", triangle_click(1));
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