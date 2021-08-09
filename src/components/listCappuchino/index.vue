<template>
	<div class="list-carrers">
		<ListHeader
			class="list-carrers__header"
			@menu:open="updateOpenMenu"
			:isShowCarrers="isInCarrers"
			@menu:returnCarrers="updateInCarrers(true)"
		/>
		<template v-if="isOpenMenu">
			<ListCarrers v-if="isInCarrers" />
			<ListSubjects v-else />
		</template>
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	import { useStateMenu } from "../../composables/useStateMenu";
	import ListHeader from "./header/index.vue";
	import ListCarrers from "./listCarrers/index.vue";
	import ListSubjects from "./listSubjects/index.vue";

	export default defineComponent({
		name: "ListCappuchino",
		components: {
			ListHeader,
			ListCarrers,
			ListSubjects,
		},
		setup() {
			const { isOpenMenu, isInCarrers, updateInCarrers, updateOpenMenu } = useStateMenu();

			return {
				isOpenMenu,
				isInCarrers,
				updateOpenMenu,
				updateInCarrers,
			};
		},
	});
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables.scss";

	.list-carrers {
		background-color: $primary_color;

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
