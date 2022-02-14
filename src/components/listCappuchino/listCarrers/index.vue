<template>
	<ul class="list-carrers" :style="heightList" v-if="departmentCarrers">
		<CarrerItem
			v-for="(value, index) in departmentCarrers"
			:key="index"
			class="list-carrers__item"
			:nameCarrer="value.name"
			:updateAt="value.semester"
			@carrer:select="selectCarrer"
		/>
	</ul>
	<Spinner v-else />
</template>

<script setup lang="ts">
	import { inject, Ref } from "vue";
	import CarrerItem from "./CarrerItem.vue";
	import Spinner from "../../ui/BaseSpinner.vue";
	import { useScheudleHeight } from "../../../composables/useScheduleHeight";
	import { stateMenu } from "../../../store/state/Menu";
	import { IdepartementCarrer } from "../../../interfaces";

	const { heightList } = useScheudleHeight(50);
	const departmentCarrers = inject("indexDepartments") as Ref<IdepartementCarrer[] | null>;
	const fetchDepartmentCarrer = inject("fetchDepartmentCarrer") as Function;

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
</style>
