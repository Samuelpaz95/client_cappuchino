import { computed } from "vue";
import { useStore } from "vuex";

export function useSchedules() {
	const store = useStore();

	const schedules = computed(() => store.getters["scheduleSubjects/scheduleSubjects"]);

	return { schedules };
}
