<template>
	<header class="header">
		<router-link class="header__linkmain" to="/">
			<h2 class="header__title">TITLE</h2>
		</router-link>
	</header>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "BaseHeader",
		setup() {
			return {};
		},
	});
</script>

<style scoped lang="scss">
	@import "../../scss/abstracts/_variables.scss";
	@import "../../scss/abstracts/_mixins.scss";

	.header {
		width: 100%;
		height: 100%;
		background-color: $primary_color;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		box-shadow: $box-shadow;

		&__linkmain {
			text-decoration: none;
			padding-left: 3rem;
		}

		&__title {
			// font-size: 25px;
			color: $font_color;

			@include large {
				font-size: 2rem;
			}
		}
	}
</style>
