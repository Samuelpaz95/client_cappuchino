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
	import ButtonIcon from "./ui/ButtonIcon.vue";

	const toggleTheme = inject("theme/toggleTheme") as Function;
</script>
