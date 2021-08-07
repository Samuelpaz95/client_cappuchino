<template>
	<header class="list-carrers-header">
		<ButtonIcon icon="angle" :rotate="270" v-if="isMenuOpen && !isShowCarrers" @click="backToCarrers" />
		<TextContent :isMenuOpen="isMenuOpen" :isShowCarrers="isShowCarrers" />
		<ButtonIcon :icon="typeIcon" @click="openMenu" />
	</header>
</template>

<script lang="ts">
	import { computed, defineComponent, Ref, ref } from "vue";

	import BaseSystemIcons from "@/components/BaseSystemIcons.vue";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";
	import TextContent from "./TextContent.vue";

	export default defineComponent({
		name: "ListCarrersHeader",
		components: {
			BaseSystemIcons,
			TextContent,
			ButtonIcon,
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
	@import "@/scss/abstracts/variables.scss";

	.list-carrers-header {
		display: flex;
		justify-content: space-between;
		padding: 0.5rem 1rem;
		background-color: $primary_color;
	}
</style>
