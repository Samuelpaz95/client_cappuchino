import { schedule } from ".";

interface scheduleTable extends schedule {
	key: string;
	subjectName: string;
	groupCode: string;
}

export { scheduleTable };
