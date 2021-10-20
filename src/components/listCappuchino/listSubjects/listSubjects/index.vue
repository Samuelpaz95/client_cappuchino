<template>
	<ul class="subject-list">
		<SubjectItem
			class="subject-list__item"
			v-for="subject of subjects"
			:key="subject.code"
			:subject="subject"
			:level="level"
		/>
	</ul>
</template>

<script setup lang="ts">
	import { toRefs } from "vue";
	import SubjectItem from "./SubjectItem.vue";
	import { useLevels } from "../../../../composables/useLevels";

	const props = defineProps({
		level: {
			type: String,
			default: "",
			require: true,
		},
	});
	const { level } = toRefs(props);
	const { detailLevel } = useLevels();
	const subjects = detailLevel(level.value);
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables";

	.subject-list {
		padding: 0;
		margin: 0;
		background-color: $background_color;

		&__item:not(:first-child) {
			border-top: 1px solid transparentize($font_color, 0.7);
		}
	}
</style>
