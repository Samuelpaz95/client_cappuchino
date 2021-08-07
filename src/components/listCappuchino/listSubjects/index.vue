<template>
	<template v-if="isLevelSelect">
		<HeaderLevel @level:deselect="setLevel" :levelSelect="formatLevel" />
		<pre>{{ detailLevel }}</pre>
	</template>
	<ListLevels v-else @level:select="setLevel" />
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import { useLevels } from "../../../composables/useLevels";
	import ListLevels from "./listLevels/index.vue";
	import HeaderLevel from "./HeaderLevel.vue";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	export default defineComponent({
		name: "ListSubjects",
		components: {
			ListLevels,
			ButtonIcon,
			HeaderLevel,
		},
		setup() {
			const { detailLevel, levelSelect, setLevel, formatLevel, isLevelSelect } = useLevels();

			return {
				detailLevel,
				levelSelect,
				setLevel,
				formatLevel,
				isLevelSelect,
			};
		},
	});
</script>
