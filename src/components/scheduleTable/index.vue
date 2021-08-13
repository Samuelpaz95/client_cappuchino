<template>
	<div class="schedule-table">
		<table class="schedule-table__table">
			<schedule-table-header :days="semanticDays"> Horarios Disponibles </schedule-table-header>
			<ScheduleTableBody :hours="semanticHours" :days="semanticDays" />
		</table>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import { useDays } from "../../composables/useDays";
	import { useHours } from "../../composables/useHours";
	import ScheduleTableHeader from "./ScheduleTableHeader.vue";
	import ScheduleTableBody from "./ScheduleTableBody.vue";

	export default defineComponent({
		name: "ScheduleTable",
		components: {
			ScheduleTableHeader,
			ScheduleTableBody,
		},
		setup() {
			const { semanticDays } = useDays();
			const { semanticHours } = useHours();

			return { semanticDays, semanticHours };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.schedule-table {
		background-color: $primary_color;
		border-radius: $border_radius;
		overflow-x: auto;

		&__table {
			border-collapse: collapse;
			margin: 1rem;
		}
	}
</style>
