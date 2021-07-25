import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";

const state = () => ({
	carrers: [],
});

type RootState = ReturnType<typeof state>;

const getters: GetterTree<RootState, RootState> = {
	carrers: (state) => state.carrers,
};

const mutations: MutationTree<RootState> = {
	mutationCarrers: (state, payload: []) => (state.carrers = payload),
};

const actions: ActionTree<RootState, RootState> = {
	actionGetCarrers: async ({ commit }: ActionContext<RootState, RootState>) => {
		try {
			commit("mutationCarrers", []);
		} catch (error) {
			console.error(error);
			commit("mutationCarrers", []);
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
