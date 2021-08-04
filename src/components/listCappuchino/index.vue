<template>
	<div class="list-carrers">
		<ListHeader class="list-carrers__header" @menu:open="showCarrers" />
		<ListCarrers v-show="isShowCarrers" />
	</div>
</template>

<script lang="ts">
	import { defineComponent, ref, Ref } from "vue";

	import ListHeader from "./header/index.vue";
	import ListCarrers from "./listCarrers/index.vue";

	export default defineComponent({
		name: "ListCappuchino",
		components: {
			ListHeader,
			ListCarrers,
		},
		setup() {
			let isShowCarrers: Ref<boolean> = ref(false);

			const showCarrers = (isOpen: boolean) => {
				isShowCarrers.value = isOpen;
			};

			return {
				isShowCarrers,
				showCarrers,
			};
		},
	});
</script>

<style scoped lang="scss">
	@import "../../scss/abstracts/variables.scss";

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
