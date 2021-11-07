<template>
	<div class="list-carrers">
		<Header class="list-carrers__header" />
		<template v-if="isOpenMenu">
			<div class="list-carrers__options">
				<ListCarrers v-if="isInCarrers" />
				<ListSubjects v-else />
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
	import Header from "./Header.vue";
	import ListCarrers from "./listCarrers/index.vue";
	import ListSubjects from "./listSubjects/index.vue";
	import { useStateMenu } from "../../composables/useStateMenu";
	import { useCheckboxSubjects } from "../../composables/useCheckboxSubjects";

	const { isOpenMenu, isInCarrers } = useStateMenu();
	useCheckboxSubjects();
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables.scss";

	.list-carrers {
		&__list {
			padding: 1rem;
			margin: 0;
			width: 100%;
			background-color: $primary_color;
			position: absolute;
			z-index: 10;
		}

		&__header {
			position: relative;
		}
	}
</style>
