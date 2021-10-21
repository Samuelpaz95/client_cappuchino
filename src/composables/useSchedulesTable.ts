import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { useScheduleTime } from "./useScheduleTime";
import { scheduleSubject, scheduleMap, schedule } from "../interfaces";

export function useSchedulesTable() {
	const store = useStore();
	const { days, hours, nextHourByStep } = useScheduleTime();

	const schedules: ComputedRef<scheduleMap> = computed(() => {
		const scheduleSubjects: scheduleSubject[] = store.getters["scheduleSubjects/scheduleSubjects"];
		// Se crea el objeto en cada busqueda :'v
		const schedulesTable: scheduleMap = buildScheduleMap();

		scheduleSubjects.forEach((scheduleSubject) => {
			const { schedule: schedules, ...subject } = scheduleSubject;
			schedules.forEach((schedule) => {
				const isConflictive = isConfictive(schedulesTable, schedule);
				if (!isConflictive) {
					schedulesTable[schedule.day + schedule.start].schedules.push({ ...subject, ...schedule });
					schedulesTable[schedule.day + schedule.start].duration = schedule.duration;
					updateDuration(schedulesTable, schedule);
				} else {
					//TODO: processing conflicts
				}
			});
		});

		return schedulesTable;
	});

	const isConfictive = (schedulesTable: scheduleMap, { day, duration, start }: schedule): boolean => {
		for (let i = 1; i < duration; i++) {
			const nextHour = nextHourByStep(start, i);
			if (schedulesTable[day + nextHour].duration != 1) return true;
		}
		return false;
	};

	const updateDuration = (schedulesTable: scheduleMap, { day, duration, start }: schedule): void => {
		for (let i = 1; i < duration; i++) {
			const nextHour = nextHourByStep(start, i);
			schedulesTable[day + nextHour].duration = 0;
		}
	};

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
