import { ref, Ref, provide } from "vue";
import { useRoute, useRouter } from "vue-router";
import { DEPARTMENT_CURRENT, DEPARTMENT_INFO } from "../../constants/composables";
import { Idepartment } from "../../interfaces";
import departmentService from "../../services/departments";

export function useDepartment() {
	const { params } = useRoute();
	const router = useRouter();
	const currentDepartment = params.department as string;
	const departmentInfo: Ref<Idepartment | null> = ref(null);

	(async () => {
		const response = await departmentService.getAllDepartments();
		const actualDepartment = response?.find((department) => department.semanticName === currentDepartment);
		if (!actualDepartment) router.push({ name: "404" });
		else departmentInfo.value = actualDepartment;
	})();

	provide(DEPARTMENT_CURRENT, currentDepartment);
	provide(DEPARTMENT_INFO, departmentInfo);

	return { currentDepartment };
}
