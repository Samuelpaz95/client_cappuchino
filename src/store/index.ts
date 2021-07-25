import { createStore } from "vuex";

import cappuchino from "./modules/cappuchino";

const store = createStore({
	modules: {
		cappuchino,
	},
});

export { store };
