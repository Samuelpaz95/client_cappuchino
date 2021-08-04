<template>
	<main>
		<aside>
			<ListCappuchino />
		</aside>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { useRoute } from "vue-router";
	import { useDepartment } from "../../hooks/useDepartment";

	import ListCappuchino from "../../components/listCappuchino/index.vue";

	export default defineComponent({
		name: "Cappuchino",
		components: {
			ListCappuchino,
		},
		setup() {
			const { params } = useRoute();
			useDepartment(params.department);
		},
	});
</script>

<style scoped lang="scss"></style>
