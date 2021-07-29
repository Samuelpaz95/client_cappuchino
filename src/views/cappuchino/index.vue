<template>
	<main>
		<ListCarrers />
	</main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { useRoute } from "vue-router";
	import { useGetDepartment } from "../../hooks/useGetDepartment";

	import ListCarrers from "../../components/ListCarrers.vue";

	export default defineComponent({
		name: "Cappuchino",
		components: {
			ListCarrers,
		},
		setup() {
			const { params } = useRoute();
			useGetDepartment(params.department);
		},
	});
</script>

<style scoped lang="scss"></style>
