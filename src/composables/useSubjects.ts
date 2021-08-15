import { useStore } from "vuex";
import { Icarrer, subject, level, group, scheduleSubject } from "../interfaces";

interface codeProperty {
	code: string;
}

export function useSubjects() {
	const store = useStore();

	const fotmatData = ({
		groupCode,
		subjectCode,
		levelCode,
	}: {
		groupCode: string;
		subjectCode: string;
		levelCode: string;
	}): scheduleSubject => {
		const carrer: Icarrer = store.getters["departments/selectCarrer"];
		const level: level = getLevel(carrer.levels, levelCode);
		const subject: subject = getLevel(level.subjects, subjectCode);
		const group: group = getLevel(subject.groups, groupCode);
		const scheduleSubject: scheduleSubject = {
			key: groupCode + subjectCode,
			subjectName: subject.name,
			groupCode: groupCode,
			schedule: group.schedule,
		};
		return scheduleSubject;
	};

	const addSubject = ({
		groupCode,
		subjectCode,
		levelCode,
	}: {
		groupCode: string;
		subjectCode: string;
		levelCode: string;
	}) => {
		try {
			const schedule = fotmatData({ groupCode, subjectCode, levelCode });

			store.commit("scheduleSubjects/addScheduleSubjects", schedule);
		} catch (error) {
			console.error(error);
		}
	};

	const removeSubject = ({ groupCode, subjectCode }: { groupCode: string; subjectCode: string }) => {
		const key = groupCode + subjectCode;
		store.commit("scheduleSubjects/removeScheduleSubjects", key);
	};

	const getLevel = <T extends codeProperty>(iterable: T[], code: string) => {
		const iteration = iterable.find((iteration) => iteration.code == code);
		if (!iteration) throw new Error("Not find the code");
		return iteration;
	};

	return { addSubject, removeSubject };
}
