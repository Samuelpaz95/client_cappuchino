import { ref } from "vue";

export function useDays() {
	const days = ref(["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]);

	const semanticDays = () => days.value.map((day) => day.slice(0, 3).toUpperCase());

	return { days, semanticDays };
}
