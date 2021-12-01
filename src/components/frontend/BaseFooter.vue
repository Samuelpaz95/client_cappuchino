<template>
	<footer class="footer">
		<div class="footer__container">
			<BaseFooterListLinks />
			<img class="footer__image" src="@/assets/scesi_white.png" alt="scesi" />
		</div>
	</footer>
</template>

<script setup lang="ts">
	import BaseFooterListLinks from "./BaseFooterListLinks.vue";
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
