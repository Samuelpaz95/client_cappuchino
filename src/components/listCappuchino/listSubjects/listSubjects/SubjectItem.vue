<template>
	<li class="subject-item">
		<div class="subject-item__description">
			<p class="subject-item__name">{{ subject.name }}</p>
			<p class="subject-item__group">GRUPO</p>
		</div>
		<GroupList :groups="subject.groups" />
	</li>
</template>

<script lang="ts">
	import { defineComponent, PropType } from "vue";

	import { subject } from "../../../../interfaces";
	import GroupList from "./GroupList.vue";

	export default defineComponent({
		name: "SubjectItem",
		components: {
			GroupList,
		},
		props: {
			subject: {
				type: Object as PropType<subject>,
				require: true,
			},
		},
		setup() {
			return {};
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables";

	.subject-item {
		list-style: none;

		&__description {
			display: flex;
			justify-content: space-between;
			padding: 0 10px;
		}

		&__group,
		&__name {
			padding: 0;
			margin: 0;
			color: $secondary_color;
			font-weight: 700;
		}
	}
</style>
