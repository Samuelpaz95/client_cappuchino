<template>
	<main class="cappuchino">
		<ScheduleTable class="cappuchino__table" />
		<aside class="cappuchino__options">
			<ListCappuchino />
		</aside>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { useDepartment } from "../../composables/useDepartment";

	import ListCappuchino from "@/components/listCappuchino/index.vue";
	import ScheduleTable from "@/components/scheduleTable/index.vue";

	export default defineComponent({
		name: "Cappuchino",
		components: {
			ListCappuchino,
			ScheduleTable,
		},
		setup() {
			const { fetchDepartmentData } = useDepartment();
			fetchDepartmentData();
		},
	});
</script>

<style scoped lang="scss">
	.cappuchino {
		display: grid;
		grid-template-columns: 1fr, 200px;

		&__table {
			margin: 1rem;
			margin-right: 5rem;
			width: calc(100% - 2rem);
		}
	}
</style>
