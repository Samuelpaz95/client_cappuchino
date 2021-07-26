<template>
	<footer class="footer">
		<div class="footer__container">
			<BaseFooterListLinks />
			<img class="footer__image" src="../../assets/scesi_white.png" alt="scesi" />
		</div>
	</footer>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import BaseSystemIcons from "../BaseSystemIcons.vue";
	import BaseFooterListLinks from "./BaseFooterListLinks.vue";

	export default defineComponent({
		components: {
			BaseSystemIcons,
			BaseFooterListLinks,
		},
	});
</script>

<style scoped lang="scss">
	@import "../../scss/abstracts/_variables.scss";
	@import "../../scss/abstracts/_mixins.scss";

	.footer {
		background-color: $primary_color;
		box-shadow: $box-shadow;
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
