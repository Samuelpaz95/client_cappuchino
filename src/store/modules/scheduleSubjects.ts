import { ActionContext, ActionTree, GetterTree, MutationTree } from "vuex";
import { scheduleSubject } from "../../interfaces";
import { nameTeacher } from "../../utils/getNameTeacherClass";

const SCHEDULE_ITEM = "SCESI_SCHEDULE";

const state = () => ({
	scheduleSubjects: [] as scheduleSubject[],
});

type actualState = ReturnType<typeof state>;

const getters: GetterTree<actualState, unknown> = {
	scheduleSubjects: (state) => state.scheduleSubjects,
	keyScheduleSubjects: (state) => state.scheduleSubjects.map((group) => group.groupCode + nameTeacher(group)),
};

const mutations: MutationTree<actualState> = {
	addScheduleSubjects: (state, payload: scheduleSubject) => state.scheduleSubjects.push(payload),
	mutationScheduleSubjects: (state, payload: scheduleSubject[]) => (state.scheduleSubjects = payload),
	removeScheduleSubjects: (state, payload: string) => {
		state.scheduleSubjects = state.scheduleSubjects.filter(
			(scheduleSubject) => scheduleSubject.key != payload
		);
	},
	removeAllScheduleSubjects: (state) => (state.scheduleSubjects = []),
};

const actions: ActionTree<actualState, unknown> = {
	saveSchedule: ({ state }: ActionContext<actualState, unknown>) => {
		if (state.scheduleSubjects.length === 0) return;
		const data = JSON.stringify(state.scheduleSubjects);
		localStorage.setItem(SCHEDULE_ITEM, data);
	},
	loadSchedule: ({ commit }: ActionContext<actualState, unknown>) => {
		const schedules = JSON.parse(localStorage.getItem(SCHEDULE_ITEM) || "");
		if (
			!(
				schedules &&
				schedules[0].key > -1 &&
				schedules[0].subjectName &&
				schedules[0].groupCode &&
				schedules[0].schedule.length > 0
			)
		)
			return;
		commit("mutationScheduleSubjects", schedules);
	},
};

export default {
	namespaced: true,
	state,
	getters,
	mutations,
	actions,
};
