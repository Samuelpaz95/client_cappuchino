<template>
	<header class="list-carrers-header">
		<button class="list-carrers-header__option" @click="openMenu">
			<BaseSystemIcons :icon="typeIcon" />
		</button>
	</header>
</template>

<script lang="ts">
	import { computed, defineComponent, Ref, ref } from "vue";

	import BaseSystemIcons from "../../BaseSystemIcons.vue";

	export default defineComponent({
		name: "ListCarrersHeader",
		components: {
			BaseSystemIcons,
		},
		emits: ["menu:open"],
		setup(_, { emit }) {
			let isMenuOpen: Ref<boolean> = ref(false);
			const icons: Ref<string[]> = ref(["bars", "close"]);

			const openMenu = () => {
				isMenuOpen.value = !isMenuOpen.value;
				emit("menu:open", isMenuOpen.value);
			};

			const typeIcon = computed(() => icons.value[Number(isMenuOpen.value)]);

			return {
				isMenuOpen,
				openMenu,
				typeIcon,
			};
		},
	});
</script>

<style scoped lang="scss">
	@import "../../../scss/abstracts/variables.scss";

	.list-carrers-header {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 0.5rem 1rem;
		background-color: $primary_color;

		&__option {
			background-color: inherit;
			border: none;
			color: inherit;
		}
	}
</style>
