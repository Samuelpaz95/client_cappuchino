<template>
	<ButtonIcon icon="toggle-theme" @click="toggleTheme()" />
</template>

<script setup lang="ts">
	import { inject } from "@vue/runtime-core";
	import ButtonIcon from "./ui/ButtonIcon.vue";

	const toggleTheme = inject("theme/toggleTheme") as Function;
</script>
