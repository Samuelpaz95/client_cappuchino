<template>
	<caption class="schedule-table-header__title">
		<slot></slot>
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

	defineProps({
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
			font-size: 1.2rem;
			margin-bottom: 1rem;
		}

		&__header {
			th,
			td {
				border: 1px solid red;
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
	}
</style>
