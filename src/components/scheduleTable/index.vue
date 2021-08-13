<template>
	<div class="schedule-table">
		<table class="schedule-table__table">
			<caption class="schedule-table__title">
				Horarios Disponibles
			</caption>
			<thead>
				<tr>
					<th v-for="value of ['', ...semanticDays]" :key="value">
						{{ value }}
					</th>
				</tr>
			</thead>
			<tbody></tbody>
		</table>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import { useDays } from "../../composables/useDays";

	export default defineComponent({
		setup() {
			const { semanticDays } = useDays();

			return { semanticDays: semanticDays() };
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.schedule-table {
		padding: 1rem;
		background-color: $primary_color;
		border-radius: $border_radius;

		&__title {
			text-align: left;
			font-size: 1.2rem;
			margin-bottom: 1rem;
		}

		&__table {
			width: 100%;
			border-collapse: collapse;

			th,
			td {
				border: 1px solid red;
			}

			tr {
				:first-child {
					border-left: none;
				}

				:last-child {
					border-right: none;
				}
			}

			:nth-child(2) th {
				border-top: none;
			}

			:last-child td {
				border-bottom: none;
			}
		}
		width: 100%;
	}
</style>
