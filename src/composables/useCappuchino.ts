import { ref, Ref, provide, computed, ComputedRef, onUnmounted } from "vue";
import { useStore } from "vuex";
import { Icarrer, IdepartementCarrer, level, subjects } from "../interfaces";
import departmentService from "../services/departments";

export const useCappuchino = (department: string) => {
	let indexDepartments: Ref<IdepartementCarrer[] | null> = ref(null);
	let currentCarrer: Ref<Icarrer | null> = ref(null);

	(async () => {
		indexDepartments.value = await departmentService.getDepartmentCarrers(department);
	})();

	const fetchDepartmentCarrer = async (nameCarrer: string) => {
		const indexCarrer = indexDepartments.value?.find(({ name }) => nameCarrer == name);
		if (indexCarrer) {
			currentCarrer.value = await departmentService.getDepartmentCarrer(department, indexCarrer.code);
		}
	};

	const detailLevel = (codeLevel: string): subjects | undefined => {
		const level = currentCarrer.value?.levels.find((level: level) => level.code == codeLevel);
		return level ? level.subjects : undefined;
	};

	const levels: ComputedRef<string[]> = computed(() => {
		const data: string[] | undefined = currentCarrer.value?.levels.map((level: level) => level.code);
		return data ? data : [];
	});

	onUnmounted(() => {
		const store = useStore();
		store.commit("scheduleSubjects/removeAllScheduleSubjects");
	});

	provide("fetchDepartmentCarrer", fetchDepartmentCarrer);
	provide("indexDepartments", indexDepartments);
	provide("currentCarrer", currentCarrer);
	provide("detailLevel", detailLevel);
	provide("levels", levels);
};
