<template>
	<div class="list-subjects__header" v-if="levelSelected">
		{{ mapLevels[levelSelected] }}
	</div>
	<ul class="list-subjects__levels" v-else>
		<LevelList v-for="level in levels" :key="level" :level="level" @level:select="showFullLevel" />
	</ul>
</template>

<script lang="ts">
	import { computed, defineComponent, Ref, ref } from "vue";
	import { useStore } from "vuex";
	import { mapLevels } from "../../../enums/levels";

	import LevelList from "./level/index.vue";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			LevelList,
		},
		setup() {
			const store = useStore();
			const levels = computed(() => store.getters["departments/levelsSelectCarrer"]);
			const levelSelected: Ref<string | null> = ref(null);

			const showFullLevel = ({ level, select }: { level: string; select: boolean }) => {
				if (select) {
					levelSelected.value = level;
				} else {
					levelSelected.value = null;
				}
			};

			return {
				levels,
				mapLevels,
				levelSelected,
				showFullLevel,
			};
		},
	});
</script>

<style lang="scss" scoped>
	@import "../../../scss/abstracts/variables.scss";

	.list-subjects {
		&__levels {
			padding: 1rem;
			margin: 0;
		}

		&__header {
			text-align: center;
			padding: 0.5rem;
			background-color: $secondary_color;
			font-weight: 700;
		}
	}
</style>
