import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";
import { useScheduleTime } from "./useScheduleTime";
import { scheduleSubject, scheduleMap, schedule } from "../interfaces";
import { copyObject } from "../utils/copyObject";

export function useSchedulesTable() {
	const store = useStore();
	const { days, hours, nextHourByStep } = useScheduleTime();

	const schedules: ComputedRef<scheduleMap> = computed(() => {
		const scheduleSubjects: scheduleSubject[] = store.getters["scheduleSubjects/scheduleSubjects"];
		const schedulesTable: scheduleMap = copyObject(emptyScheduleTable);

		scheduleSubjects.forEach((scheduleSubject) => {
			const { schedule: schedules, ...subject } = scheduleSubject;
			schedules.forEach((schedule) => {
				schedule.start = schedule.start.length == 3 ? "0" + schedule.start : schedule.start;
				const actualSchedule = schedulesTable[schedule.day + schedule.start];

				const isConflictive = isConfictive(schedulesTable, schedule);
				if (!isConflictive) {
					actualSchedule.schedules.push({ ...subject, ...schedule });
					actualSchedule.duration = schedule.duration;
					updateDurationOfCellsInTable(schedulesTable, schedule);
				} else if (actualSchedule.duration == schedule.duration) {
					actualSchedule.schedules.push({ ...subject, ...schedule });
					actualSchedule.isConfictive = true;
				}
			});
		});

		return schedulesTable;
	});

	const isConfictive = (schedulesTable: scheduleMap, { day, duration, start }: schedule): boolean => {
		for (let i = 0; i < duration; i++) {
			const nextHour = nextHourByStep(start, i);
			if (schedulesTable[day + nextHour].duration != 1 || schedulesTable[day + start].schedules.length > 0)
				return true;
		}
		return false;
	};

	const updateDurationOfCellsInTable = (
		schedulesTable: scheduleMap,
		{ day, duration, start }: schedule
	): void => {
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
	const emptyScheduleTable: scheduleMap = buildScheduleMap();

	return { schedules };
}
