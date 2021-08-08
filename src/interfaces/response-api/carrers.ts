interface Icarrer {
	levels: level[];
}

interface level {
	code: string;
	subjects: subjects;
}

interface subject {
	code: string;
	name: string;
	groups: groups;
}

interface group {
	code: string;
	schedule: {
		day: string;
		start: string;
		end: string;
		duration: number;
		room: string;
		teacher: string;
		isClass: boolean;
	}[];
}

type groups = group[];

type subjects = subject[];

export { Icarrer, level, subjects, subject, groups, group };
