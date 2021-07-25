import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import Home from "../views/index.vue";

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
