<template>
	<ul class="list-subjects-levels">
		<LevelItem
			v-for="level in levels"
			:key="level"
			class="list-subjects-levels__item"
			:level="level"
			@level:select="$emit('level:select', $event)"
		/>
	</ul>
</template>

<script setup lang="ts">
	import LevelItem from "./LevelItem.vue";
	import { useLevels } from "../../../../composables/useLevels";

	defineEmits(["level:select"]);
	const { levels } = useLevels();
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.list-subjects-levels {
		padding: 0;
		margin: 0;

		&__item:not(:last-child) {
			border-bottom: 1px solid transparentize($font_color, 0.7);
		}
	}
</style>
