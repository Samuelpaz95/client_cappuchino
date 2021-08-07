import { computed, ComputedRef, ref, Ref } from "vue";
import { useStore } from "vuex";
import { mapLevels } from "@/enums/levels";
import { subjects } from "../interfaces";

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

	const detailLevel: ComputedRef<subjects | undefined> = computed(() =>
		store.getters["departments/levelSelectCarrer"](levelSelect.value)
	);

	const levels: ComputedRef<string | undefined> = computed(() => store.getters["departments/levelCodes"]);

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
