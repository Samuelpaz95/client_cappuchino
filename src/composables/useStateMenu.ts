import { provide, readonly, ref, Ref, watchEffect } from "vue";

import { mediaQueries, mapLevels } from "../constants";
import { useMediaQueries } from "./useMediaQueries";

export function useStateMenu() {
	const { listenMediaQuery } = useMediaQueries();

	const isInDesktop = ref(false);
	const isOpenMenu = ref(isInDesktop.value);
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

	listenMediaQuery(mediaQueries.isLarge, (evt) => {
		isInDesktop.value = evt.matches;
	});

	watchEffect(() => {
		isOpenMenu.value = isInDesktop.value || isOpenMenu.value;
	});

	provide("isOpenMenu", readonly(isOpenMenu));
	provide("isInCarrers", readonly(isInCarrers));
	provide("selectCarrer", readonly(selectCarrer));
	provide("selectLevel", readonly(selectLevel));
	provide("isInDesktop", readonly(isInDesktop));

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
