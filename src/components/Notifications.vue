<template>
	<ButtonIcon @click="active = !active" icon="bell" aria-label="Notificaciones" title="Notificaciones" />
	<div v-if="active" class="notification">Horarios actualizados al 2021-2</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import ButtonIcon from "./ui/ButtonIcon.vue";

	const active = ref(false);
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables";
	.notification {
		position: absolute;
		z-index: 10;
		top: calc(100% + 20px);
		right: 20px;

		// background-color: var(--primary-color);
		border: 1px solid var(--secondary-color);
		border-radius: $border_radius;
		border-top-right-radius: 0;
		padding: 0.4rem 0.6rem;
		min-width: 260px;

		&::after {
			content: "";
			position: absolute;
			display: block;
			border-bottom: 20px solid var(--secondary-color);
			border-left: 20px solid transparent;
			top: -20px;
			right: -1px;
			z-index: 10;
		}
	}
</style>
