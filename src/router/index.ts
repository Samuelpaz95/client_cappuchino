import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import Frontend from "@/layouts/Frontend.vue";

const NotFound = () => import("@/views/404/index.vue");
const Home = () => import("@/views/index.vue");
const Cappuchino = () => import("@/views/cappuchino/index.vue");
const TeacherTracker = () => import("@/views/teacher-tracker/index.vue");

const routes: RouteRecordRaw[] = [
	{
		path: "/",
		component: Frontend,
		children: [
			{
				path: "",
				name: "Home",
				component: Home,
			},
			{
				path: "cappuchino/:department",
				name: "Cappuchino",
				component: Cappuchino,
			},
			{
				path: "teacher-tracker/:department",
				name: "TeacherTracker",
				component: TeacherTracker,
			},
		],
	},
	{
		path: "/404",
		name: "404",
		component: NotFound,
	},
	{
		path: "/:pathMatch(.*)",
		name: "NotFound",
		component: NotFound,
	},
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior() {
		return { top: 0 };
	},
});

export { router };
