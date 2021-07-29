<template>
	<main>
		<aside>
			<ListCarrers />
		</aside>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { useRoute } from "vue-router";
	import { useDepartment } from "../../hooks/useDepartment";

	import ListCarrers from "../../components/ListCarrers.vue";

	export default defineComponent({
		name: "Cappuchino",
		components: {
			ListCarrers,
		},
		setup() {
			const { params } = useRoute();
			useDepartment(params.department);
		},
	});
</script>

<style scoped lang="scss"></style>
