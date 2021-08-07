import { computed, ComputedRef, ref, Ref } from "vue";
import { useStore } from "vuex";
import { mapLevels } from "@/enums/levels";
import { subjects } from "../interfaces";

export function useLevels() {
	const store = useStore();
	const levelSelect: Ref<string | null> = ref(null);

	const showLevel = (level: string | null) => {
		levelSelect.value = level;
	};

	const getSemester = (level: string) => mapLevels[level];

	const formatLevel = computed(() =>
		levelSelect.value != null ? getSemester(levelSelect.value).toUpperCase() : ""
	);

	const detailLevel: ComputedRef<subjects | undefined> = computed(() =>
		store.getters["departments/levelSelectCarrer"](levelSelect.value)
	);

	const levels = computed(() => store.getters["departments/levelsSelectCarrer"]);

	return {
		levels,
		detailLevel,
		levelSelect,
		formatLevel,
		showLevel,
		getSemester,
	};
}
