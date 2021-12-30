import { ref, inject } from "vue";
import { DAYS } from "../constants/days";
import { HOURS } from "../constants/hours";

export function useScheduleTime() {
	const currentDepartment = (inject("currentDepartment") as string).toUpperCase();
	const days = ref(DAYS[currentDepartment]);
	const hours = ref(HOURS[currentDepartment]);

	const semanticDays = () => [""].concat(days.value.map(converToSemanticDay));

	const converToSemanticDay = (day: string) => day.slice(0, 3).toUpperCase();

	const semanticHours = () => hours.value.map(convertToSemanticHour);

	const convertToSemanticHour = (hour: string) =>
		hour.slice(0, hour.length > 3 ? 2 : 1) + ":" + hour.slice(-2);

	const nextHourByStep = (hour: string, step: number) => hours.value[hours.value.indexOf(hour) + step];

	return {
		hours,
		semanticHours: semanticHours(),
		nextHourByStep,
		days,
		semanticDays: semanticDays(),
	};
}
