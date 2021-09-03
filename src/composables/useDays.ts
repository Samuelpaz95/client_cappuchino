import { ref } from "vue";
import { DAYS } from "../enums/days";

export function useDays() {
	const days = ref(DAYS);

	const semanticDays = () => {
		const semanticDays = days.value.map((day) => day.slice(0, 3).toUpperCase());
		semanticDays.unshift("");
		return semanticDays;
	};

	const compareDays = (day: string, semanticDay: string) => semanticDay.slice(0, 2) == day;

	return { days, semanticDays: semanticDays(), compareDays };
}
