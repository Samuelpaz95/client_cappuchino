import { ref, Ref, inject } from "vue";
import { professor } from "../interfaces";
import professorsService from "../services/professors";

export function useSearch() {
	const department = inject("currentDepartment") as string;
	const listOptions: Ref<professor[]> = ref([]);
	const matchOptions: Ref<professor[]> = ref([]);

	(async () => {
		if (department) {
			professorsService.getAllByDepartment(department as string).then((data) => {
				listOptions.value = data ? data : [];
			});
		}
	})();

	const searchOptions = (searchedWord: string) => {
		if (searchedWord.length == 0) {
			matchOptions.value = [];
			return;
		}

		const splitedSearch = searchedWord
			.toLocaleUpperCase()
			.split(" ")
			.map((word) => RegExp(word));
		const expresions = searchForWord(splitedSearch);
		const matchesOfWords = listOptions.value.map((word) => expresions(word));
		const maxCountOfMatches: number = Math.max(...matchesOfWords);
		matchOptions.value = listOptions.value.filter((_, index) => matchesOfWords[index] == maxCountOfMatches);
	};

	const searchForWord =
		(regseExp: RegExp[]) =>
		(wordToCompare: string): number =>
			regseExp.reduce(
				(matches: number, regExp: RegExp) =>
					regExp.test(wordToCompare.toUpperCase()) ? matches + 1 : matches,
				0
			);

	const clearMatchOptions = () => {
		setTimeout(() => {
			matchOptions.value = [];
		}, 100);
	};

	return { matchOptions, searchOptions, clearMatchOptions };
}
