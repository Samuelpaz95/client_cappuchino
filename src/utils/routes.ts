export const getPath = (path: string) => {
	const p1 = path.slice(1);
	const index = p1.indexOf("/");
	if (index < 0) {
		return p1;
	}
	const p2 = p1.slice(0, index);
	return p2;
};
