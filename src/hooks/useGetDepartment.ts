import { onMounted } from "vue";
import { useStore } from "vuex";

export function useGetDepartment(department: string | string[]) {
	const store = useStore();
	onMounted(async () => {
		await store.dispatch("departments/actionGetDepartmentDescription", department);
	});
}
