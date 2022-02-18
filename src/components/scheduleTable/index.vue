<template>
	<div ref="schedule" class="schedule-table" id="schedule-table">
		<table class="schedule-table__table">
			<ScheduleTableHeader :downloadSchedule="downloadSchedule" :days="days">
				Horarios Disponibles
			</ScheduleTableHeader>
			<ScheduleTableBody :days="days" :hours="hours" :schedules="schedules" />
		</table>
	</div>
</template>

<script setup lang="ts">
	import { Ref, ref, inject, computed } from "vue";
	import ScheduleTableHeader from "./ScheduleTableHeader.vue";
	import ScheduleTableBody from "./ScheduleTableBody.vue";
	import { useScheduleTime } from "../../composables/domain/useScheduleTime";
	import { useSchedulesTable } from "../../composables/domain/useSchedulesTable";
	import { downloadImageBase64 } from "../../utils/downloadImage64";
	import departmentService from "../../services/departments";
	import { THEME_VARAIBLES } from "../../constants/composables";

	const schedule: Ref<HTMLElement | null> = ref(null);
	const themeVariables = inject(THEME_VARAIBLES) as Function;
	const {
		semanticDays,
		hours: planeHours,
		transformHoursToSemanticHours,
		nextHourByStep,
	} = useScheduleTime();
	const { schedules } = useSchedulesTable();

	const downloadSchedule = async () => {
		try {
			const image64: string = await departmentService.takeScreenshot(
				schedule.value ? schedule.value.outerHTML : "",
				themeVariables()
			);
			downloadImageBase64(image64);
		} catch (error) {}
	};

	const schedulesKey = computed(() =>
		Object.entries(schedules.value).filter(([, { schedules }]) => schedules.length)
	);

	const days = computed(() => {
		const usedDays = schedulesKey.value.reduce((acc: string[], [key]) => {
			const day = key.slice(0, 2);
			if (!acc.includes(day)) {
				acc.push(day);
			}
			return acc;
		}, []);
		const usedSemanticDays = semanticDays.filter((day) => usedDays.includes(day.slice(0, 2))); //TODO

		return usedDays.length === 0 ? semanticDays : ["", ...usedSemanticDays];
	});

	const hours = computed(() => {
		const usedHours = schedulesKey.value.reduce((acc: string[], [key, { duration }]) => {
			const hour = key.slice(2, key.length);
			if (!acc.includes(hour)) {
				acc.push(hour);
			}
			if (duration > 1) {
				for (let index: number = 1; index < duration; index++) {
					const nextHour = nextHourByStep(hour, index);
					if (!acc.includes(nextHour)) acc.push(nextHour);
				}
			}

			return acc;
		}, []);

		return usedHours.length === 0
			? transformHoursToSemanticHours(planeHours.value)
			: transformHoursToSemanticHours(usedHours).sort();
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.schedule-table {
		font-size: 12px;
		background-color: var(--primary-color);
		border-radius: $border_radius;
		display: flex;
		overflow-x: auto;
		box-shadow: var(--box-shadow);

		&__table {
			border-collapse: collapse;
			margin: 1rem;
			width: 100%;
		}
	}
</style>
