<template>
	<li class="list-subjects-level">
		<div class="list-subjects-level__row">
			<span>{{ formatLevel(level) }}</span>
			<ButtonIcon @click="$emit('level:select', level)" icon="angle" :rotate="90" />
		</div>
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
	.list-subjects-level {
		list-style: none;

		&__row {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
