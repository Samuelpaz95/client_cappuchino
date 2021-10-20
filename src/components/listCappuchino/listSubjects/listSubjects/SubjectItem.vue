<template>
	<li class="subject-item">
		<div class="subject-item__description">
			<p class="subject-item__name">{{ subject.name }}</p>
			<p class="subject-item__group">GRUPO</p>
		</div>
		<GroupList :groups="subject.groups" :codeSubject="subject.code" :level="level" />
	</li>
</template>

<script setup lang="ts">
	import { PropType } from "vue";
	import GroupList from "./GroupList.vue";
	import { subject as ISubject } from "../../../../interfaces";

	defineProps({
		subject: {
			type: Object as PropType<ISubject>,
			default: {},
			require: true,
		},
		level: {
			type: String,
			default: "",
			require: true,
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables";

	.subject-item {
		list-style: none;
		padding: 10px;

		&__description {
			display: flex;
			justify-content: space-between;
			padding: 0 10px;
			line-height: 20px;
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
