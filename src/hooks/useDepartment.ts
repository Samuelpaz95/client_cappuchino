import { onMounted } from "vue";
import { useStore } from "vuex";

export function useDepartment(department: string | string[]) {
	const store = useStore();
	onMounted(async () => {
		await store.dispatch("departments/actionGetDepartment", department);
	});
}
