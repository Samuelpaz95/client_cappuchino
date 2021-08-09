import { GetterTree, MutationTree } from "vuex";
import { scheduleSubject } from "../../interfaces";

const state = () => ({
	scheduleSubjects: [] as scheduleSubject[],
});

type actualState = ReturnType<typeof state>;

const getters: GetterTree<actualState, unknown> = {
	scheduleSubjects: (state) => state.scheduleSubjects,
};

const mutations: MutationTree<actualState> = {
	addScheduleSubjects: (state, payload: scheduleSubject) => state.scheduleSubjects.push(payload),
	removeScheduleSubjects: (state, payload: string) => {
		state.scheduleSubjects = state.scheduleSubjects.filter(
			(scheduleSubject) => scheduleSubject.key != payload
		);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
};
