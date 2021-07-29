<template>
	<div></div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { useGetDepartment } from "../../hooks/useGetDepartment";
	import { useRoute } from "vue-router";

	export default defineComponent({
		name: "Cappuchino",
		setup() {
			const { params } = useRoute();
			useGetDepartment(params.department);
		},
	});
</script>

<style scoped lang="scss"></style>
