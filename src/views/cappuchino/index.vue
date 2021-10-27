<template>
	<main class="cappuchino">
		<ScheduleTable class="cappuchino__table" />
		<aside class="cappuchino__options">
			<ListCappuchino />
		</aside>
	</main>
</template>

<script setup lang="ts">
	import { useDepartment } from "../../composables/useDepartment";
	import ListCappuchino from "@/components/listCappuchino/index.vue";
	import ScheduleTable from "@/components/scheduleTable/index.vue";

	const { fetchDepartmentData } = useDepartment();
	fetchDepartmentData();
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/_variables.scss", "@/scss/abstracts/_mixins.scss";

	.cappuchino {
		display: grid;
		grid-template-columns: 1fr;

		@include large {
			grid-template-columns: 1fr 3fr;
			grid-template-rows: 1fr;
		}

		&__table {
			margin: 1rem;

			@include large {
				grid-column: 2 / 3;
				grid-row: 1;
			}
		}

		&__options {
			@include large {
				grid-column: 1 / 2;
				grid-row: 1;

				margin-top: 1rem;
				margin-left: 1rem;
			}
		}
	}
</style>
