import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import departmentService from "../../services/departments";
import { router } from "../../router";

const state = () => ({
	departmentName: "",
	carrers: [],
});

type RootState = ReturnType<typeof state>;

const getters: GetterTree<RootState, RootState> = {
	departmentName: (state) => state.departmentName,
	carrers: (state) => state.carrers,
};

const mutations: MutationTree<RootState> = {
	mutationDepartmentName: (state, payload: string) => (state.departmentName = payload),
	mutationCarrers: (state, payload: []) => (state.carrers = payload),
};

const actions: ActionTree<RootState, RootState> = {
	actionGetDepartmentDescription: async (
		{ commit }: ActionContext<RootState, RootState>,
		departmentName: string
	): Promise<void> => {
		const response = await departmentService.getAllDepartments();
		const actualDepartment = response?.find((department) => department.semanticName === departmentName);
		if (!actualDepartment) {
			router.push({ name: "404" });
		}
		commit("mutationDepartmentName", actualDepartment?.name);
	},
	actionGetCarrers: async ({ commit }: ActionContext<RootState, RootState>) => {},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
