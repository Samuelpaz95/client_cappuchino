import { createRouter, createWebHistory, Router, RouteRecordRaw } from "vue-router";

import Frontend from "../layouts/Frontend.vue";
import Home from "../views/index.vue";
import Cappuchino from "../views/cappuchino/index.vue";
import TeacherTracker from "../views/teacher-tracker/index.vue";

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
];

const router: Router = createRouter({
	history: createWebHistory(),
	routes,
});

export { router };
