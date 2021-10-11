<template>
	<ul class="list-carrers">
		<CarrerItem
			v-for="(value, index) in departmentCarrers"
			:key="index"
			:nameCarrer="value.name"
			:updateAt="value.semester"
			@carrer:select="selectCarrer"
		/>
	</ul>
</template>

<script setup lang="ts">
	import { computed, inject } from "vue";
	import { useStore } from "vuex";

	import CarrerItem from "./CarrerItem.vue";

	const store = useStore();
	const departmentCarrers = computed(() => store.getters["departments/indexCarrersInfo"]);
	const updateInCarrers = inject("updateInCarrers") as Function;
	const updateSelectCarrer = inject("updateSelectCarrer") as Function;

	const selectCarrer = (nameCarrer: string) => {
		store.dispatch("departments/actionGetDepartmentCarrer", nameCarrer);
		updateSelectCarrer(nameCarrer);
		updateInCarrers(false);
	};
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables.scss";

	.list-carrers {
		padding: 1rem;
		margin: 0;
	}
</style>
