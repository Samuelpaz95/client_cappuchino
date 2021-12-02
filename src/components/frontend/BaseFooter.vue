<template>
	<footer class="footer">
		<div class="footer__container">
			<BaseFooterListLinks />
			<img v-if="theme == 'LIGHT'" class="footer__image" src="@/assets/scesi_black.png" alt="scesi" />
			<img v-else class="footer__image" src="@/assets/scesi_white.png" alt="scesi" />
		</div>
	</footer>
</template>

<script setup lang="ts">
	import { inject, Ref } from "vue";
	import BaseFooterListLinks from "./BaseFooterListLinks.vue";

	const theme = inject("theme/currentTheme") as Ref<string>;
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/_variables.scss", "@/scss/abstracts/_mixins.scss";

	.footer {
		background-color: var(--primary-color);
		width: 100%;
		height: 100%;
		display: flex;
		align-items: center;

		&__container {
			display: flex;
			justify-content: space-between;
			align-items: center;
			width: 100%;
			height: 100%;
			padding: 0 1rem;

			@include large {
				padding: 0 2rem;
			}
		}

		&__image {
			width: 80px;
			padding-right: calc(26px - 1rem);

			@include large {
				width: 80px;
			}
		}
	}
</style>
