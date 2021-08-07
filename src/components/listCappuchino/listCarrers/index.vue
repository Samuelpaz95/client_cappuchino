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

<script lang="ts">
	import { computed, defineComponent } from "vue";
	import { useStore } from "vuex";

	import CarrerItem from "./CarrerItem.vue";

	export default defineComponent({
		name: "ListCarrers",
		components: {
			CarrerItem,
		},
		emits: ["carrer:select"],
		setup(_, { emit }) {
			const store = useStore();
			const departmentCarrers = computed(() => store.getters["departments/indexCarrersInfo"]);

			const selectCarrer = (nameCarrer: string) => {
				store.dispatch("departments/actionGetDepartmentCarrer", nameCarrer);
				emit("carrer:select");
			};

			return {
				departmentCarrers,
				selectCarrer,
			};
		},
	});
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables.scss";

	.list-carrers {
		padding: 1rem;
		margin: 0;
	}
</style>
