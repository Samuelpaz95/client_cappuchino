<template>
	<div class="list-subjects-header">
		<ButtonIcon
			@click="$emit('level:deselect', null)"
			class="list-subjects-header__back"
			icon="angle"
			:rotate="270"
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
	@import "@/scss/abstracts/variables.scss";

	.list-subjects-header {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0.5rem;
		background-color: $secondary_color;
		font-weight: 700;

		p {
			margin: 0;
		}

		&__back {
			position: absolute;
			left: 1.5rem;
		}
	}
</style>
