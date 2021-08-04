<template>
	<ul class="list-subjects">
		<LevelList v-for="level in levels" :key="level" :level="level" />
	</ul>
</template>

<script lang="ts">
	import { computed, defineComponent } from "vue";
	import { useStore } from "vuex";

	import LevelList from "./level/index.vue";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			LevelList,
		},
		setup() {
			const store = useStore();
			const levels = computed(() => store.getters["departments/levelsSelectCarrer"]);

			return {
				levels,
			};
		},
	});
</script>

<style lang="scss" scoped>
	.list-subjects {
		padding: 1rem;
		margin: 0;
	}
</style>
