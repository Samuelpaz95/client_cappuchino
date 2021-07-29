<template>
	<ul class="list-carrers">
		<ListItemCarrer
			v-for="(value, index) in departmentCarrers"
			:key="index"
			:nameCarrer="value.name"
			:updateAt="value.semester"
		/>
	</ul>
</template>

<script lang="ts">
	import { computed, defineComponent } from "vue";
	import { useStore } from "vuex";

	import ListItemCarrer from "./ListItemCarrer.vue";

	export default defineComponent({
		name: "ListCarrers",
		components: {
			ListItemCarrer,
		},
		setup() {
			const store = useStore();
			const departmentCarrers = computed(() => store.getters["departments/indexCarrersInfo"]);

			return {
				departmentCarrers,
			};
		},
	});
</script>

<style scoped lang="scss">
	.list-carrers {
	}
</style>
