<template>
	<router-view />
</template>

<script setup lang="ts">
	import { useTheme } from "./composables/ui/useTheme";

	useTheme();
</script>

<style lang="scss">
	@import "./scss/index.scss";
</style>
