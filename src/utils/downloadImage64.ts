export const downloadImageBase64 = async (image64: string) => {
	const b = document.createElement("a");
	b.setAttribute("download", "Horario");
	b.target = "_blank";
	b.href = "data:image/png;base64," + image64;
	b.click();
};
