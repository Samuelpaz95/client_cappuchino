<template>
	<div class="schedule-table" id="schedule-table">
		<table class="schedule-table__table">
			<schedule-table-header :days="semanticDays"> Horarios Disponibles </schedule-table-header>
			<ScheduleTableBody :schedules="schedules" />
		</table>
	</div>
</template>

<script setup lang="ts">
	import ScheduleTableHeader from "./ScheduleTableHeader.vue";
	import ScheduleTableBody from "./ScheduleTableBody.vue";
	import { useScheduleTime } from "../../composables/useScheduleTime";
	import { useSchedulesTable } from "../../composables/useSchedulesTable";

	const { semanticDays } = useScheduleTime();
	const { schedules } = useSchedulesTable();
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.schedule-table {
		font-size: 12px;
		background-color: $primary_color;
		border-radius: $border_radius;
		display: flex;
		overflow-x: auto;
		// box-shadow: 3px 3px 3px 0 rgba(0, 0, 0, 0.16);

		&__table {
			border-collapse: collapse;
			margin: 1rem;
			width: 100%;
		}
	}
</style>
