<template>
	<header class="list-carrers-header">
		<button class="list-carrers-header__option" v-if="isMenuOpen && !isShowCarrers" @click="backToCarrers">
			<BaseSystemIcons icon="angle" :rotate="270" />
		</button>
		<TextContent :isMenuOpen="isMenuOpen" :isShowCarrers="isShowCarrers" />
		<button class="list-carrers-header__option" @click="openMenu">
			<BaseSystemIcons :icon="typeIcon" />
		</button>
	</header>
</template>

<script lang="ts">
	import { computed, defineComponent, Ref, ref } from "vue";

	import BaseSystemIcons from "../../BaseSystemIcons.vue";
	import TextContent from "./textContent/index.vue";

	export default defineComponent({
		name: "ListCarrersHeader",
		components: {
			BaseSystemIcons,
			TextContent,
		},
		emits: ["menu:open", "menu:returnCarrers"],
		props: {
			isShowCarrers: {
				require: true,
				type: Boolean,
				default: true,
			},
		},
		setup(_, { emit }) {
			const icons: Ref<string[]> = ref(["bars", "close"]);
			let isMenuOpen: Ref<boolean> = ref(false);

			const openMenu = () => {
				isMenuOpen.value = !isMenuOpen.value;
				emit("menu:open", isMenuOpen.value);
			};

			const backToCarrers = () => {
				emit("menu:returnCarrers", isMenuOpen.value);
			};

			const typeIcon = computed(() => icons.value[Number(isMenuOpen.value)]);

			return {
				isMenuOpen,
				openMenu,
				typeIcon,
				backToCarrers,
			};
		},
	});
</script>

<style scoped lang="scss">
	@import "../../../scss/abstracts/variables.scss";

	.list-carrers-header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		background-color: $primary_color;

		&__option {
			display: flex;
			align-items: center;
			background-color: inherit;
			border: none;
			color: inherit;
		}
	}
</style>
