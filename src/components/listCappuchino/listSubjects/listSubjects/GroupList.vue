<template>
	<ul class="group-list">
		<GroupItem
			v-for="group of groups"
			:key="group.code"
			:groupCode="group.code"
			:nameTeacher="group.schedule[0].teacher"
			@group:select="selectGroup"
		/>
	</ul>
</template>

<script setup lang="ts">
	import { PropType, toRefs } from "vue";

	import { useSubjects } from "../../../../composables/useSubjects";
	import { groups as IGroups } from "../../../../interfaces";
	import GroupItem from "./GroupItem.vue";

	const props = defineProps({
		groups: {
			type: Array as PropType<IGroups>,
			default: [],
			require: true,
		},
		codeSubject: {
			type: String,
			default: "",
			require: true,
		},
		level: {
			type: String,
			default: "",
			require: true,
		},
	});
	const { codeSubject, level } = toRefs(props);
	const { addSubject, removeSubject } = useSubjects();

	const selectGroup = ({ isSelect, groupCode }: { isSelect: boolean; groupCode: string }) => {
		if (isSelect) {
			addSubject({ groupCode, levelCode: level.value, subjectCode: codeSubject.value });
		} else {
			removeSubject({ groupCode, subjectCode: codeSubject.value });
		}
	};
</script>

<style lang="scss" scoped>
	.group-list {
		padding: 0;
	}
</style>
