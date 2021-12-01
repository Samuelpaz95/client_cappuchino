<template>
	<ul class="list-subjects-levels" v-if="levels.length > 0">
		<LevelItem
			v-for="level in levels"
			:key="level"
			class="list-subjects-levels__item"
			:level="level"
			@level:select="$emit('level:select', $event)"
		/>
	</ul>
	<Spinner v-else />
</template>

<script setup lang="ts">
	import { inject, ComputedRef } from "vue";
	import LevelItem from "./LevelItem.vue";
	import Spinner from "../../../ui/Spinner.vue";

	defineEmits(["level:select"]);
	const levels = inject("levels") as ComputedRef<string[]>;
</script>

<style lang="scss" scoped>
	.list-subjects-levels {
		padding: 0;
		margin: 0;
		overflow: auto;

		&__item:not(:last-child) {
			border-bottom: 1px solid var(--transparent-font-color);
		}
	}
</style>
