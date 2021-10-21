import { schedule } from ".";

interface scheduleTable extends schedule {
	key: string;
	subjectName: string;
	groupCode: string;
}

interface scheduleMap {
	[index: string]: scheduleItem;
}

interface scheduleItem {
	schedules: scheduleTable[];
	duration: number;
	isConfictive: boolean;
}

export { scheduleTable, scheduleMap, scheduleItem };
