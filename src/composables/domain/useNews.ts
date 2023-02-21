import { ref, Ref, provide } from "vue";

import { INews } from "../../interfaces";
import newsService from "../../services/news";

export function useNews() {
	const news: Ref<INews | null> = ref(null);

	(async () => {
		const response = await newsService.getAll();
		news.value = response;
	})();

	return { news };
}
