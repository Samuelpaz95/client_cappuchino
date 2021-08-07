<template>
	<li class="subject-item">
		<div class="subject-item__description">
			<p class="subject-item__name">{{ subject.name }}</p>
			<p class="subject-item__group">GRUPO</p>
		</div>
		<ul style="padding: 0">
			<li
				style="display: flex; justify-content: space-between; padding: 0 1rem"
				v-for="group of subject.groups"
				:key="group.code"
			>
				<span>{{ group.schedule[0].teacher }}</span>
				<span>{{ group.code }}</span>
			</li>
		</ul>
	</li>
</template>

<script lang="ts">
	import { defineComponent, PropType } from "vue";
	import { subject } from "../../../../interfaces";

	export default defineComponent({
		name: "SubjectItem",
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
