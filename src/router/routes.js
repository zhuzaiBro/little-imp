import Home from "../views/Home/index.vue";
import About from '../views/About/index.vue';
import Join from '../views/Join/index.vue';
import ShowHall from '../views/ShowHall/index.vue';
import Shop from '../views/Shop/index.vue';
import Community from '../views/Community/index.vue';
import GoodDetail from '../views/Shop/GoodDetail.vue';

export default [{
        name: "home",
        path: "/",
        component: Home
    },
    {
        name: "about",
        path: "/about",
        component: About
    },
    {
        name: "join",
        path: "/join",
        component: Join
    },
    {
        name: "showhall",
        path: "/showhall",
        component: ShowHall
    },
    {
        name: "shop",
        path: "/shop",
        component: Shop,
        // children: [{
        //     name: "detail",
        //     path: '/:link',
        //     component: GoodDetail
        // }]
    }, {
        name: "community",
        path: "/community",
        component: Community
    },
    {
        name: "detail",
        path: "/shop/:link",
        component: GoodDetail
    },
    // {
    //     name: "exihibt",
    //     path: "/showhall/:link",
    //     component: ShowHall
    // }
];