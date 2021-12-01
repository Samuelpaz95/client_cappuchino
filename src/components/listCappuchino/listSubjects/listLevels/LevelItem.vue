<template>
	<li class="list-subjects-level" @click="$emit('level:select', level)">
		<span class="list-subjects-level__level">{{ formatLevel(level) }}</span>
		<ButtonIcon icon="angle" :rotate="90" />
	</li>
</template>

<script setup lang="ts">
	import { inject, Ref, toRef } from "vue";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	defineEmits(["level:select"]);
	const props = defineProps({
		level: {
			type: String,
			require: true,
			default: "",
		},
	});
	const level: Ref<string> = toRef(props, "level");
	const formatLevel = inject("formatLevel") as Function;
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables";
	.list-subjects-level {
		list-style: none;
		height: $lineHeight;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		cursor: pointer;

		&__level {
			font-weight: 700;
		}
	}
</style>
