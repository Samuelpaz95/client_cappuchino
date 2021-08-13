<template>
	<tbody class="schedule-table-body">
		<tr v-for="hour of hours" :key="hour">
			<td v-for="(day, indexDay) of days" :key="day + hour">
				<template v-if="indexDay == 0">{{ hour }}</template>
				<template v-else></template>
			</td>
		</tr>
	</tbody>
</template>

<script lang="ts">
	import { defineComponent, PropType } from "vue";

	export default defineComponent({
		name: "ScheduleTableBody",
		props: {
			hours: {
				type: Array as PropType<string[]>,
				require: true,
			},
			days: {
				type: Array as PropType<string[]>,
				require: true,
			},
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
