import { onUnmounted } from "vue";
import { useStore } from "vuex";
import professorsService from "../services/professors";

export function useTeacherTrakcer(department: string) {
	const store = useStore();

	const searchDocent = async (professor: string) => {
		store.commit("scheduleSubjects/removeAllScheduleSubjects");

		const subjects = await professorsService.getOneByDepartment(department, professor);
		if (subjects) {
			subjects.forEach((subject, index) => {
				subject.groups.forEach((group) => {
					store.commit("scheduleSubjects/addScheduleSubjects", {
						key: index,
						subjectName: subject.name,
						groupCode: group.code,
						schedule: group.schedule,
					});
				});
			});
		}
	};

	onUnmounted(() => {
		store.commit("scheduleSubjects/removeAllScheduleSubjects");
	});

	return { searchDocent };
}
