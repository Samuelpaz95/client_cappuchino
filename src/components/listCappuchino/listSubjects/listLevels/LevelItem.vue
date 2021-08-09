<template>
	<li class="list-subjects-level">
		<div class="list-subjects-level__row">
			<span>{{ formatLevel(level) }}</span>
			<ButtonIcon @click="selectLevel" icon="angle" :rotate="90" />
		</div>
	</li>
</template>

<script lang="ts">
	import { defineComponent, inject, Ref, toRef } from "vue";

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
			const formatLevel = inject("formatLevel") as Function;

			const selectLevel = () => {
				emit("level:select", level.value);
			};

			return {
				formatLevel,
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
