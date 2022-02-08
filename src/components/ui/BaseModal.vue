<template>
	<teleport to="body">
		<div v-if="isOpen" @click="clcikOutSide" class="modal">
			<div id="modal-content" class="modal__content">
				<div class="modal__header">
					<p>Horarios</p>
					<BaseSystemIcons
						aria-label="Cerrar Modal"
						@click="$emit('close')"
						class="modal__close"
						icon="close"
					/>
				</div>
				<slot></slot>
			</div>
		</div>
	</teleport>
</template>

<script setup lang="ts">
	import BaseSystemIcons from "./BaseSystemIcons.vue";

	const emit = defineEmits(["close"]);
	defineProps({
		isOpen: {
			type: Boolean,
			default: false,
		},
	});

	const clcikOutSide = (e: any) => {
		const modalContent = document.getElementById("modal-content");

		if (modalContent && !modalContent.contains(e.target)) {
			emit("close");
		}
	};
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables.scss";

	.modal {
		display: grid;
		place-items: center;
		position: fixed;
		z-index: 100;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		overflow: auto;
		background-color: rgba(0, 0, 0, 0.4);

		&__close {
			margin-right: 1rem;
		}

		&__header {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: space-between;
			padding: 0.5rem;
			border-bottom: 1px solid var(--secondary-color);

			p {
				font-size: 1.2rem;
				margin: 0;
				margin-left: 1rem;
			}
		}

		&__content {
			background-color: var(--primary-color);
			padding-top: 0;
			border-radius: $border_radius;
		}
	}
</style>
