<template>
	<ButtonIcon icon="toggle-theme" @click="toggleTheme()" aria-label="toggle theme" />
</template>

<script setup lang="ts">
	import { inject } from "@vue/runtime-core";
	import ButtonIcon from "./ui/ButtonIcon.vue";

	const toggleTheme = inject("theme/toggleTheme") as Function;
</script>
