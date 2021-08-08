import { computed, ComputedRef, readonly, ref, Ref } from "vue";
import { useStore } from "vuex";
import { mapLevels } from "../enums/levels";
import { subjects, level } from "../interfaces";

export function useLevels() {
	const levelSelect: Ref<string | null> = ref(null);

	const isLevelSelect: ComputedRef<boolean> = computed(() => levelSelect.value != null);

	const setLevel = (level: string | null): void => {
		levelSelect.value = level;
	};

	const formatLevel: ComputedRef<string> = computed(() =>
		levelSelect.value != null ? getSemester(levelSelect.value).toUpperCase() : ""
	);

	const getSemester = (level: string): string => mapLevels[level];

	const store = useStore();

	const detailLevel = (codeLevel: string): subjects | undefined => {
		const level = store.getters["departments/selectCarrer"]?.levels.find(
			(level: level) => level.code == codeLevel
		);
		return level ? level.subjects : undefined;
	};

	const levels: ComputedRef<string | undefined> = computed(() =>
		store.getters["departments/selectCarrer"]?.levels.map((level: level) => level.code)
	);

	return {
		levels,
		detailLevel,
		actualLevel: readonly(levelSelect),
		formatLevel,
		setLevel,
		getSemester,
		isLevelSelect,
	};
}
