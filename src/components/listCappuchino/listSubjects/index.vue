<template>
	<template v-if="isLevelSelect">
		<HeaderLevel @level:deselect="setLevel" :actualLevel="formatLevel" />
		<ListSubject :level="actualLevel" />
	</template>
	<ListLevels v-else @level:select="setLevel" />
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import { useLevels } from "../../../composables/useLevels";
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
			const { actualLevel, setLevel, formatLevel, isLevelSelect } = useLevels();

			return {
				actualLevel,
				setLevel,
				formatLevel,
				isLevelSelect,
			};
		},
	});
</script>
