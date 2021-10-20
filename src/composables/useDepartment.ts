import { useRoute } from "vue-router";
import { useStore } from "vuex";

export function useDepartment() {
	const { params } = useRoute();
	const store = useStore();

	const fetchDepartmentData = async () => {
		const currentDepartment = params.department;
		await store.dispatch("departments/actionGetDepartment", currentDepartment);
	};

	return {
		fetchDepartmentData,
	};
}
