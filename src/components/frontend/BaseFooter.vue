<template>
	<footer class="footer">
		<div class="footer__container">
			<span>
				<ul class="footer__links">
					<li class="footer__link" v-for="(value, index) in links" :key="index">
						<a :href="value.route" target="_blank" :hreflang="value.alt" referrerpolicy="no-referrer">
							<BaseSystemIcons :icon="value.alt" />
						</a>
					</li>
				</ul>
			</span>
			<img class="footer__image" src="../../assets/scesi_white.png" alt="scesi" />
		</div>
	</footer>
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

<style lang="scss">
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
		}

		&__links {
			display: flex;
			padding: 0;
		}

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

			svg {
				height: 24px;
			}
		}

		&_image {
			width: 71px;
			padding-right: calc(26px - 1rem);
		}

		@include large {
			&__container {
				padding: 0 2rem;
			}

			&__link {
				padding: 0 10px;

				svg {
					height: 29;
				}
			}

			&__links::before {
				content: "Siguenos en:";
				font-size: 18px;
			}

			&__image {
				width: 80px;
			}
		}
	}
</style>
