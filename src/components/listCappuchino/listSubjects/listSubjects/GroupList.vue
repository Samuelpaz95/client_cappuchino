<template>
	<ul class="group-list">
		<GroupItem
			v-for="group of groups"
			:key="group.code"
			:groupCode="group.code"
			:nameTeacher="nameTeacher(group)"
			@group:select="selectGroup"
			:isSelected="isInGroup(group.code + nameTeacher(group))"
		/>
	</ul>
</template>

<script setup lang="ts">
	import { computed, PropType, toRefs } from "vue";
	import GroupItem from "./GroupItem.vue";
	import { useSubjects } from "../../../../composables/domain/useSubjects";
	import { groups as IGroups } from "../../../../interfaces";
	import { nameTeacher } from "../../../../utils/getNameTeacherClass";
	import { useStore } from "vuex";

	const store = useStore();
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
	const keys = computed(() => store.getters["scheduleSubjects/keyScheduleSubjects"]);

	const isInGroup = (groupKey: string) => keys.value.includes(groupKey);

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
