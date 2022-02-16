import { ref, Ref, provide, computed, ComputedRef, onUnmounted } from "vue";
import { useStore } from "vuex";
import {
	CAPPUCHINO_CURRENT_CARRER,
	CAPPUCHINO_DETAIL_CARRER,
	CAPPUCHINO_FETCH_DEPARTMENT,
	CAPPUCHINO_INDEX_DEPARTMENTS,
	CAPPUCHINO_LEVELS,
} from "../../constants/composables";
import { Icarrer, IdepartementCarrer, level, subjects } from "../../interfaces";
import departmentService from "../../services/departments";

export const useCappuchino = (department: string) => {
	let indexDepartments: Ref<IdepartementCarrer[] | null> = ref(null);
	let currentCarrer: Ref<Icarrer | null> = ref(null);

	(async () => {
		indexDepartments.value = await departmentService.getDepartmentCarrers(department);
	})();

	const fetchDepartmentCarrer = async (nameCarrer: string) => {
		const indexCarrer = indexDepartments.value?.find(({ name }) => nameCarrer == name);
		if (indexCarrer) {
			currentCarrer.value = null;
			currentCarrer.value = await departmentService.getDepartmentCarrer(department, indexCarrer.code);
		}
	};

	const detailLevel = (codeLevel: string): subjects | undefined => {
		const level = currentCarrer.value?.levels.find((level: level) => level.code == codeLevel);
		return level ? level.subjects : undefined;
	};

	const levels: ComputedRef<string[]> = computed(() => {
		return currentCarrer.value?.levels ? currentCarrer.value?.levels.map((level: level) => level.code) : [];
	});

	onUnmounted(() => {
		const store = useStore();
		store.commit("scheduleSubjects/removeAllScheduleSubjects");
	});

	provide(CAPPUCHINO_FETCH_DEPARTMENT, fetchDepartmentCarrer);
	provide(CAPPUCHINO_INDEX_DEPARTMENTS, indexDepartments);
	provide(CAPPUCHINO_CURRENT_CARRER, currentCarrer);
	provide(CAPPUCHINO_DETAIL_CARRER, detailLevel);
	provide(CAPPUCHINO_LEVELS, levels);
};
