<template>
	<tbody class="schedule-table-body">
		<tr v-for="hour of semanticHours" :key="hour">
			<td v-for="(day, indexDay) of days" :key="day + hour">
				<template v-if="indexDay == 0">{{ hour }}</template>
				<pre style='text-aling="left"' v-else-if="isTimeSchedule(day, hour)">{{
					getSchedule(day, hour)
				}}</pre>
				<template v-else></template>
			</td>
		</tr>
	</tbody>
</template>

<script lang="ts">
	import { defineComponent, PropType, Ref, toRef } from "vue";

	import { scheduleMap } from "../../interfaces";
	import { useHours } from "../../composables/useHours";

	export default defineComponent({
		name: "ScheduleTableBody",
		props: {
			days: {
				type: Array as PropType<string[]>,
				require: true,
			},
			schedules: {
				type: Object as PropType<scheduleMap>,
				require: true,
				default: () => {},
			},
		},
		setup(props) {
			const schedules: Ref<any> = toRef(props, "schedules");
			const { semanticHours } = useHours();

			const isTimeSchedule = (day: string, hour: string) =>
				schedules.value[day.slice(0, 2) + hour] != undefined;

			const getSchedule = (day: string, hour: string) => schedules.value[day.slice(0, 2) + hour];

			return { semanticHours, isTimeSchedule, getSchedule };
		},
	});
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
