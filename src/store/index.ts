import { createStore } from "vuex";

import scheduleSubjects from "./modules/scheduleSubjects";

const store = createStore({
	modules: {
		scheduleSubjects,
	},
});

export { store };
