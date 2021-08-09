<template>
	<template v-if="selectLevel">
		<HeaderLevel @level:deselect="updateSelectLevel" :actualLevel="formatLevel(selectLevel)" />
		<ListSubject :level="selectLevel" />
	</template>
	<ListLevels v-else @level:select="updateSelectLevel" />
</template>

<script lang="ts">
	import { computed, defineComponent, inject, Ref } from "vue";

	import ListLevels from "./listLevels/index.vue";
	import HeaderLevel from "./HeaderLevel.vue";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";
	import ListSubject from "./listSubjects/index.vue";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			ListLevels,
			ButtonIcon,
			HeaderLevel,
			ListSubject,
		},
		setup() {
			const selectLevel: Ref<string | null> | undefined = inject("selectLevel");
			const updateSelectLevel = inject("updateSelectLevel") as Function;
			const formatLevel = inject("formatLevel") as Function;

			return {
				formatLevel,
				selectLevel,
				updateSelectLevel,
			};
		},
	});
</script>
