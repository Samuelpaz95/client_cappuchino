<template>
	<header class="list-carrers-header">
		<template v-if="isOpenMenu">
			<template v-if="!isInCarrers">
				<ButtonIcon aria-label="close-menu" icon="angle" :rotate="270" @click="updateInCarrers(true)" />
				<p>{{ selectCarrer }}</p>
			</template>
			<p v-else>CARRERAS</p>
		</template>
		<ButtonIcon aria-label="burger-menu" :icon="typeIcon" @click="updateOpenMenu(!isOpenMenu)" />
	</header>
</template>

<script setup lang="ts">
	import { computed, inject, Ref, ref } from "vue";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	const icons = ref(["bars", "close"]);
	const isOpenMenu: Ref<boolean> | undefined = inject("isOpenMenu");
	const isInCarrers: Ref<boolean> | undefined = inject("isInCarrers");
	const selectCarrer: Ref<string | null> | undefined = inject("selectCarrer");

	const updateInCarrers = inject("updateInCarrers") as Function;
	const updateOpenMenu = inject("updateOpenMenu") as Function;

	const typeIcon = computed(() => {
		if (isOpenMenu) {
			return icons.value[Number(isOpenMenu.value)];
		}
		return icons.value[0];
	});
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables.scss";

	.list-carrers-header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		height: $lineHeigth;
		background-color: $primary_color;
		p {
			font-weight: 700;
			margin: 0;
			display: flex;
			align-items: center;
			text-align: center;
			line-height: 15px;
		}
	}
</style>
