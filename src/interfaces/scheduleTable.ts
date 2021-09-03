import { schedule } from ".";

interface scheduleTable extends schedule {
	key: string;
	subjectName: string;
	groupCode: string;
}

interface scheduleMap {
	[index: string]: scheduleTable[];
}

export { scheduleTable, scheduleMap };
