<template>
	<main class="cappuchino">
		<ScheduleTable class="cappuchino__table" />
		<aside class="cappuchino__options">
			<ListCappuchino />
		</aside>
	</main>
</template>

<script lang="ts">
	import { defineComponent, onBeforeMount } from "vue";
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
			onBeforeMount(() => {
				fetchDepartmentData();
			});
		},
	});
</script>

<style scoped lang="scss">
	.cappuchino {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		// grid-template-columns: 1fr, 200px;
	}
</style>
