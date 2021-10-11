<template>
	<tbody class="schedule-table-body">
		<tr v-for="hour of semanticHours" :key="hour">
			<template v-for="(day, indexDay) of days" :key="day + hour">
				<td v-if="indexDay == 0">{{ hour }}</td>
				<td :rowspan="getRows(day, hour)" v-else-if="isTimeSchedule(day, hour)">
					<ScheduleTableItem :schedules="getSchedule(day, hour)" />
				</td>
				<td v-else></td>
			</template>
		</tr>
	</tbody>
</template>

<script setup lang="ts">
	import { PropType, toRefs } from "vue";
	import ScheduleTableItem from "./ScheduleTableItem.vue";
	import { scheduleMap, scheduleTable } from "../../interfaces";
	import { useHours } from "../../composables/useHours";

	const props = defineProps({
		days: {
			type: Array as PropType<string[]>,
			require: true,
		},
		schedules: {
			type: Object as PropType<scheduleMap>,
			require: true,
			default: () => {},
		},
	});

	const { schedules, days } = toRefs(props);
	const { semanticHours } = useHours();

	const isTimeSchedule = (day: string, hour: string) => {
		return schedules.value[day.slice(0, 2) + hour.replace(":", "")] != undefined;
	};

	const getRows = (day: string, hour: string) => {
		const scheduleTable: scheduleTable[] = schedules.value[day.slice(0, 2) + hour];
		return scheduleTable ? scheduleTable[0].duration : 1;
	};

	const getSchedule = (day: string, hour: string) => schedules.value[day.slice(0, 2) + hour.replace(":", "")];
</script>

<style lang="scss" scoped>
	.schedule-table-body {
		th,
		td {
			border: 1px solid red;
			text-align: center;
		}

		tr {
			:first-child {
				border-left: none;
			}

			:last-child {
				border-right: none;
			}
		}

		:last-child td {
			border-bottom: none;
		}
	}
</style>
