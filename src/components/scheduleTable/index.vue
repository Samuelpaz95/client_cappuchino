<template>
	<div class="schedule-table">
		<table class="schedule-table__table">
			<schedule-table-header :days="semanticDays"> Horarios Disponibles </schedule-table-header>
			<ScheduleTableBody :days="semanticDays" :schedules="schedules" />
		</table>
	</div>
</template>

<script setup lang="ts">
	import { useDays } from "../../composables/useDays";
	import { useSchedules } from "../../composables/useParseSchedules";
	import ScheduleTableHeader from "./ScheduleTableHeader.vue";
	import ScheduleTableBody from "./ScheduleTableBody.vue";

	const { semanticDays } = useDays();
	const { schedules } = useSchedules();
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.schedule-table {
		font-size: 12px;
		background-color: $primary_color;
		border-radius: $border_radius;
		display: flex;
		overflow-x: auto;

		&__table {
			border-collapse: collapse;
			margin: 1rem;
		}
	}
</style>
