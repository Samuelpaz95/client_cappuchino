<template>
	<div ref="schedule" class="schedule-table" id="schedule-table">
		<table class="schedule-table__table">
			<ScheduleTableHeader :downloadSchedule="downloadSchedule" :days="semanticDays">
				Horarios Disponibles
			</ScheduleTableHeader>
			<ScheduleTableBody :schedules="schedules" />
		</table>
	</div>
</template>

<script setup lang="ts">
	import { Ref, ref, inject } from "vue";
	import ScheduleTableHeader from "./ScheduleTableHeader.vue";
	import ScheduleTableBody from "./ScheduleTableBody.vue";
	import { useScheduleTime } from "../../composables/useScheduleTime";
	import { useSchedulesTable } from "../../composables/useSchedulesTable";
	import { downloadImageBase64 } from "../../utils/downloadImage64";
	import departmentService from "../../services/departments";

	const schedule: Ref<HTMLElement | null> = ref(null);
	const themeVariables = inject("theme/themeVariables") as Function;

	const downloadSchedule = async () => {
		try {
			const image64: string = await departmentService.takeScreenshot(
				schedule.value ? schedule.value.outerHTML : "",
				themeVariables()
			);
			downloadImageBase64(image64);
		} catch (error) {}
	};

	const { semanticDays } = useScheduleTime();
	const { schedules } = useSchedulesTable();
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.schedule-table {
		font-size: 12px;
		background-color: var(--primary-color);
		border-radius: $border_radius;
		display: flex;
		overflow-x: auto;

		&__table {
			border-collapse: collapse;
			margin: 1rem;
			width: 100%;
		}
	}
</style>
