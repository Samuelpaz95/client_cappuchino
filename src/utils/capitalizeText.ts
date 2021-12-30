export const capitalizeText = (mySentence: string) =>
	mySentence
		.split(" ")
		.map((word) => word[0].toUpperCase() + word.substring(1))
		.join(" ");
