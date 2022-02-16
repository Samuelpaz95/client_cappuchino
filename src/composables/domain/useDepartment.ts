import { ref, Ref, provide, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Idepartment } from "../../interfaces";
import departmentService from "../../services/departments";

export function useDepartment() {
	const { params } = useRoute();
	const router = useRouter();
	const currentDepartment = params.department as string;
	const departmentInfo: Ref<Idepartment | null> = ref(null);

	const verifyDepartment = async () => {
		const response = await departmentService.getAllDepartments();
		const actualDepartment = response?.find((department) => department.semanticName === currentDepartment);
		if (!actualDepartment) {
			router.push({ name: "404" });
		} else {
			departmentInfo.value = actualDepartment;
		}
	};

	onMounted(async () => {
		await verifyDepartment();
	});

	provide("currentDepartment", currentDepartment);
	provide("departmentInfo", departmentInfo);
	provide("verifyDepartment", verifyDepartment);

	return { currentDepartment };
}
