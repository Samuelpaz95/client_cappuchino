<template>
	<div></div>
</template>

<script lang="ts">
	import { defineComponent, onMounted } from "vue";
	import { useRoute } from "vue-router";
	import { useStore } from "vuex";

	export default defineComponent({
		name: "Cappuchino",
		setup() {
			const store = useStore();
			const { params } = useRoute();
			onMounted(async () => {
				await store.dispatch("departments/actionGetDepartmentDescription", params.department);
			});
		},
	});
</script>

<style scoped lang="scss"></style>
