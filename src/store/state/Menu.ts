import { reactive } from "vue";

export const stateMenu: IstateMenu = reactive({
	isInCarrers: true,
	selectCarrer: null,
	selectLevel: null,

	updateSelectCarrer(carrer: string | null) {
		//@ts-expect-error
		this.selectCarrer = carrer ? carrer.toUpperCase() : carrer;
		this.selectLevel = null;
	},
});

interface IstateMenu {
	isInCarrers: boolean;
	selectCarrer: string | null;
	selectLevel: string | null;
	updateSelectCarrer: (carrer: string | null) => void;
}
