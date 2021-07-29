import { createStore } from "vuex";

import departments from "./modules/departments";

const store = createStore({
	modules: {
		departments,
	},
});

export { store };
