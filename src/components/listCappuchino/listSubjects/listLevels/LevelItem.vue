<template>
	<li class="list-subjects-level">
		<span class="list-subjects-level__level" @click="$emit('level:select', level)">{{
			formatLevel(level)
		}}</span>
		<ButtonIcon icon="angle" :rotate="90" @click="$emit('level:select', level)" />
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
	@import "@/scss/abstracts/variables.scss";
	.list-subjects-level {
		list-style: none;
		height: $lineHeigth;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;

		&__level {
			cursor: pointer;
			font-weight: 700;
		}
	}
</style>
