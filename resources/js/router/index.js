import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

import Dashboard from "../components/dashboard/container";
import Inventory from "../components/inventory/container";
import Login from "../components/login";
import Contactanos from "../components/inicio/contactanos";
const routes = [
    {
        component: Contactanos,
        name: "contactanos",
        path: "/contactanos"
    },
    {
        component: Login,
        name: "login",
        path: "/login"
    },
    {
        component: Dashboard,
        name: "dashboard",
        path: "/dashboard"
    },
    {
        component: Inventory,
        name: "inventory",
        path: "/inventory"
    }
];

export default new VueRouter({
    routes
});
