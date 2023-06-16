import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/Commodity',
        name: 'Commodity',
        component: () => import('../views/Commodity.vue')
    },
    {
        path: '/NewArrivals',
        name: 'NewArrivals',
        component: () => import('../views/NewArrivals.vue')
    },
    {
        path: '/OnSale',
        name: 'OnSale',
        component: () => import('../views/OnSale.vue')
    },
    {
        path: '/Co-Branding',
        name: 'Co-Branding',
        component: () => import('../views/Co-Branding.vue')
    },
    {
        path: '/AboutUs',
        name: 'AboutUs',
        component: () => import('../views/AboutUs.vue')
    },
    {
        path: '/Shop',
        name: 'Shop',
        component: () => import('../views/Shop.vue')
    },
    {
        path: '/Recruit',
        name: 'Recruit',
        component: () => import('../views/Recruit.vue')
    },
    {
        path: '/ContactUs',
        name: 'ContactUs',
        component: () => import('../views/ContactUs.vue')
    },
    {
        path: '/News',
        name: 'News',
        component: () => import('../views/News.vue')
    },
    {
        path: '/Privacy',
        name: 'Privacy',
        component: () => import('../views/Privacy.vue')
    },
    {
        path: '/ReturnExchange',
        name: 'ReturnExchange',
        component: () => import('../views/ReturnExchange.vue')
    },
    {
        path: '/Delivery',
        name: 'Delivery',
        component: () => import('../views/Delivery.vue')
    },
    {
        path: '/Login',
        name: 'Login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/commodity-tops',
        name: 'commodity-tops',
        component: () => import('../views/commodity-tops.vue')
    },
    {
        path: '/commodity-bottoms',
        name: 'commodity-bottoms',
        component: () => import('../views/commodity-bottoms.vue')
    },
    {
        path: '/commodity-suiting',
        name: 'commodity-suiting',
        component: () => import('../views/commodity-suiting.vue')
    },
    {
        path: '/commodity-outerwear',
        name: 'commodity-outerwear',
        component: () => import('../views/commodity-outerwear.vue')
    },
    {
        path: '/commodity-footwear',
        name: 'commodity-footwear',
        component: () => import('../views/commodity-footwear.vue')
    },
    {
        path: '/commodity-accessories',
        name: 'commodity-accessories',
        component: () => import('../views/commodity-accessories.vue')
    },




    // 測試用 //
    {
        path: '/aaa',
        name: 'aaa',
        component: () => import('../views/aaa.vue')
    },

]



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        //切換不同頁面，滾軸永遠在最上面
        if (to.name !== from.name)
            return {
                top: 0,
                left: 0,
                behavior: "smooth",
            };
    },
});




export default router
