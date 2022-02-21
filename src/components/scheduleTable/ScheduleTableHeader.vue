<template>
	<caption>
		<div class="schedule-table-header__content">
			<h3 class="schedule-table-header__title">
				<slot></slot>
			</h3>
			<ScheduleTableActions :downloadSchedule="downloadSchedule" />
		</div>
	</caption>
	<thead class="schedule-table-header__header">
		<tr>
			<th v-for="day of days" :key="day">
				{{ day }}
			</th>
		</tr>
	</thead>
</template>

<script setup lang="ts">
	import { computed, PropType } from "vue";
	import ScheduleTableActions from "./ScheduleTableActions.vue";

	const props = defineProps({
		downloadSchedule: {
			type: Function,
			require: true,
			default: () => {},
		},
		days: {
			type: Array as PropType<string[]>,
			require: true,
			default: () => [],
		},
	});

	const widthForCells = computed(() => 92 / (props.days.length - 1) + "%");
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/mixins";

	.schedule-table-header {
		&__title {
			text-align: left;
			font-size: 1.4rem;
			margin-bottom: 1.6rem;

			h3 {
				font-weight: 100;
				margin: 0;
			}
		}

		&__header {
			th,
			td {
				border: 1px solid var(--font-color);
				border-top: none;
				text-align: center;
			}

			th:first-child {
				border-left: none;
				max-width: 50px;
			}

			th:last-child {
				border-right: none;
			}

			:not(th:first-child) {
				width: v-bind(widthForCells);
			}
		}

		&__content {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
	}
</style>
