<template>
	<input
		class="search-input"
		type="text"
		:placeholder="placeholder"
		:value="modelValue"
		@input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
	/>
</template>

<script lang="ts" setup>
	import { defineProps, defineEmits } from "vue";

	defineProps({
		placeholder: {
			type: String,
			default: "Buscar...",
		},
		icon: {
			type: String,
			default: "",
		},
		modelValue: {
			type: String,
			default: "",
		},
	});

	defineEmits(["update:modelValue"]);
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables", "@/scss/abstracts/mixins";
	.search-input {
		width: 100%;
		padding: 12px;
		padding-left: 48px;
		border-radius: $border_radius;
		background: url("@/assets/search_icon.svg"), var(--primary-color);
		background-repeat: no-repeat;
		background-size: 24px;
		background-position: left 16px center;
		flex: 1;
		font-size: 17px;
		color: var(--font-color);
		border: none;
	}
</style>
