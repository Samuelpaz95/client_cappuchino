import { useRoute } from "vue-router";
import { useStore } from "vuex";

export function useDepartment() {
	const { params } = useRoute();
	const store = useStore();

	const fetchDepartmentData = async () => {
		await store.dispatch("departments/actionGetDepartment", params.department);
	};

	return {
		fetchDepartmentData,
	};
}
