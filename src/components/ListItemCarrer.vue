<template>
	<li>
		<span>
			<div>{{ nameCarrer }}</div>
			<div>{{ departmentName }}</div>
			<div>Actualizado al {{ updateAt }}</div>
		</span>
		<span>
			<span>X</span>
			<span>></span>
		</span>
	</li>
</template>

<script lang="ts">
	import { defineComponent, computed } from "vue";
	import { useStore } from "vuex";

	export default defineComponent({
		name: "ListItemCarrers",
		props: {
			nameCarrer: {
				type: String,
				require: true,
			},
			updateAt: {
				type: String,
				require: true,
			},
		},
		setup() {
			const store = useStore();
			const departmentName = computed(() => store.getters["departments/departmentName"]);

			return {
				departmentName,
			};
		},
	});
</script>

<style scoped lang="scss"></style>
