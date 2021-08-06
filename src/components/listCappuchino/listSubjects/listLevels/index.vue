<template>
	<ul class="list-subjects-levels">
		<LevelItem v-for="level in levels" :key="level" :level="level" @level:select="showFullLevel" />
	</ul>
</template>

<script lang="ts">
	import { computed, defineComponent } from "vue";
	import { useStore } from "vuex";

	import LevelItem from "./items/index.vue";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			LevelItem,
		},
		setup(_, { emit }) {
			const store = useStore();
			const levels = computed(() => store.getters["departments/levelsSelectCarrer"]);

			const showFullLevel = (levelInfo: string) => {
				emit("level:select", levelInfo);
			};

			return {
				levels,
				showFullLevel,
			};
		},
	});
</script>

<style lang="scss" scoped>
	@import "../../../../scss/abstracts/variables.scss";

	.list-subjects-levels {
		padding: 1rem;
		margin: 0;
	}
</style>
