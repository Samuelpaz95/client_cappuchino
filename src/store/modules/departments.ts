import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { IdepartementCarrer } from "../../interfaces";
import departmentService from "../../services/departments";
import { router } from "../../router";

const state = () => ({
	departmentName: "",
	indexCarrersInfo: [] as IdepartementCarrer[],
	carrers: [],
});

type RootState = ReturnType<typeof state>;

const getters: GetterTree<RootState, RootState> = {
	departmentName: (state) => state.departmentName,
	indexCarrersInfo: (state) => state.indexCarrersInfo,
	carrers: (state) => state.carrers,
};

const mutations: MutationTree<RootState> = {
	mutationDepartmentName: (state, payload: string) => (state.departmentName = payload),
	mutationIndexCarrersInfo: (state, payload: IdepartementCarrer[]) => (state.indexCarrersInfo = payload),
	mutationCarrers: (state, payload: []) => (state.carrers = payload),
};

const actions: ActionTree<RootState, RootState> = {
	actionGetDepartment: async (
		{ commit, dispatch }: ActionContext<RootState, RootState>,
		departmentName: string
	): Promise<void> => {
		const response = await departmentService.getAllDepartments();
		const actualDepartment = response?.find((department) => department.semanticName === departmentName);
		if (!actualDepartment) {
			router.push({ name: "404" });
		}
		commit("mutationDepartmentName", actualDepartment?.name);
		dispatch("actionGetIndexDepartmentCarrers", departmentName);
	},
	actionGetIndexDepartmentCarrers: async (
		{ commit }: ActionContext<RootState, RootState>,
		department: string
	) => {
		const departementCarrers = await departmentService.getDepartmentCarrers(department);
		commit("mutationIndexCarrersInfo", departementCarrers);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
