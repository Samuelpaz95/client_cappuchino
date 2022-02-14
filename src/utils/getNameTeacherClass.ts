import { group, scheduleSubject } from "../interfaces";

export const nameTeacher = (group: group | scheduleSubject) => {
	return group.schedule[0] && group.schedule[0].isClass
		? group.schedule[0].teacher
		: group.schedule[1]
		? group.schedule[1].teacher
		: "AUXILIAR: " + group.schedule[0].teacher;
};
