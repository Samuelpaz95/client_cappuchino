<template>
	<div class="not-found">
		<div>
			<h1>Este Recurso no esta disponible</h1>
			<div class="not-found__buttons">
				<button class="not-found__button" @click="$router.push('/')">
					<BaseSystemIcons icon="home" height="30" /><span>Inicio</span>
				</button>
				<button class="not-found__button" @click="$router.go(-1)">
					<BaseSystemIcons icon="angle" :rotate="270" height="30" /><span>Atras</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
	import BaseSystemIcons from "../../components/ui/BaseSystemIcons.vue";
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables", "@/scss/abstracts/mixins";

	.not-found {
		display: grid;
		place-items: center;
		min-height: 100vh;

		h1 {
			padding: 2rem;
			text-align: center;
			margin: 0;
		}

		&__buttons {
			@include large {
				display: flex;
				flex-direction: row-reverse;
				justify-content: space-between;
			}
		}

		&__button {
			display: flex;
			align-items: center;
			justify-content: space-evenly;

			background-color: transparent;
			border-radius: $border_radius;
			color: inherit;
			border: 1px solid var(--secondary-color);
			padding: 1rem;
			margin: 2rem;
			width: calc(100% - 4rem);
			font-size: 2rem;
			font-weight: 700;
		}
	}
</style>
