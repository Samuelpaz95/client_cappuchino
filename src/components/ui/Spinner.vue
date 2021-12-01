<template>
	<div class="spinner"></div>
</template>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";

	.spinner {
		border: 4px solid $primary_color;
		width: 36px;
		height: 36px;
		border-radius: 50%;
		border-left-color: $secondary_color;
		animation: spin 1s ease infinite;
		margin: 1rem auto;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}

		100% {
			transform: rotate(360deg);
		}
	}
</style>
