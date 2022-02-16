<template>
	<ButtonIcon
		@click="toggleTheme()"
		icon="toggle-theme"
		aria-label="Cambiar de tema"
		title="Cambiar de tema"
	/>
</template>

<script setup lang="ts">
	import { inject } from "vue";
	import { THEME_TOGGLE } from "../constants/composables";
	import ButtonIcon from "./ui/ButtonIcon.vue";

	const toggleTheme = inject(THEME_TOGGLE) as Function;
</script>
