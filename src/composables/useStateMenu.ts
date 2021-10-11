import { provide, readonly, ref, Ref } from "vue";

import { mapLevels } from "../enums/levels";

export function useStateMenu() {
	const isOpenMenu = ref(false);
	const isInCarrers = ref(true);
	const selectCarrer: Ref<string | null> = ref(null);
	const selectLevel: Ref<string | null> = ref(null);

	const updateOpenMenu = (openMenu: boolean) => {
		isOpenMenu.value = openMenu;
	};

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

	const formatLevel = (level: string) => mapLevels[level];

	provide("isOpenMenu", readonly(isOpenMenu));
	provide("isInCarrers", readonly(isInCarrers));
	provide("selectCarrer", readonly(selectCarrer));
	provide("selectLevel", readonly(selectLevel));

	provide("updateOpenMenu", updateOpenMenu);
	provide("updateInCarrers", updateInCarrers);
	provide("updateSelectCarrer", updateSelectCarrer);
	provide("updateSelectLevel", updateSelectLevel);

	provide("formatLevel", formatLevel);

	return {
		isOpenMenu,
		isInCarrers,
	};
}
