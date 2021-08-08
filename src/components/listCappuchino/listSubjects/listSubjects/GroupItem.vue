<template>
	<li class="group-item">
		<!-- TODO: Si el tamnio del nombre es mucho cortarlo -->
		<span>{{ nameTeacher }}</span>
		<span>{{ groupCode }}</span>
	</li>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "GroupItem",
		props: {
			nameTeacher: {
				type: String,
				default: "",
				require: true,
			},
			groupCode: String,
		},
	});
</script>

<style lang="scss" scoped>
	.group-item {
		display: flex;
		justify-content: space-between;
		padding: 0 1rem;
	}
</style>
