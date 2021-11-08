<template>
	<main class="cappuchino">
		<ScheduleTable class="cappuchino__table" />
		<aside class="cappuchino__options">
			<ListCappuchino />
		</aside>
	</main>
</template>

<script setup lang="ts">
	import { inject } from "vue";
	import ListCappuchino from "../../components/listCappuchino/index.vue";
	import ScheduleTable from "../../components/scheduleTable/index.vue";
	import { useCappuchino } from "../../composables/useCappuchino";

	const verifyDepartment = inject("verifyDepartment") as Function;
	const currentDepartment = inject("currentDepartment") as string;
	verifyDepartment();
	useCappuchino(currentDepartment);
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/_mixins.scss";

	.cappuchino {
		display: grid;
		grid-template-columns: 1fr;

		@include large {
			grid-template-columns: 1fr 2fr;
			align-items: start;
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
