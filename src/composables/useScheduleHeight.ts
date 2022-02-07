import { ref, onMounted, Ref, inject, watch, computed } from "vue";
import { useStore } from "vuex";
import { MEDIA_QUERIES } from "../constants";
import { useMediaQueries } from "./useMediaQueries";

export function useScheudleHeight(counterHeight: number = 0) {
	const store = useStore();
	let scheduleHeight: Ref<number | undefined> = ref(undefined);
	let heightList = ref("");
	const { listenMediaQuery } = useMediaQueries();
	const groupsSelect = computed(() => store.getters["scheduleSubjects/keyScheduleSubjects"]);

	const readScheduleHeight = () => {
		const element = document.getElementById("schedule-table");
		return element?.clientHeight;
	};

	onMounted(() => {
		scheduleHeight.value = readScheduleHeight();

		listenMediaQuery(MEDIA_QUERIES.isLarge, (evt) => {
			heightList.value =
				evt.matches && scheduleHeight.value ? `height: ${scheduleHeight.value - counterHeight}px;` : "";
		});
	});

	watch(
		() => groupsSelect.value.length,
		() => {
			setTimeout(() => {
				scheduleHeight.value = readScheduleHeight();
				heightList.value =
					heightList.value.length > 0 && scheduleHeight.value
						? `height: ${scheduleHeight.value - counterHeight}px;`
						: "";
			}, 30);
		}
	);

	return {
		heightList,
	};
}
