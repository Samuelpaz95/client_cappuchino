<template>
	<caption>
		<div class="schedule-table-header__content">
			<h3 class="schedule-table-header__title">
				<slot></slot>
			</h3>
			<div class="schedule-table-header__icons">
				<ButtonIcon @click="downloadSchedule()" icon="camera" />
			</div>
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
	import { PropType } from "vue";
	import ButtonIcon from "../ui/ButtonIcon.vue";

	defineProps({
		downloadSchedule: {
			type: Function,
			require: true,
			default: () => {},
		},
		days: {
			type: Array as PropType<string[]>,
			require: true,
		},
	});
</script>

<style lang="scss" scoped>
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
				border: 1px solid var(--secondary-color);
				border-top: none;
				text-align: center;
				min-width: 50px;
			}

			th:first-child {
				border-left: none;
			}

			th:last-child {
				border-right: none;
			}
		}

		&__content {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__icons {
			margin-right: 1rem;
		}
	}
</style>
