<template>
	<ul class="list-carrers">
		<li v-for="(value, index) in departmentCarrers" :key="index">
			<span>
				<div>{{ value.name }}</div>
				<div>{{ departmentName }}</div>
				<div>Actualizado al {{ value.semester }}</div>
			</span>
			<span>
				<span>X</span>
				<span>></span>
			</span>
		</li>
	</ul>
</template>

<script lang="ts">
	import { computed, defineComponent } from "vue";
	import { useStore } from "vuex";

	export default defineComponent({
		name: "ListCarrers",
		setup() {
			const store = useStore();

			const departmentCarrers = computed(() => store.getters["departments/indexCarrersInfo"]);
			const departmentName = computed(() => store.getters["departments/departmentName"]);

			return {
				departmentCarrers,
				departmentName,
			};
		},
	});
</script>

<style scoped lang="scss">
	.list-carrers {
	}
</style>
