import { createWebHistory, createRouter } from "vue-router";
import store from "../pages/store.vue";
import pos from "../pages/pos.vue";
import transection from "../pages/transection.vue";
import report from "../pages/report.vue";
export const routes = [
    {
        name: "store page",
        path: "/",
        component: store,
    },
    {
        name: "pos page",
        path: "/pos",
        component: pos,
    },
    {
        name: "transection page",
        path: "/transection",
        component: transection,
    },
    {
        name: "report page",
        path: "/report",
        component: report,
    },
];
const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior() {
        window.scrollTo(0, 0);
    },
});
export default router;
