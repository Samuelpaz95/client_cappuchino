<template>
	<ul class="group-list">
		<GroupItem
			v-for="group of groups"
			:key="group.code"
			:groupCode="group.code"
			:nameTeacher="group.schedule[0].teacher"
		/>
	</ul>
</template>

<script lang="ts">
	import { defineComponent, PropType } from "vue";

	import { groups } from "../../../../interfaces";
	import GroupItem from "./GroupItem.vue";

	export default defineComponent({
		name: "GroupList",
		components: {
			GroupItem,
		},
		props: {
			groups: {
				type: Object as PropType<groups>,
				require: true,
			},
		},
	});
</script>

<style lang="scss" scoped>
	.group-list {
		padding: 0;
	}
</style>
