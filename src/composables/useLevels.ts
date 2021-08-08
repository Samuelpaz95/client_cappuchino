import { computed, ComputedRef, ref, Ref } from "vue";
import { useStore } from "vuex";
import { mapLevels } from "../enums/levels";
import { subjects, level } from "../interfaces";

export function useLevels() {
	const store = useStore();
	const levelSelect: Ref<string | null> = ref(null);

	const isLevelSelect: ComputedRef<boolean> = computed(() => levelSelect.value != null);

	const setLevel = (level: string | null): void => {
		levelSelect.value = level;
	};

	const getSemester = (level: string): string => mapLevels[level];

	const formatLevel: ComputedRef<string> = computed(() =>
		levelSelect.value != null ? getSemester(levelSelect.value).toUpperCase() : ""
	);

	const detailLevel = (level: string): subjects | undefined =>
		store.getters["departments/levelSelectCarrer"](level);

	const levels: ComputedRef<string | undefined> = computed(() =>
		store.getters["departments/selectCarrer"]?.levels.map((level: level) => level.code)
	);

	return {
		levels,
		detailLevel,
		levelSelect,
		formatLevel,
		setLevel,
		getSemester,
		isLevelSelect,
	};
}
