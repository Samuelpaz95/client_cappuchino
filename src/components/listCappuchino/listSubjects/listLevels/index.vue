<template>
	<ul class="list-subjects-levels">
		<LevelItem
			v-for="level in levels"
			:key="level"
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
		padding: 1rem;
		margin: 0;
	}
</style>
