<template>
	<li class="list-subjects-level">
		<div class="list-subjects-level__row">
			<span>{{ mapLevels[level] }}</span>
			<ButtonIcon @click="selectLevel" icon="angle" :rotate="90" />
		</div>
	</li>
</template>

<script lang="ts">
	import { defineComponent, Ref, toRef } from "vue";
	import { mapLevels } from "@/enums/levels";

	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	export default defineComponent({
		name: "ItemLevel",
		components: {
			ButtonIcon,
		},
		emits: ["level:select"],
		props: {
			level: {
				type: String,
				require: true,
				default: "",
			},
		},
		setup(props, { emit }) {
			const level: Ref<string> = toRef(props, "level");

			const selectLevel = () => {
				emit("level:select", level.value);
			};

			return {
				mapLevels,
				selectLevel,
			};
		},
	});
</script>

<style lang="scss" scoped>
	.list-subjects-level {
		list-style: none;

		&__row {
			display: flex;
			justify-content: space-between;
		}
	}
</style>
