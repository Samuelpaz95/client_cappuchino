import { provide, ref, Ref } from "vue";
import { THEME } from "../constants";

type themeType = "LIGHT" | "DARK";

export function useTheme() {
	let currentTheme: Ref<themeType> = ref("LIGHT");

	const defineTheme = (theme: themeType) => {
		const root = document.documentElement;

		root.style.setProperty("--primary-color", THEME[theme].primaryColor);
		root.style.setProperty("--secondary-color", THEME[theme].secondaryColor);
		root.style.setProperty("--background-color", THEME[theme].backgroundColor);
		root.style.setProperty("--font-color", THEME[theme].fontColor);
		root.style.setProperty("--contrast-font-color", THEME[theme].contrastFontColor);
		root.style.setProperty("--transparent-font-color", THEME[theme].transparentFontColor);
	};

	const toggleTheme = () => {
		const theme = localStorage.getItem("theme") as themeType;
		const newTheme = theme == "DARK" ? "LIGHT" : "DARK";
		localStorage.setItem("theme", newTheme);
		currentTheme.value = newTheme;
		defineTheme(newTheme);
	};

	(() => {
		let theme = localStorage.getItem("theme") as null | themeType;
		if (theme == null) {
			const isDark = window.matchMedia("(prefers-color-scheme: dark)");
			theme = isDark.matches ? "DARK" : "LIGHT";
			localStorage.setItem("theme", theme);
		}
		currentTheme.value = theme;
		defineTheme(theme);
	})();

	provide("theme/toggleTheme", toggleTheme);
	provide("theme/currentTheme", currentTheme);
}
