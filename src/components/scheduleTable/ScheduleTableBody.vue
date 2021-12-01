<template>
	<tbody class="schedule-table-body">
		<tr v-for="hour of semanticHours" :key="hour">
			<template v-for="(day, indexDay) of semanticDays" :key="day + hour">
				<td v-if="indexDay == 0">{{ hour }}</td>
				<template v-else-if="isTimeSchedule(day, hour)">
					<td :rowspan="getRowSpan(day, hour)">
						<ScheduleTableItem :schedulesItem="getScheduleItem(day, hour)" />
					</td>
				</template>
				<td v-else-if="canRender(day, hour)"></td>
			</template>
		</tr>
	</tbody>
</template>

<script setup lang="ts">
	import { PropType, toRefs } from "vue";
	import ScheduleTableItem from "./ScheduleTableItem.vue";
	import { scheduleMap } from "../../interfaces";
	import { useScheduleTime } from "../../composables/useScheduleTime";

	const props = defineProps({
		schedules: {
			type: Object as PropType<scheduleMap>,
			require: true,
			default: () => {},
		},
	});

	const { schedules } = toRefs(props);
	const { semanticHours, semanticDays } = useScheduleTime();

	const getScheduleItem = (day: string, hour: string) =>
		schedules.value[day.slice(0, 2) + hour.replace(":", "")];

	const isTimeSchedule = (day: string, hour: string) => getScheduleItem(day, hour).schedules.length != 0;

	const getRowSpan = (day: string, hour: string) => getScheduleItem(day, hour).duration;

	const canRender = (day: string, hour: string) => getRowSpan(day, hour) != 0;
</script>

<style lang="scss" scoped>
	.schedule-table-body {
		th,
		td {
			border: 1px solid var(--secondary-color);
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
