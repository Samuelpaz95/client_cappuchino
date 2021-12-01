<template>
	<li class="list-item-carrer" @click="$emit('carrer:select', nameCarrer)">
		<span class="list-item-carrer__content">
			<div class="list-item-carrer__name">{{ nameCarrer }}</div>
			<div class="list-item-carrer__description">Actualizado al {{ updateAt }}</div>
		</span>
		<span class="list-item-carrer__actions">
			<ButtonIcon icon="angle" :rotate="90" />
		</span>
	</li>
</template>

<script setup lang="ts">
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	defineEmits(["carrer:select"]);

	defineProps({
		nameCarrer: {
			type: String,
			default: "",
			require: true,
		},
		updateAt: {
			type: String,
			require: true,
		},
	});
</script>

<style scoped lang="scss">
	.list-item-carrer {
		margin: 5px;
		list-style: none;
		display: flex;
		justify-content: space-between;
		padding: 1rem;
		cursor: pointer;

		&__content {
			font-size: 0.8rem;
			line-height: 12px;
		}

		&__name {
			line-height: 18px;
			font-weight: 700;
		}

		&__description {
			font-size: 0.9em;
		}

		&__actions {
			display: flex;
			align-items: center;
		}
	}
</style>
