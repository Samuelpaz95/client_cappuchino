<template>
	<template v-if="selectLevel">
		<HeaderLevel @level:deselect="updateSelectLevel($event)" :actualLevel="formatLevel(selectLevel)" />
		<ListSubject :level="selectLevel" />
	</template>
	<ListLevels v-else @level:select="updateSelectLevel($event)" />
</template>

<script setup lang="ts">
	import { inject, Ref } from "vue";

	import ListLevels from "./listLevels/index.vue";
	import HeaderLevel from "./HeaderLevel.vue";
	import ListSubject from "./listSubjects/index.vue";

	const selectLevel: Ref<string | null> | undefined = inject("selectLevel");
	const updateSelectLevel = inject("updateSelectLevel") as Function;
	const formatLevel = inject("formatLevel") as Function;
</script>
