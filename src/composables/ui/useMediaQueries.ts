import { ref, Ref, onBeforeUnmount } from "vue";

type callbackMediaQuery = (evt: MediaQueryListEvent | MediaQueryList) => unknown;

export const useMediaQueries = () => {
	const listeners: Ref<{ m: MediaQueryList; c: callbackMediaQuery }[]> = ref([]);

	const listenMediaQuery = (mediaQuery: MediaQueryList, callback: callbackMediaQuery) => {
		listeners.value.push({ m: mediaQuery, c: callback });
		mediaQuery.addEventListener("change", callback);
		callback(mediaQuery);
	};

	onBeforeUnmount(() => {
		listeners.value.forEach(({ m, c }) => {
			m.removeEventListener("change", c);
		});
	});

	return { listenMediaQuery };
};
