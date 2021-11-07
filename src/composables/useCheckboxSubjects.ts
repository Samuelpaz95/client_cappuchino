import { Ref, ref, provide } from "vue";

export const useCheckboxSubjects = () => {
	const groupsSelect: Ref<String[]> = ref([]);

	const addGroup = (groupKey: string) => {
		groupsSelect.value.push(groupKey);
	};

	const removeGroup = (groupKey: string) => {
		const index = groupsSelect.value.indexOf(groupKey);
		groupsSelect.value.splice(index, 1);
	};

	const isInGroup = (groupKey: string) => groupsSelect.value.includes(groupKey);

	provide("addGroup", addGroup);
	provide("removeGroup", removeGroup);
	provide("isInGroup", isInGroup);
};
