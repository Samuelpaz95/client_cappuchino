<template>
	<main class="tracker">
		<InputSearch class="tracker__search" @select:professor="searchDocent" />
		<ScheduleTable class="tracker__table" />
	</main>
</template>

<script setup lang="ts">
	import { useTeacherTrakcer } from "../../composables/useTeacherTracker";
	import { useDepartment } from "../../composables/useDepartment";
	import InputSearch from "../../components/InputSearch.vue";
	import ScheduleTable from "../../components/scheduleTable/index.vue";

	const { currentDepartment } = useDepartment();
	const { searchDocent } = useTeacherTrakcer(currentDepartment);
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
			margin: 15px;

			@include large {
				margin: 0;
				margin-left: 1rem;
			}
		}
	}
</style>
