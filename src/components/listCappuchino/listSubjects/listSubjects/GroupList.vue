<template>
	<ul class="group-list">
		<GroupItem
			v-for="group of groups"
			:key="group.code"
			:groupCode="group.code"
			:nameTeacher="group.schedule[0].teacher"
			@group:select="selectGroup"
			:isSelected="isInGroup(group.code + group.schedule[0].teacher)"
		/>
	</ul>
</template>

<script setup lang="ts">
	import { PropType, toRefs, inject } from "vue";

	import GroupItem from "./GroupItem.vue";
	import { useSubjects } from "../../../../composables/useSubjects";
	import { groups as IGroups } from "../../../../interfaces";

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

	const addGroup = inject("checkBox/addGroup") as Function;
	const removeGroup = inject("checkBox/removeGroup") as Function;
	const isInGroup = inject("checkBox/isInGroup") as Function;

	const selectGroup = ({
		isSelect,
		groupCode,
		key,
	}: {
		isSelect: boolean;
		groupCode: string;
		key: string;
	}) => {
		if (isSelect) {
			addGroup(key);
			addSubject({ groupCode, levelCode: level.value, subjectCode: codeSubject.value });
		} else {
			removeGroup(key);
			removeSubject({ groupCode, subjectCode: codeSubject.value });
		}
	};
</script>

<style lang="scss" scoped>
	.group-list {
		padding: 0;
	}
</style>
