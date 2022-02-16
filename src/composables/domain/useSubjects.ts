import { inject, Ref } from "vue";
import { useStore } from "vuex";
import { CAPPUCHINO_CURRENT_CARRER } from "../../constants/composables";
import { Icarrer, subject, level, group, scheduleSubject } from "../../interfaces";

export function useSubjects() {
	const store = useStore();
	const carrer = inject(CAPPUCHINO_CURRENT_CARRER) as Ref<Icarrer>;

	const formatSchedules = ({ groupCode, subjectCode, levelCode }: propsFormat): scheduleSubject => {
		const level: level = getProperties(carrer.value.levels, levelCode);
		const subject: subject = getProperties(level.subjects, subjectCode);
		const group: group = getProperties(subject.groups, groupCode);

		return {
			key: groupCode + subjectCode,
			subjectName: subject.name,
			groupCode: groupCode,
			schedule: group.schedule,
		};
	};

	const addSubject = ({ groupCode, subjectCode, levelCode }: propsFormat): void => {
		try {
			const schedule = formatSchedules({ groupCode, subjectCode, levelCode });
			store.commit("scheduleSubjects/addScheduleSubjects", schedule);
		} catch (error) {
			console.error(error);
		}
	};

	const removeSubject = ({ groupCode, subjectCode }: propsRemoveData): void => {
		const key = groupCode + subjectCode;
		store.commit("scheduleSubjects/removeScheduleSubjects", key);
	};

	const getProperties = <T extends codeProperty>(iterable: T[], code: string) => {
		const iteration = iterable.find((iteration) => iteration.code == code);
		if (!iteration) throw new Error("Not find the code");
		return iteration;
	};

	return { addSubject, removeSubject };
}

interface codeProperty {
	code: string;
}

interface propsFormat {
	groupCode: string;
	subjectCode: string;
	levelCode: string;
}

interface propsRemoveData {
	groupCode: string;
	subjectCode: string;
}
