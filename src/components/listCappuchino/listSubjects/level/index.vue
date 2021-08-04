<template>
	<li class="list-subjects-level">{{ mapLevels[level] }}</li>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import { mapLevels } from "../../../../enums/levels";

	export default defineComponent({
		name: "ItemLevel",
		props: {
			level: {
				type: String,
				require: true,
			},
		},
		setup() {
			return {
				mapLevels,
			};
		},
	});
</script>

<style lang="scss" scoped>
	.list-subjects-level {
		list-style: none;
	}
</style>
