import { ref, onMounted, Ref, inject, watch } from "vue";
import { mediaQueries } from "../enums/mediaQueries";
import { useMediaQueries } from "./useMediaQueries";

export function useScheudleHeight(counterHeight: number = 0) {
	let scheduleHeight: Ref<number | undefined> = ref(undefined);
	let heightList = ref("");
	const { listenMediaQuery } = useMediaQueries();
	const groupsSelect = inject("groupsSelect") as Ref<String[]>;

	const readScheduleHeight = () => {
		const element = document.getElementById("schedule-table");
		return element?.clientHeight;
	};

	onMounted(() => {
		scheduleHeight.value = readScheduleHeight();

		listenMediaQuery(mediaQueries.isLarge, (evt) => {
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
