<template>
	<ul class="subject-list" :style="[heightList]">
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
	import { toRefs, inject } from "vue";
	import SubjectItem from "./SubjectItem.vue";
	import { useScheudleHeight } from "../../../../composables/ui/useScheduleHeight";

	const props = defineProps({
		level: {
			type: String,
			default: "",
			require: true,
		},
	});
	const { level } = toRefs(props);
	const detailLevel = inject("detailLevel") as Function;
	const { heightList } = useScheudleHeight(100);
	const subjects = detailLevel(level.value);
</script>

<style lang="scss" scoped>
	.subject-list {
		padding: 0;
		margin: 0;
		background-color: var(--background-color);
		overflow-y: auto;

		&__item:not(:first-child) {
			border-top: 1px solid var(--transparent-font-color);
		}
	}
</style>
