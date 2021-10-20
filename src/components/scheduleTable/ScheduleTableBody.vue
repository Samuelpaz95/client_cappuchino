<template>
	<tbody class="schedule-table-body">
		<tr v-for="hour of semanticHours" :key="hour">
			<template v-for="(day, indexDay) of semanticDays" :key="day + hour">
				<td v-if="indexDay == 0">{{ hour }}</td>
				<td v-else-if="isTimeSchedule(day, hour)">
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

	const isTimeSchedule = (day: string, hour: string) =>
		schedules.value[day.slice(0, 2) + hour.replace(":", "")] != undefined;

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
