import { ref, inject } from "vue";
import { DAYS, HOURS } from "../../constants";
import { DEPARTMENT_CURRENT } from "../../constants/composables";

export function useScheduleTime() {
	const currentDepartment = (inject(DEPARTMENT_CURRENT) as string).toUpperCase();
	const days = ref(DAYS[currentDepartment]);
	const hours = ref(HOURS[currentDepartment]);

	const semanticDays = () => [""].concat(days.value.map(converToSemanticDay));

	const converToSemanticDay = (day: string) => day.slice(0, 3).toUpperCase();

	const semanticHours = () => hours.value.map(convertToSemanticHour);

	const transformHoursToSemanticHours = (h: string[]) => h.map(convertToSemanticHour);

	const convertToSemanticHour = (hour: string) =>
		hour.slice(0, hour.length > 3 ? 2 : 1) + ":" + hour.slice(-2);

	const nextHourByStep = (hour: string, step: number) => hours.value[hours.value.indexOf(hour) + step];

	return {
		hours,
		semanticHours: semanticHours(),
		transformHoursToSemanticHours,
		nextHourByStep,
		days,
		semanticDays: semanticDays(),
	};
}
