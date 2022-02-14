<template>
	<template v-if="stateMenu.selectLevel">
		<HeaderLevel
			@level:deselect="stateMenu.selectLevel = $event"
			:actualLevel="formatLevel(stateMenu.selectLevel)"
		/>
		<ListSubject :level="stateMenu.selectLevel" />
	</template>
	<ListLevels v-else @level:select="stateMenu.selectLevel = $event" />
</template>

<script setup lang="ts">
	import ListLevels from "./listLevels/index.vue";
	import HeaderLevel from "./HeaderLevel.vue";
	import ListSubject from "./listSubjects/index.vue";
	import { formatLevel } from "../../../utils/formatLevel";
	import { stateMenu } from "../../../store/state/Menu";
</script>
