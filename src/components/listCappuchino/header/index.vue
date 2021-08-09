<template>
	<header class="list-carrers-header">
		<ButtonIcon icon="angle" :rotate="270" v-if="isMenuOpen && !isShowCarrers" @click="backToCarrers" />
		<TextContent :isMenuOpen="isMenuOpen" :isShowCarrers="isShowCarrers" />
		<ButtonIcon :icon="typeIcon" @click="openMenu" />
	</header>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

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
		data() {
			return {
				icons: ["bars", "close"],
				isMenuOpen: false,
			};
		},
		methods: {
			openMenu(): void {
				this.isMenuOpen = !this.isMenuOpen;
				this.$emit("menu:open", this.isMenuOpen);
			},

			backToCarrers(): void {
				this.$emit("menu:returnCarrers", this.isMenuOpen);
			},
		},
		computed: {
			typeIcon(): string {
				return this.icons[Number(this.isMenuOpen)];
			},
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
