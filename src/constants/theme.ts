export const THEMES = {
	LIGHT: "LIGHT",
	DARK: "DARK",
};

export const THEME = {
	[THEMES.LIGHT]: {
		primaryColor: "#ffffff",
		secondaryColor: "#808191",
		backgroundColor: "#F8F8F8",
		backgroundColorFooter: "#27272F",
		fontColor: "#000000",
		contrastFontColor: "#D6D7D8",
		transparentFontColor: "#000000",
		scrollColor: "#808191",
		boxShadow: "3px 3px 10px -1px rgba(0, 0, 0, 0.75)",
	},
	[THEMES.DARK]: {
		primaryColor: "#252836",
		secondaryColor: "#FD6564",
		backgroundColor: "#1F1D2B",
		backgroundColorFooter: "#252836",
		fontColor: "#D6D7D8",
		contrastFontColor: "#D6D7D8",
		transparentFontColor: "#D6D7D8",
		scrollColor: "#FD6564",
		boxShadow: "none",
	},
};
