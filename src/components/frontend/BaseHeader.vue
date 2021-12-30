<template>
	<header class="header">
		<router-link class="header__linkmain" to="/">
			<h2 class="header__title">{{ title }}</h2>
		</router-link>
		<div class="header__icons">
			<ToggleTheme class="header__option" />
			<Notifications class="header__option" />
		</div>
	</header>
</template>

<script setup lang="ts">
	import { computed } from "vue";
	import { useRoute } from "vue-router";
	import { getPath } from "../../utils/routes";
	import { TITLE } from "../../constants";
	import ToggleTheme from "../ToggleTheme.vue";
	import Notifications from "../Notifications.vue";

	const route = useRoute();
	const title = computed(() => TITLE[getPath(route.path)]);
</script>

<style scoped lang="scss">
	.header {
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;

		&__linkmain {
			text-decoration: none;
			padding-left: 3rem;
		}

		&__title {
			color: var(--font-color);
			margin: 0;
			font-weight: 100;
			font-size: 34px;
		}

		&__icons {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__option {
			margin-right: 3rem;
		}
	}
</style>
