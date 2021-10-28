import { useRoute } from "vue-router";
import { useStore } from "vuex";

export function useDepartment() {
	const { params } = useRoute();
	const store = useStore();
	const currentDepartment = params.department as string;

	const fetchDepartmentData = async () => {
		await store.dispatch("departments/actionGetDepartment", currentDepartment);
	};

	return {
		currentDepartment: currentDepartment.toUpperCase(),
		fetchDepartmentData,
	};
}
