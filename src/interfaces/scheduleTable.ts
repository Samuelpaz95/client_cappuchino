import { schedule } from ".";

interface scheduleTable extends schedule {
	key: string;
	subjectName: string;
	groupCode: string;
}

interface scheduleMap {
	[index: string]: {
		schedules: scheduleTable[];
		duration: number;
		isConfictive: boolean;
	};
}

export { scheduleTable, scheduleMap };
