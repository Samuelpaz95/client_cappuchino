<template>
	<li class="list-subjects-level" @click="$emit('level:select', level)">
		<span class="list-subjects-level__level">{{ formatLevel(level) }}</span>
		<ButtonIcon :aria-label="`Abrir nivel ${formatLevel(level)}`" icon="angle" :rotate="90" />
	</li>
</template>

<script setup lang="ts">
	import { Ref, toRef } from "vue";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";
	import { formatLevel } from "../../../../utils/formatLevel";

	defineEmits(["level:select"]);
	const props = defineProps({
		level: {
			type: String,
			require: true,
			default: "",
		},
	});
	const level: Ref<string> = toRef(props, "level");
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
