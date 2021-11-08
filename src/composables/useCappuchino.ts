import { ref, Ref, provide } from "vue";
import { Icarrer, IdepartementCarrer } from "../interfaces";
import departmentService from "../services/departments";

export const useCappuchino = (department: string) => {
	let indexDepartments: Ref<IdepartementCarrer[] | null> = ref(null);
	let currentCarrer: Ref<Icarrer | null> = ref(null);

	(async () => {
		indexDepartments.value = await departmentService.getDepartmentCarrers(department);
	})();

	const fetchDepartmentCarrer = async (nameCarrer: string) => {
		const indexCarrer = indexDepartments.value?.find(({ name }) => nameCarrer == name);
		if (indexCarrer) {
			currentCarrer.value = await departmentService.getDepartmentCarrer(department, indexCarrer.code);
		}
	};

	provide("fetchDepartmentCarrer", fetchDepartmentCarrer);
	provide("indexDepartments", indexDepartments);
	provide("currentCarrer", currentCarrer);
};
