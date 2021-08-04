<template>
	<p v-if="isMenuOpen">
		<template v-if="isShowCarrers">Carreras</template>
		<template v-else>{{ nameCarrer }}</template>
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
