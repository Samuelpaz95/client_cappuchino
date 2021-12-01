import { provide } from "vue";
import { THEME } from "../enums/theme";

export function useTheme() {
	const defineTheme = (theme: "LIGHT" | "DARK") => {
		const root = document.documentElement;
		console.log(THEME[theme]);

		root.style.setProperty("--primary-color", THEME[theme].primaryColor);
		root.style.setProperty("--secondary-color", THEME[theme].secondaryColor);
		root.style.setProperty("--background-color", THEME[theme].backgroundColor);
		root.style.setProperty("--font-color", THEME[theme].fontColor);
		root.style.setProperty("--contrast-font-color", THEME[theme].contrastFontColor);
		root.style.setProperty("--transparent-font-color", THEME[theme].transparentFontColor);
	};

	const toggleTheme = () => {
		const theme = localStorage.getItem("theme") as "LIGHT" | "DARK";
		const newTheme = theme == "DARK" ? "LIGHT" : "DARK";
		localStorage.setItem("theme", newTheme);
		defineTheme(newTheme);
	};

	(() => {
		let theme = localStorage.getItem("theme") as null | "LIGHT" | "DARK";
		if (theme == null) {
			const isDark = window.matchMedia("(prefers-color-scheme: dark)");
			theme = isDark ? "DARK" : "LIGHT";
			localStorage.setItem("theme", theme);
		}
		defineTheme(theme);
	})();

	provide("theme/toggleTheme", toggleTheme);
}
