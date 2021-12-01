<template>
	<header class="header">
		<router-link class="header__linkmain" to="/">
			<h2 class="header__title">TITLE</h2>
		</router-link>
	</header>
</template>

<style scoped lang="scss">
	@import "@/scss/abstracts/_variables.scss", "@/scss/abstracts/_mixins.scss";

	.header {
		width: 100%;
		height: 100%;
		background-color: var(--primary-color);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		// box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);

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
	}
</style>
