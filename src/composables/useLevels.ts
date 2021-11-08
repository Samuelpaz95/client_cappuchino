import { computed, ComputedRef, inject, Ref } from "vue";
import { subjects, level, Icarrer } from "../interfaces";
//TODO: move to cappuchino
export function useLevels() {
	const detailLevel = (codeLevel: string): subjects | undefined => {
		const carrer = inject("currentCarrer") as Ref<Icarrer>;
		const level = carrer.value?.levels.find((level: level) => level.code == codeLevel);
		return level ? level.subjects : undefined;
	};

	const levels: ComputedRef<string[]> = computed(() => {
		const carrer = inject("currentCarrer") as Ref<Icarrer>;
		const data: string[] | undefined = carrer.value?.levels.map((level: level) => level.code);
		return data ? data : [];
	});

	return {
		levels,
		detailLevel,
	};
}
