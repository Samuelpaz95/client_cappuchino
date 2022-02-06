import { Ref, ref, provide, readonly } from "vue";

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

	provide("checkBox/groupsSelect", readonly(groupsSelect));
	provide("checkBox/addGroup", addGroup);
	provide("checkBox/removeGroup", removeGroup);
	provide("checkBox/isInGroup", isInGroup);
};
