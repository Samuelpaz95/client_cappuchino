<template>
	<ul class="subject-list">
		<SubjectItem
			class="subject-list__item"
			v-for="subject of subjects"
			:key="subject.code"
			:subject="subject"
		/>
	</ul>
</template>

<script lang="ts">
	import { defineComponent, Ref, toRef } from "vue";

	import { useLevels } from "../../../../composables/useLevels";
	import SubjectItem from "./SubjectItem.vue";

	export default defineComponent({
		name: "SubjetcList",
		components: {
			SubjectItem,
		},
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
				subjects: detailLevel(level.value),
			};
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables";

	.subject-list {
		padding: 0;
		margin: 0;
		background-color: $background_color;

		&__item:not(:first-child) {
			border-top: 1px solid transparentize($font_color, 0.7);
		}
	}
</style>
