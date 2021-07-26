<template>
	<ul class="footer-links">
		<li class="footer-links__link" v-for="(value, index) in links" :key="index">
			<a :href="value.route" target="_blank" :hreflang="value.alt" referrerpolicy="no-referrer">
				<BaseSystemIcons :icon="value.alt" />
			</a>
		</li>
	</ul>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import BaseSystemIcons from "../BaseSystemIcons.vue";

	export default defineComponent({
		components: {
			BaseSystemIcons,
		},
		setup() {
			const links: { alt: string; route: string }[] = [
				{
					alt: "facebook",
					route: "https://www.facebook.com/scesi",
				},
				{
					alt: "instagram",
					route: "https://www.instagram.com/scesiumss/?hl=es",
				},
				{
					alt: "twitter",
					route: "https://twitter.com/ScesiU",
				},
				{
					alt: "github",
					route: "https://github.com/scesi",
				},
				{
					alt: "youtube",
					route: "https://www.youtube.com/channel/UCfhSc_xLVxFubp9exyacy0Q",
				},
			];
			return { links };
		},
	});
</script>

<style scoped lang="scss">
	@import "../../scss/abstracts/_variables.scss";
	@import "../../scss/abstracts/_mixins.scss";

	.footer-links {
		display: flex;
		padding: 0;

		&__link {
			position: relative;
			bottom: -6px;
			padding: 0 5px;
			list-style: none;

			:link {
				color: $font_color;
			}

			:visited {
				color: $font_color;
			}

			@include large {
				padding: 0 10px;
			}
		}

		@include large {
			&::before {
				content: "Siguenos en:";
				font-size: 18px;
				padding-right: 1rem;
			}
		}
	}
</style>
