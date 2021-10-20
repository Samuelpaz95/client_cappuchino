<template>
	<button class="button-icon">
		<BaseSystemIcons :icon="icon" :height="height" :rotate="rotate" />
	</button>
</template>

<script setup lang="ts">
	import BaseSystemIcons from "@/components/ui/BaseSystemIcons.vue";

	const { icon, height, rotate } = defineProps({
		icon: {
			type: String,
			require: true,
			default: "",
		},
		height: {
			type: String,
			default: "24",
		},
		rotate: {
			type: Number,
			default: 0,
		},
	});
</script>

<style lang="scss" scoped>
	.button-icon {
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: inherit;
		border: none;
		color: inherit;
	}
</style>
