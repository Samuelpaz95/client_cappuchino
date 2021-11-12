<template>
	<main class="tracker">
		<InputSearch class="tracker__search" :listOfItems="['1', '2']" />
		<ScheduleTable class="tracker__table" />
	</main>
</template>

<script setup lang="ts">
	import InputSearch from "@/components/InputSearch.vue";
	import ScheduleTable from "../../components/scheduleTable/index.vue";
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/mixins";

	.tracker {
		margin: 1rem;
		display: grid;

		@include large {
			grid-template-columns: 0.54fr 1fr;
			gap: 1rem;
		}

		&__search {
			margin: 15px 30px;

			@include large {
				margin: 0;
			}
		}
	}
</style>
