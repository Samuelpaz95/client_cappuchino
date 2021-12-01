<template>
	<ul class="footer-links">
		<li class="footer-links__link" v-for="(value, index) in links" :key="index">
			<a :href="value.route" target="_blank" :aria-label="value.alt" :hreflang="value.alt" rel="noopener">
				<BaseSystemIcons :icon="value.alt" />
			</a>
		</li>
	</ul>
</template>

<script setup lang="ts">
	import BaseSystemIcons from "@/components/ui/BaseSystemIcons.vue";

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
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/_variables.scss", "@/scss/abstracts/_mixins.scss";

	.footer-links {
		display: flex;
		padding: 0;

		&__link {
			padding: 0 5px;
			list-style: none;

			:link {
				color: var(--font-color);
			}

			:visited {
				color: var(--font-color);
			}

			a {
				display: flex;
				align-items: center;
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
