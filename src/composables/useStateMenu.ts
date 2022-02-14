import { provide, readonly, ref, Ref } from "vue";

import { MAP_LEVELS } from "../constants";

export function useStateMenu() {
	const isInCarrers = ref(true);
	const selectCarrer: Ref<string | null> = ref(null);
	const selectLevel: Ref<string | null> = ref(null);

	const updateInCarrers = (inCarrers: boolean) => {
		isInCarrers.value = inCarrers;
	};

	const updateSelectCarrer = (carrer: string | null) => {
		selectCarrer.value = carrer ? carrer.toUpperCase() : carrer;
		selectLevel.value = null;
	};

	const updateSelectLevel = (level: string | null) => {
		selectLevel.value = level;
	};

	const formatLevel = (level: string) => MAP_LEVELS[level];

	provide("isInCarrers", readonly(isInCarrers));
	provide("selectCarrer", readonly(selectCarrer));
	provide("selectLevel", readonly(selectLevel));

	provide("updateInCarrers", updateInCarrers);
	provide("updateSelectCarrer", updateSelectCarrer);
	provide("updateSelectLevel", updateSelectLevel);

	provide("formatLevel", formatLevel);

	return {
		isInCarrers,
	};
}
