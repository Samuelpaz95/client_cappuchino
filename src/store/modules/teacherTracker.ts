import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";

const state = () => ({
	allTeachers: [] as string[],
});

type RootState = ReturnType<typeof state>;

const getters: GetterTree<RootState, RootState> = {
	allTeachers: (state) => state.allTeachers,
};

const mutations: MutationTree<RootState> = {
	mutationAllTeachers: (state, payload: string[]) => (state.allTeachers = payload),
};

const actions: ActionTree<RootState, RootState> = {
	actionGetScheludesByTeacher: async (
		{ commit }: ActionContext<RootState, RootState>,
		nameTeacher: string
	) => {},

	actionGetAllTeachers: async ({ commit }: ActionContext<RootState, RootState>, department: string) => {},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
