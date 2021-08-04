<template>
	<header class="list-carrers-header">
		<button class="list-carrers-header__option" @click="openMenu">
			<BaseSystemIcons :icon="typeIcon" />
		</button>
		<p v-if="isMenuOpen">
			<template v-if="isShowCarrers">Carreras</template>
			<template v-else>{{ nameCarrer }}</template>
		</p>
	</header>
</template>

<script lang="ts">
	import { computed, defineComponent, Ref, ref } from "vue";
	import { useStore } from "vuex";

	import BaseSystemIcons from "../../BaseSystemIcons.vue";

	export default defineComponent({
		name: "ListCarrersHeader",
		components: {
			BaseSystemIcons,
		},
		emits: ["menu:open"],
		props: {
			isShowCarrers: {
				require: true,
				type: Boolean,
				default: true,
			},
		},
		setup(_, { emit }) {
			const store = useStore();
			const icons: Ref<string[]> = ref(["bars", "close"]);
			let isMenuOpen: Ref<boolean> = ref(false);
			const nameCarrer = computed(() => store.getters["departments/nameCarrer"]);

			const openMenu = () => {
				isMenuOpen.value = !isMenuOpen.value;
				emit("menu:open", isMenuOpen.value);
			};

			const typeIcon = computed(() => icons.value[Number(isMenuOpen.value)]);

			return {
				isMenuOpen,
				openMenu,
				typeIcon,
				nameCarrer,
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
