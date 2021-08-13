import { ref } from "vue";
import { DAYS } from "../enums/days";

export function useDays() {
	const days = ref(DAYS);

	const semanticDays = () => {
		const semanticDays = days.value.map((day) => day.slice(0, 3).toUpperCase());
		semanticDays.unshift("");
		return semanticDays;
	};

	return { days, semanticDays: semanticDays() };
}
