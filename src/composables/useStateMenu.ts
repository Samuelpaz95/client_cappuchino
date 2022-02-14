import { provide, readonly, ref, Ref } from "vue";

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

	provide("isInCarrers", readonly(isInCarrers));
	provide("selectCarrer", readonly(selectCarrer));
	provide("selectLevel", readonly(selectLevel));

	provide("updateInCarrers", updateInCarrers);
	provide("updateSelectCarrer", updateSelectCarrer);
	provide("updateSelectLevel", updateSelectLevel);

	return {
		isInCarrers,
	};
}
