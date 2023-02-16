<template>
	<a
		class="linkButton"
		href="http://scesi.org/form-starhucks-feedback"
		target="_blank"
		rel="noopener noreferrer"
	>
		<BaseSystemIcons icon="comment" />
		¿Tienes Sugerencias?
	</a>
</template>

<script setup lang="ts">
	import BaseSystemIcons from "@/components/ui/BaseSystemIcons.vue";
</script>

<style scoped lang="scss">
	.linkButton {
		display: flex;
		align-items: center;
		gap: 8px;
		position: absolute;
		top: 0;
		left: 50%;
		width: max-content;

		padding: 0.75rem 1.5rem;
		font-weight: 600;
		text-align: center;
		text-decoration: none;
		color: var(--primary-color);

		border-radius: 999px;
		background-color: var(--secondary-color);
		transform: translate(-50%, -50%);
	}
</style>
