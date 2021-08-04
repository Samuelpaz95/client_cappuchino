<template>
	<p class="text-content-header" v-if="isMenuOpen">
		<template v-if="isShowCarrers">CARRERAS</template>
		<template v-else>{{ nameCarrer.toUpperCase() }}</template>
	</p>
</template>

<script lang="ts">
	import { defineComponent, computed } from "vue";
	import { useStore } from "vuex";

	export default defineComponent({
		name: "textContentHeader",
		props: {
			isMenuOpen: {
				type: Boolean,
				require: true,
			},
			isShowCarrers: {
				type: Boolean,
				require: true,
			},
		},
		setup() {
			const store = useStore();
			const nameCarrer = computed(() => store.getters["departments/nameCarrer"]);

			return {
				nameCarrer,
			};
		},
	});
</script>

<style lang="scss" scoped>
	.text-content-header {
		font-weight: 700;
		margin: 0;
		display: flex;
		align-items: center;
		text-align: center;
		line-height: 15px;
	}
</style>
