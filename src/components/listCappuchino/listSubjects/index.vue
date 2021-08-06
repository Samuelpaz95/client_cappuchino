<template>
	<div class="list-subjects__header" v-if="levelSelected">
		{{ mapLevels[levelSelected] }}
	</div>
	<LevelList v-else @level:select="showFullLevel" />
</template>

<script lang="ts">
	import { defineComponent, Ref, ref } from "vue";
	import { mapLevels } from "../../../enums/levels";

	import LevelList from "./listLevels/index.vue";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			LevelList,
		},
		setup() {
			const levelSelected: Ref<string | null> = ref(null);

			const showFullLevel = ({ level, select }: { level: string; select: boolean }) => {
				if (select) {
					levelSelected.value = level;
				} else {
					levelSelected.value = null;
				}
			};

			return {
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
