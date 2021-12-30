<template>
	<header class="header">
		<router-link class="header__linkmain" to="/">
			<h2 class="header__title">{{ title }}</h2>
		</router-link>
		<ToggleTheme class="header__option" />
	</header>
</template>

<script setup lang="ts">
	import { computed } from "vue";
	import { useRoute } from "vue-router";
	import { getPath } from "../../utils/routes";
	import { TITLE } from "../../constants";
	import ToggleTheme from "../ToggleTheme.vue";

	const route = useRoute();
	const title = computed(() => TITLE[getPath(route.path)]);
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/_variables.scss", "@/scss/abstracts/_mixins.scss";

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

			@include large {
				font-size: 2rem;
			}
		}

		&__option {
			margin-right: 3rem;
		}
	}
</style>
