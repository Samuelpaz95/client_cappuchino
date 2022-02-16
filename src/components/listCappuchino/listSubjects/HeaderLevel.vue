<template>
	<div class="list-subjects-header">
		<ButtonIcon
			class="list-subjects-header__back"
			icon="angle"
			:rotate="270"
			@click="$emit('level:deselect', null)"
		/>
		<p>{{ actualLevel }}</p>
	</div>
</template>

<script setup lang="ts">
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	defineProps({
		actualLevel: String,
	});
	defineEmits(["level:deselect"]);
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables";

	.list-subjects-header {
		height: $lineHeight;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		background-color: var(--secondary-color);
		color: var(--contrast-font-color);
		font-weight: 700;
		box-shadow: var(--box-shadow);

		p {
			margin: 0;
		}

		&__back {
			position: absolute;
			left: 1.5rem;
		}
	}
</style>
