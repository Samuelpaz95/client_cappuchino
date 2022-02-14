<template>
	<header class="list-carrers-header">
		<template v-if="isOpenMenu">
			<template v-if="!stateMenu.isInCarrers">
				<ButtonIcon
					aria-label="back-to-menu"
					icon="angle"
					:rotate="270"
					@click="stateMenu.isInCarrers = true"
				/>
				<p>{{ stateMenu.selectCarrer }}</p>
			</template>
			<p v-else>CARRERAS</p>
		</template>
		<ButtonIcon
			v-if="!isOpenMenu"
			aria-label="burger-menu"
			icon="bars"
			@click="$emit('update:openMenu', !isOpenMenu)"
		/>
		<div v-if="isOpenMenu">
			<ButtonIcon
				v-if="!isInDesktop"
				aria-label="close-menu"
				icon="close"
				@click="$emit('update:openMenu', !isOpenMenu)"
			/>
		</div>
	</header>
</template>

<script setup lang="ts">
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";
	import { stateMenu } from "../../store/state/Menu";

	defineProps({
		isInDesktop: Boolean,
		isOpenMenu: Boolean,
	});
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables", "@/scss/abstracts/mixins";

	.list-carrers-header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		height: $lineHeight;
		background-color: var(--primary-color);

		@include large {
			border-top-left-radius: $border_radius;
			border-top-right-radius: $border_radius;
		}

		p {
			font-weight: 700;
			margin: 0;
			display: flex;
			align-items: center;
			text-align: center;
			line-height: 15px;
		}
	}
</style>
