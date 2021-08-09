import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { IdepartementCarrer, Icarrer, level, subjects } from "../../interfaces";
import departmentService from "../../services/departments";
import { router } from "../../router";

const state = () => ({
	departmentInfo: {} as { name: string; code: string },
	indexCarrersInfo: [] as IdepartementCarrer[],
	selectCarrer: null as Icarrer | null,
});

type actualState = ReturnType<typeof state>;

const getters: GetterTree<actualState, unknown> = {
	departmentInfo: (state) => state.departmentInfo,
	indexCarrersInfo: (state) => state.indexCarrersInfo,
	selectCarrer: (state) => state.selectCarrer,
};

const mutations: MutationTree<actualState> = {
	mutationDepartmentInfo: (state, payload: { name: string; code: string }) =>
		(state.departmentInfo = payload),
	mutationIndexCarrersInfo: (state, payload: IdepartementCarrer[]) => (state.indexCarrersInfo = payload),
	mutationSelectCarrer: (state, payload: Icarrer | null) => (state.selectCarrer = payload),
};

const actions: ActionTree<actualState, unknown> = {
	actionGetDepartment: async (
		{ commit, dispatch }: ActionContext<actualState, unknown>,
		departmentName: string
	): Promise<void> => {
		const response = await departmentService.getAllDepartments();
		const actualDepartment = response?.find((department) => department.semanticName === departmentName);
		if (!actualDepartment) {
			router.push({ name: "404" });
		}
		commit("mutationDepartmentInfo", {
			name: actualDepartment?.name,
			code: departmentName,
		});
		dispatch("actionGetIndexDepartmentCarrers", departmentName);
	},
	actionGetIndexDepartmentCarrers: async (
		{ commit }: ActionContext<actualState, unknown>,
		department: string
	) => {
		const departementCarrers = await departmentService.getDepartmentCarrers(department);
		commit("mutationIndexCarrersInfo", departementCarrers);
	},

	actionGetDepartmentCarrer: async (
		{ commit, state }: ActionContext<actualState, unknown>,
		nameCarrer: string
	): Promise<void> => {
		const indexCarrer = state.indexCarrersInfo.find(({ name }) => nameCarrer == name);
		if (indexCarrer) {
			const carrer = await departmentService.getDepartmentCarrer(state.departmentInfo.code, indexCarrer.code);
			commit("mutationSelectCarrer", carrer);
		}
	},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
