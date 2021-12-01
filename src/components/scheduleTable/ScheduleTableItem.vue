<template>
	<div :class="[{ 'schedule-item__conflictive': schedulesItem.isConfictive }, 'schedule-item']">
		<div v-for="schedule of schedulesItem.schedules" :key="schedule.key">
			<div><strong v-if="!schedule.isClass">*</strong> {{ schedule.subjectName }}</div>
			<span>G {{ schedule.groupCode }}</span> - <span>A {{ schedule.room }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
	import { PropType } from "vue";
	import { scheduleItem } from "../../interfaces";

	const { schedulesItem } = defineProps({
		schedulesItem: {
			require: true,
			default: () => [],
			type: Object as PropType<scheduleItem>,
		},
	});
</script>

<style lang="scss" scoped>
	.schedule-item {
		margin: 10px;
		font-size: 1em;
		line-height: 16px;

		&__conflictive {
			color: var(--secondary-color);
			font-weight: 700;
		}
	}
</style>
