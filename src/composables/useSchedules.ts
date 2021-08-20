import { computed, ComputedRef } from "vue";
import { useStore } from "vuex";

import { scheduleSubject } from "../interfaces";

export function useSchedules() {
	const store = useStore();

	const schedules: ComputedRef<scheduleSubject[]> = computed(
		() => store.getters["scheduleSubjects/scheduleSubjects"]
	);

	return { schedules };
}
