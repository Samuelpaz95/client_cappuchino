<template>
	<div class="frontend">
		<BaseHeader />
		<router-view />
		<BaseFooter />
	</div>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import BaseHeader from "@/components/frontend/BaseHeader.vue";
	import BaseFooter from "@/components/frontend/BaseFooter.vue";

	export default defineComponent({
		name: "Frontend",
		components: {
			BaseHeader,
			BaseFooter,
		},
	});
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/_mixins.scss";

	.frontend {
		min-height: 100vh;
		display: grid;
		grid-template-rows: 45px auto 80px;

		@include large {
			grid-template-rows: 80px auto 80px;
		}
	}
</style>
