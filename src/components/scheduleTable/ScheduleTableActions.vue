<template>
	<div class="schedule-table-actions">
		<ButtonIcon
			v-for="{ action, icon, title } of actions"
			:key="title"
			:icon="icon"
			:title="title"
			:aria-label="title"
			@click="action()"
		/>
	</div>
</template>

<script setup lang="ts">
	import { useStore } from "vuex";
	import ButtonIcon from "../ui/ButtonIcon.vue";

	const store = useStore();
	const saveSchedule = () => store.dispatch("scheduleSubjects/saveSchedule");
	const loadSchedule = () => store.dispatch("scheduleSubjects/loadSchedule");
	const deleteSchedule = () => store.commit("scheduleSubjects/removeAllScheduleSubjects");

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
			action: saveSchedule,
			icon: "save",
			title: "Cargar horario Guardado",
		},
		{
			action: loadSchedule,
			icon: "copy",
			title: "Cargar horario Guardado",
		},
		{
			action: deleteSchedule,
			icon: "trash",
			title: "Borrar horario actual",
		},
	];
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/mixins";

	.schedule-table-actions {
		display: flex;

		@include large {
			gap: 2rem;
		}
	}
</style>
