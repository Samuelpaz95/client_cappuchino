<template>
	<BaseSearchInput
		class="search-container"
		icon="search"
		placeholder="Buscar Carrera (Civil, Industrial, Sistemas, Informatica, ...)"
		v-model="inputSearch"
	/>
	<ul class="list-carrers" :style="heightList" v-if="departmentCarrers">
		<CarrerItem
			v-for="(carrer, index) in filteredCarrers"
			:key="index"
			class="list-carrers__item"
			:nameCarrer="carrer.name"
			:updateAt="carrer.semester"
			@carrer:select="selectCarrer"
		/>
	</ul>
	<Spinner v-else />
</template>

<script setup lang="ts">
	import { computed, inject, Ref, ref } from "vue";
	import CarrerItem from "./CarrerItem.vue";
	import Spinner from "../../ui/BaseSpinner.vue";
	import { useScheudleHeight } from "../../../composables/ui/useScheduleHeight";
	import { stateMenu } from "../../../store/state/Menu";
	import { IdepartementCarrer } from "../../../interfaces";
	import { CAPPUCHINO_FETCH_DEPARTMENT, CAPPUCHINO_INDEX_DEPARTMENTS } from "../../../constants/composables";
	import BaseSearchInput from "../../ui/BaseSearchInput.vue";

	const inputSearch = ref("");
	const { heightList } = useScheudleHeight(50);
	const departmentCarrers = inject(CAPPUCHINO_INDEX_DEPARTMENTS) as Ref<IdepartementCarrer[] | null>;
	const fetchDepartmentCarrer = inject(CAPPUCHINO_FETCH_DEPARTMENT) as Function;

	const filteredCarrers = computed(() => {
		if (!inputSearch) return departmentCarrers.value;

		return departmentCarrers.value!.filter((carrer: IdepartementCarrer | null) => {
			if (!carrer) return false;

			return carrer.name.toLocaleLowerCase().includes(inputSearch.value.toLocaleLowerCase());
		});
	});

	const selectCarrer = (nameCarrer: string) => {
		fetchDepartmentCarrer(nameCarrer);
		stateMenu.updateSelectCarrer(nameCarrer);
		stateMenu.isInCarrers = false;
	};
</script>

<style scoped lang="scss">
	.list-carrers {
		padding: 0;
		margin: 0;
		overflow-y: auto;

		&__item:not(:last-child) {
			border-bottom: 1px solid var(--transparent-font-color);
		}
	}
	.search-container {
		margin: 8px 0px;
	}
</style>
