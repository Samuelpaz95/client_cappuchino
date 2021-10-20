import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

import { scheduleSubject, scheduleMap } from "../interfaces";

export function useSchedulesTable() {
	const store = useStore();

	const schedules: ComputedRef<scheduleMap> = computed(() => {
		const scheduleSubjects: scheduleSubject[] = store.getters["scheduleSubjects/scheduleSubjects"];

		const schedulesTable: scheduleMap = {};
		scheduleSubjects.forEach((scheduleSubject) => {
			scheduleSubject.schedule.forEach((subjectSchedule) => {
				const { schedule, ...subject } = scheduleSubject;
				if (!schedulesTable[subjectSchedule.day + subjectSchedule.start]) {
					schedulesTable[subjectSchedule.day + subjectSchedule.start] = [
						{
							...subject,
							...subjectSchedule,
						},
					];
				} else {
					schedulesTable[subjectSchedule.day + subjectSchedule.start].push({
						...subject,
						...subjectSchedule,
					});
				}
			});
		});

		return schedulesTable;
	});

	return { schedules };
}
