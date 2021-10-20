<template>
	<li class="list-item-carrer">
		<span class="list-item-carrer__content">
			<div class="list-item-carrer__name">{{ nameCarrer }}</div>
			<div class="list-item-carrer__description">
				<div>{{ departmentName }}</div>
				<div>Actualizado al {{ updateAt }}</div>
			</div>
		</span>
		<span class="list-item-carrer__actions">
			<ButtonIcon icon="angle" :rotate="90" @click="$emit('carrer:select', nameCarrer)" />
		</span>
	</li>
</template>

<script setup="props, { emit }" lang="ts">
	import { computed } from "vue";
	import { useStore } from "vuex";
	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	const store = useStore();

	defineEmits(["carrer:select"]);

	const props = defineProps({
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
	const departmentName = computed(() => store.getters["departments/departmentInfo"].name);
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables.scss";

	.list-item-carrer {
		margin: 5px;
		padding: 3px;
		list-style: none;
		display: flex;
		justify-content: space-between;

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
