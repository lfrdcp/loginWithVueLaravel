import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from "../components/dashboard/container"
import Inventory from "../components/inventory/container"

const routes = [
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
]

export default new VueRouter({
    routes
});
