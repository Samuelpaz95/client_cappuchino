import { createStore } from "vuex";

import departments from "./modules/departments";
import scheduleSubjects from "./modules/scheduleSubjects";

const store = createStore({
	modules: {
		scheduleSubjects,
		departments,
	},
});

export { store };
