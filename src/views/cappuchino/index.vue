<template>
	<main class="cappuchino">
		<ScheduleTable class="cappuchino__table" />
		<aside class="cappuchino__options">
			<ListCappuchino />
		</aside>
	</main>
</template>

<script setup lang="ts">
	import { useCappuchino } from "../../composables/useCappuchino";
	import { useDepartment } from "../../composables/useDepartment";
	import ListCappuchino from "../../components/listCappuchino/index.vue";
	import ScheduleTable from "../../components/scheduleTable/index.vue";

	const { currentDepartment } = useDepartment();
	useCappuchino(currentDepartment);
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/mixins.scss", "@/scss/abstracts/variables.scss";

	.cappuchino {
		position: relative;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr auto;

		@include large {
			gap: 1rem;
			grid-template-columns: 1fr 2fr;
			grid-template-rows: 1fr;
			align-items: start;
			margin: 1rem;
		}

		&__table {
			margin: 1rem;

			@include large {
				margin: 0;
				grid-column: 2 / 3;
				grid-row: 1;
				min-height: calc(100vh - 80px - 80px - 2rem);
			}
		}

		&__options {
			position: inherit;
			bottom: 0;

			@include large {
				grid-column: 1 / 2;
				grid-row: 1;
			}
		}
	}
</style>
