import { provide, ref } from "vue";
import { THEMES, THEME } from "../../constants";

const THEME_ITEM = "SCESI_THEME";

export function useTheme() {
	let currentTheme = ref(THEMES.LIGHT);

	const defineTheme = (theme: string) => {
		const root = document.documentElement;

		root.style.setProperty("--primary-color", THEME[theme].primaryColor);
		root.style.setProperty("--secondary-color", THEME[theme].secondaryColor);
		root.style.setProperty("--background-color", THEME[theme].backgroundColor);
		root.style.setProperty("--font-color", THEME[theme].fontColor);
		root.style.setProperty("--contrast-font-color", THEME[theme].contrastFontColor);
		root.style.setProperty("--transparent-font-color", THEME[theme].transparentFontColor);
		root.style.setProperty("--scroll-color", THEME[theme].scrollColor);
		root.style.setProperty("--background-footer-color", THEME[theme].backgroundColorFooter);
		root.style.setProperty("--box-shadow", THEME[theme].boxShadow);
	};

	const toggleTheme = () => {
		const theme = localStorage.getItem(THEME_ITEM);
		const newTheme = theme == THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
		localStorage.setItem(THEME_ITEM, newTheme);
		currentTheme.value = newTheme;
		defineTheme(newTheme);
	};

	const themeVariables = () =>
		`--primary-color: ${getComputedStyle(document.documentElement).getPropertyValue("--primary-color")};
		--secondary-color: ${getComputedStyle(document.documentElement).getPropertyValue("--secondary-color")};
		--background-color: ${getComputedStyle(document.documentElement).getPropertyValue("--background-color")};
		--font-color: ${getComputedStyle(document.documentElement).getPropertyValue("--font-color")};
		`;

	(() => {
		let theme = localStorage.getItem(THEME_ITEM);
		if (theme == null) {
			const isDark = window.matchMedia("(prefers-color-scheme: dark)");
			theme = isDark.matches ? THEMES.DARK : THEMES.LIGHT;
			localStorage.setItem(THEME_ITEM, theme);
		}
		currentTheme.value = theme;
		defineTheme(theme);
	})();

	provide("theme/toggleTheme", toggleTheme);
	provide("theme/currentTheme", currentTheme);
	provide("theme/themeVariables", themeVariables);
}
