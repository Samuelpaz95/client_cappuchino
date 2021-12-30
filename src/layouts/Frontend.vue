<template>
	<div class="frontend">
		<BaseHeader />
		<router-view />
		<BaseFooter />
	</div>
</template>

<script setup lang="ts">
	import BaseHeader from "../components/frontend/BaseHeader.vue";
	import BaseFooter from "../components/frontend/BaseFooter.vue";
</script>

<style scoped lang="scss">
	.frontend {
		min-height: 100vh;
		display: grid;
		grid-template-rows: 80px auto 184px;
	}
</style>
