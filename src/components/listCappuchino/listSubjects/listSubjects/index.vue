<template>
	<ul>
		{{
			detailLevel
		}}
	</ul>
</template>

<script lang="ts">
	import { defineComponent, Ref, toRef } from "vue";

	import { useLevels } from "../../../../composables/useLevels";

	export default defineComponent({
		name: "SubjetcList",
		props: {
			level: {
				type: String,
				default: "",
				require: true,
			},
		},
		setup(props) {
			const level: Ref<string> = toRef(props, "level");
			const { detailLevel } = useLevels();

			return {
				detailLevel: detailLevel(level.value),
			};
		},
	});
</script>

<style scoped></style>
