import { provide } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

export function useDepartment() {
	const { params } = useRoute();
	const store = useStore();
	const currentDepartment = params.department as string;

	store.dispatch("departments/actionGetDepartment", currentDepartment);

	provide("currentDepartment", currentDepartment);

	return {};
}
