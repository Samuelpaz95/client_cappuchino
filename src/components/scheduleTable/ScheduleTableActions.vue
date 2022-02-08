<template>
	<div class="schedule-table-actions">
		<ButtonIcon
			v-for="{ action, icon, title } of actions"
			class="schedule-table-actions__actions"
			:key="title"
			:icon="icon"
			:title="title"
			:aria-label="title"
			@click="action()"
		/>
		<BaseModal :isOpen="isOpen" @close="isOpen = false">
			<div class="schedule-table-actions__schedule-actions">
				<button class="schedule-table-actions__button" @click="save">Guardar Horario</button>
				<button class="schedule-table-actions__button" @click="load">Cargar Horario</button>
			</div>
		</BaseModal>
	</div>
</template>

<script setup lang="ts">
	import { ref } from "vue";
	import { useStore } from "vuex";
	import ButtonIcon from "../ui/ButtonIcon.vue";
	import BaseModal from "../ui/BaseModal.vue";

	const store = useStore();
	const isOpen = ref(false);
	const saveSchedule = () => store.dispatch("scheduleSubjects/saveSchedule");
	const loadSchedule = () => store.dispatch("scheduleSubjects/loadSchedule");
	const deleteSchedule = () => store.commit("scheduleSubjects/removeAllScheduleSubjects");

	const save = () => {
		saveSchedule();
		isOpen.value = false;
	};

	const load = () => {
		loadSchedule();
		isOpen.value = false;
	};

	const props = defineProps({
		downloadSchedule: {
			type: Function,
			require: true,
			default: () => {},
		},
	});

	const actions = [
		{
			action: props.downloadSchedule,
			icon: "camera",
			title: "Tomar foto de horario",
		},
		{
			action: () => (isOpen.value = true),
			icon: "bookmark",
			title: "Guardar, Recuperar Horario",
		},
		{
			action: deleteSchedule,
			icon: "trash",
			title: "Borrar horario actual",
		},
	];
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/mixins", "@/scss/abstracts/variables";

	.schedule-table-actions {
		display: flex;

		gap: 1rem;

		@include large {
			gap: 2rem;
		}

		&__schedule-actions {
			display: flex;
			flex-direction: column;
			gap: 1rem;
			margin: 2rem 2rem;

			@include large {
				flex-direction: row;
				gap: 3rem;
			}
		}

		&__button {
			background-color: transparent;
			border: 1px solid var(--secondary-color);
			border-radius: $border-radius;
			padding: 1rem;
			color: inherit;
			width: 100%;
			font-size: 1rem;

			@include large {
				white-space: nowrap;
			}
		}

		&__actions {
			padding: 5px;
		}
	}
</style>
