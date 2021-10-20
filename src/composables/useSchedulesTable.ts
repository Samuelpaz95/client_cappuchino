import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { useScheduleTime } from "./useScheduleTime";
import { scheduleSubject, scheduleMap } from "../interfaces";

export function useSchedulesTable() {
	const store = useStore();
	const { days, hours } = useScheduleTime();

	const schedules: ComputedRef<scheduleMap> = computed(() => {
		const scheduleSubjects: scheduleSubject[] = store.getters["scheduleSubjects/scheduleSubjects"];
		const schedulesTable: scheduleMap = buildScheduleMap();

		scheduleSubjects.forEach((scheduleSubject) => {
			const { schedule: schedules, ...subject } = scheduleSubject;
			schedules.forEach((schedule) => {
				schedulesTable[schedule.day + schedule.start].schedules.push({ ...subject, ...schedule });
			});
		});

		return schedulesTable;
	});

	const buildScheduleMap = (): scheduleMap => {
		const schedulesTable: scheduleMap = {};
		days.value.forEach((day) => {
			hours.value.forEach((hour) => {
				schedulesTable[day.slice(0, 2).toUpperCase() + hour] = {
					schedules: [],
					duration: 1,
					isConfictive: false,
				};
			});
		});

		return schedulesTable;
	};

	return { schedules };
}
