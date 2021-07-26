import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";

const state = () => ({
	schedulesTeacher: [],
	allTeachers: [] as string[],
});

type RootState = ReturnType<typeof state>;

const getters: GetterTree<RootState, RootState> = {
	schedulesTeacher: (state) => state.schedulesTeacher,
	allTeachers: (state) => state.allTeachers,
};

const mutations: MutationTree<RootState> = {
	mutationSchedules: (state, payload: []) => (state.schedulesTeacher = payload),
	mutationAllTeachers: (state, payload: string[]) => (state.allTeachers = payload),
};

const actions: ActionTree<RootState, RootState> = {};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
