<template>
	<td
		:rowspan="rowspan"
		:class="[{ 'schedule-item__conflictive': schedulesItem.isConfictive }, 'schedule-item']"
		:style="`background-color: ${!schedulesItem.isConfictive ? backgroundColor : null}`"
	>
		<div :key="schedule.key" v-for="schedule of schedulesItem.schedules">
			<div><strong v-if="!schedule.isClass">*</strong> {{ schedule.subjectName }}</div>
			<span>G {{ schedule.groupCode }}</span> - <span>A {{ schedule.room }}</span>
		</div>
	</td>
</template>

<script setup lang="ts">
	import { computed, PropType } from "vue";
	import { scheduleItem } from "../../interfaces";

	const { schedulesItem, colors, rowspan } = defineProps({
		schedulesItem: {
			require: true,
			default: () => [],
			type: Object as PropType<scheduleItem>,
		},
		colors: {
			require: true,
			default: () => [],
			type: Array,
		},
		rowspan: {
			require: true,
			default: 1,
			type: Number,
		},
	});

	const backgroundColor = computed(() =>
		schedulesItem.schedules.length == 1
			? colors[schedulesItem.schedules[0].indexSubject % (colors.length - 1)]
			: null
	);
</script>

<style lang="scss" scoped>
	.schedule-item {
		font-size: 1em;
		line-height: 16px;
		font-weight: 700;
		color: initial;
		background-color: v-bind(backgroundColor);
		padding: 0.5rem;

		&__conflictive {
			background: transparent;
			color: var(--secondary-color);
			font-weight: 700;
		}
	}
</style>
