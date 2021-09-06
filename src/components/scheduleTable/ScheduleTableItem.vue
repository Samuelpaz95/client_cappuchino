<template>
	<div
		v-for="schedule in schedules"
		:key="schedule.key"
		:class="[{ 'schedule-item__conflictive': conflictiveSchedule }, 'schedule-item']"
	>
		<div>{{ schedule.subjectName }}</div>
		<span>G {{ schedule.groupCode }}</span> - <span>A {{ schedule.room }}</span>
	</div>
</template>

<script lang="ts">
	import { defineComponent, PropType } from "vue";
	import { scheduleTable } from "../../interfaces";

	export default defineComponent({
		name: "ScheduleTableItem",
		props: {
			schedules: {
				require: true,
				default: () => [],
				type: Array as PropType<scheduleTable[]>,
			},
		},
		computed: {
			conflictiveSchedule(): Boolean {
				return this.schedules.length > 1;
			},
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.schedule-item {
		margin: 10px;
		font-size: 1em;
		line-height: 16px;

		&__conflictive {
			color: $secondary_color;
			font-weight: 700;
		}
	}
</style>
