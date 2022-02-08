<template>
	<footer class="footer">
		<div class="footer__container">
			<img width="122" src="@/assets/scesi_white.png" alt="scesi" />
			<BaseFooterListLinks />
		</div>
	</footer>
</template>

<script setup lang="ts">
	import BaseFooterListLinks from "./BaseFooterListLinks.vue";
</script>

<style scoped lang="scss">
	.footer {
		background-color: var(--background-footer-color);
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
			padding: 0 2rem;
		}
	}
</style>
