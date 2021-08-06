<template>
	<li class="list-subjects-level">
		<div class="list-subjects-level__row">
			<span>{{ mapLevels[level] }}</span>
			<ButtonIcon @click="selectLevel" icon="angle" :rotate="90" />
		</div>
	</li>
</template>

<script lang="ts">
	import { defineComponent, Ref, ref, toRef } from "vue";
	import { mapLevels } from "../../../../enums/levels";

	import ButtonIcon from "../../../ui/ButtonIcon.vue";

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
			const isSelected: Ref<boolean> = ref(false);

			const selectLevel = () => {
				isSelected.value = !isSelected.value;
				emit("level:select", {
					level: level.value,
					select: isSelected.value,
				});
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
