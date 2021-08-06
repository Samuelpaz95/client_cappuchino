<template>
	<template v-if="levelSelect != null">
		<div class="list-subjects__header">
			<ButtonIcon @click="showLevel(null)" class="list-subjects__back" icon="angle" :rotate="270" />
			<p>{{ formatLevel }}</p>
		</div>
		<pre>{{ detailLevel }}</pre>
	</template>
	<LevelList v-else @level:select="showLevel" />
</template>

<script lang="ts">
	import { computed, defineComponent, Ref, ref } from "vue";
	import { useStore } from "vuex";

	import { subjects } from "@/interfaces";
	import { mapLevels } from "@/enums/levels";
	import LevelList from "./listLevels/index.vue";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			LevelList,
			ButtonIcon,
		},
		setup() {
			const store = useStore();
			const levelSelect: Ref<string | null> = ref(null);

			const showLevel = (level: string | null) => {
				levelSelect.value = level;
			};

			const formatLevel = computed(() =>
				levelSelect.value != null ? mapLevels[levelSelect.value].toUpperCase() : ""
			);

			const detailLevel: subjects | undefined = computed(() =>
				store.getters["departments/levelSelectCarrer"](levelSelect.value)
			);

			return {
				detailLevel,
				levelSelect,
				formatLevel,
				showLevel,
			};
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.list-subjects {
		&__header {
			position: relative;
			display: flex;
			align-items: center;
			justify-content: center;
			padding: 0.5rem;
			background-color: $secondary_color;
			font-weight: 700;

			p {
				margin: 0;
			}
		}

		&__back {
			position: absolute;
			left: 1.5rem;
		}
	}
</style>
