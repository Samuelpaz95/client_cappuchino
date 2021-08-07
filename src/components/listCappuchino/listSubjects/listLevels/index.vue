<template>
	<ul class="list-subjects-levels">
		<LevelItem v-for="level in levels" :key="level" :level="level" @level:select="selectLevel" />
	</ul>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import LevelItem from "./LevelItem.vue";
	import { useLevels } from "@/composables/useLevels";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			LevelItem,
		},
		setup(_, { emit }) {
			const { levels } = useLevels();

			const selectLevel = (levelInfo: string) => {
				emit("level:select", levelInfo);
			};

			return {
				levels,
				selectLevel,
			};
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.list-subjects-levels {
		padding: 1rem;
		margin: 0;
	}
</style>
