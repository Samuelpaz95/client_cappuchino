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
	import { defineComponent } from "vue";

	import { useLevels } from "@/composables/useLevels";
	import LevelList from "./listLevels/index.vue";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			LevelList,
			ButtonIcon,
		},
		setup() {
			const { detailLevel, levelSelect, formatLevel, showLevel } = useLevels();

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
