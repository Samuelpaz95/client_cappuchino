<template>
	<div class="frontend">
		<BaseHeader />
		<router-view />
		<BaseFooter />
	</div>
</template>

<script setup lang="ts">
	import BaseHeader from "@/components/frontend/BaseHeader.vue";
	import BaseFooter from "@/components/frontend/BaseFooter.vue";
	import { useDepartment } from "../composables/useDepartment";

	useDepartment();
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
