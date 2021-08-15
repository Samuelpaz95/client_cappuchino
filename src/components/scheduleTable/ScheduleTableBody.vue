<template>
	<tbody class="schedule-table-body">
		<tr v-for="hour of semanticHours" :key="hour">
			<td v-for="(day, indexDay) of days" :key="day + hour">
				<template v-if="indexDay == 0">{{ hour }}</template>
				<template v-else></template>
			</td>
		</tr>
	</tbody>
</template>

<script lang="ts">
	import { defineComponent, PropType } from "vue";

	import { scheduleSubject } from "../../interfaces";
	import { useHours } from "../../composables/useHours";

	export default defineComponent({
		name: "ScheduleTableBody",
		props: {
			days: {
				type: Array as PropType<string[]>,
				require: true,
			},
			schedules: {
				type: Array as PropType<scheduleSubject[]>,
				requier: true,
				default: () => [],
			},
		},
		setup() {
			const { semanticHours } = useHours();

			return { semanticHours };
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
