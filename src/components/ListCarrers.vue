<template>
	<div class="list-carrers">
		<ListCarrersHeader class="list-carrers__header" @menu:open="showCarrers" />
		<ul class="list-carrers__list" v-show="isShowCarrers">
			<ListItemCarrer
				v-for="(value, index) in departmentCarrers"
				:key="index"
				:nameCarrer="value.name"
				:updateAt="value.semester"
				@carrer:select="selectCarrer"
			/>
		</ul>
	</div>
</template>

<script lang="ts">
	import { computed, defineComponent, ref, Ref } from "vue";
	import { useStore } from "vuex";

	import ListItemCarrer from "./ListItemCarrer.vue";
	import ListCarrersHeader from "./ListCarrersHeader.vue";

	export default defineComponent({
		name: "ListCarrers",
		components: {
			ListItemCarrer,
			ListCarrersHeader,
		},
		setup() {
			const store = useStore();
			const departmentCarrers = computed(() => store.getters["departments/indexCarrersInfo"]);
			let isShowCarrers: Ref<boolean> = ref(false);

			const selectCarrer = (nameCarrer: string) => {
				store.dispatch("departments/actionGetDepartmentCarrer", nameCarrer);
			};

			const showCarrers = (isOpen: boolean) => {
				isShowCarrers.value = isOpen;
			};

			return {
				departmentCarrers,
				isShowCarrers,
				selectCarrer,
				showCarrers,
			};
		},
	});
</script>

<style scoped lang="scss">
	@import "../scss/abstracts/variables.scss";

	.list-carrers {
		background-color: $primary_color;

		&__list {
			padding: 1rem;
			margin: 0;
			width: 100%;
			background-color: $primary_color;
			position: absolute;
			z-index: 10;
		}
		&__header {
			position: relative;
		}
	}
</style>
