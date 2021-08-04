import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { IdepartementCarrer, Icarrer } from "../../interfaces";
import departmentService from "../../services/departments";
import { router } from "../../router";

const state = () => ({
	departmentInfo: {} as { name: string; code: string },
	indexCarrersInfo: [] as IdepartementCarrer[],
	selectCarrer: null as Icarrer | null,
	nameCarrer: "",
});

type RootState = ReturnType<typeof state>;

const getters: GetterTree<RootState, RootState> = {
	departmentInfo: (state) => state.departmentInfo,
	indexCarrersInfo: (state) => state.indexCarrersInfo,
	selectCarrer: (state) => state.selectCarrer,
	nameCarrer: (state) => state.nameCarrer,
};

const mutations: MutationTree<RootState> = {
	mutationDepartmentInfo: (state, payload: { name: string; code: string }) =>
		(state.departmentInfo = payload),
	mutationIndexCarrersInfo: (state, payload: IdepartementCarrer[]) => (state.indexCarrersInfo = payload),
	mutationSelectCarrer: (state, payload: Icarrer | null) => (state.selectCarrer = payload),
	mutationNameCarrer: (state, payload: string) => (state.nameCarrer = payload),
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
		commit("mutationDepartmentInfo", {
			name: actualDepartment?.name,
			code: departmentName,
		});
		dispatch("actionGetIndexDepartmentCarrers", departmentName);
	},
	actionGetIndexDepartmentCarrers: async (
		{ commit }: ActionContext<RootState, RootState>,
		department: string
	) => {
		const departementCarrers = await departmentService.getDepartmentCarrers(department);
		commit("mutationIndexCarrersInfo", departementCarrers);
	},

	actionGetDepartmentCarrer: async (
		{ commit, state }: ActionContext<RootState, RootState>,
		nameCarrer: string
	) => {
		const indexCarrer = state.indexCarrersInfo.find(({ name }) => nameCarrer == name);
		if (indexCarrer) {
			const carrer = await departmentService.getDepartmentCarrer(state.departmentInfo.code, indexCarrer.code);
			commit("mutationSelectCarrer", carrer);
			commit("mutationNameCarrer", indexCarrer.name);
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
