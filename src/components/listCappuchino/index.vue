<template>
	<div class="list-carrers">
		<ListHeader
			class="list-carrers__header"
			@menu:open="showMenu"
			:isShowCarrers="isShowCarrers"
			@menu:returnCarrers="showCarrers(true)"
		/>
		<template v-if="isOpenMenu">
			<ListCarrers v-if="isShowCarrers" @carrer:select="showCarrers(false)" />
			<ListSubjects v-else />
		</template>
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, Ref } from "vue";

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
			let isShowCarrers: Ref<boolean> = ref(true);
			let isOpenMenu: Ref<boolean> = ref(false);

			const showCarrers = (isOpen: boolean) => {
				isShowCarrers.value = isOpen;
			};

			const showMenu = (open: boolean) => {
				isOpenMenu.value = open;
			};

			return {
				isShowCarrers,
				isOpenMenu,
				showCarrers,
				showMenu,
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
