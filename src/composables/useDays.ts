import { ref } from "vue";
import { DAYS } from "../enums/days";

export function useDays() {
	const days = ref(DAYS);

	const semanticDays = () => days.value.map((day) => day.slice(0, 3).toUpperCase());

	return { days, semanticDays: semanticDays() };
}
