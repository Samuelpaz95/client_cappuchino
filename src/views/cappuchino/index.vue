<template>
	<main>
		<aside>
			<ListCappuchino />
		</aside>
	</main>
</template>

<script lang="ts">
	import { defineComponent, onBeforeMount } from "vue";
	import { useDepartment } from "../../composables/useDepartment";

	import ListCappuchino from "@/components/listCappuchino/index.vue";

	export default defineComponent({
		name: "Cappuchino",
		components: {
			ListCappuchino,
		},
		setup() {
			const { fetchDepartmentData } = useDepartment();
			onBeforeMount(() => {
				fetchDepartmentData();
			});
		},
	});
</script>

<style scoped lang="scss"></style>
