<template>
	<div class="list-carrers">
		<Header
			class="list-carrers__header"
			:isInDesktop="isInDesktop"
			:isOpenMenu="isOpenMenu"
			@update:openMenu="isOpenMenu = $event"
		/>
		<template v-if="isOpenMenu">
			<div class="list-carrers__options">
				<ListCarrers v-if="stateMenu.isInCarrers" />
				<ListSubjects v-else />
			</div>
		</template>
	</div>
</template>

<script setup lang="ts">
	import { onBeforeUnmount, ref, watchEffect } from "vue";
	import Header from "./Header.vue";
	import ListCarrers from "./listCarrers/index.vue";
	import ListSubjects from "./listSubjects/index.vue";
	import { useMediaQueries } from "../../composables/ui/useMediaQueries";
	import { MEDIA_QUERIES } from "../../constants";
	import { stateMenu } from "../../store/state/Menu";

	const { listenMediaQuery } = useMediaQueries();

	const isInDesktop = ref(true);
	const isOpenMenu = ref(isInDesktop.value);

	listenMediaQuery(MEDIA_QUERIES.isLarge, (evt) => {
		isInDesktop.value = evt.matches;
	});

	watchEffect(() => {
		isOpenMenu.value = isInDesktop.value || isOpenMenu.value;
	});

	onBeforeUnmount(() => {
		stateMenu.selectLevel = null;
		stateMenu.selectCarrer = null;
		stateMenu.isInCarrers = true;
	});
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables";

	.list-carrers {
		border-bottom-right-radius: $border_radius;

		&__options {
			background-color: var(--background-color);
		}

		&__header {
			position: relative;
			box-shadow: var(--box-shadow);
		}
	}
</style>
