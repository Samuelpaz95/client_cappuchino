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
			<ButtonIcon icon="angle" :rotate="90" @click="selectCarrer" />
		</span>
	</li>
</template>

<script lang="ts">
	import { defineComponent, computed, toRef, Ref } from "vue";
	import { useStore } from "vuex";

	import ButtonIcon from "@/components/ui/ButtonIcon.vue";

	export default defineComponent({
		name: "ListItemCarrers",
		components: {
			ButtonIcon,
		},
		emits: ["carrer:select"],
		props: {
			nameCarrer: {
				type: String,
				default: "",
				require: true,
			},
			updateAt: {
				type: String,
				require: true,
			},
		},
		setup(props, { emit }) {
			const nameCarrer: Ref<string> = toRef(props, "nameCarrer");
			const store = useStore();
			const departmentName = computed(() => store.getters["departments/departmentInfo"].name);

			const selectCarrer = () => {
				emit("carrer:select", nameCarrer.value);
			};

			return {
				departmentName,
				selectCarrer,
			};
		},
	});
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
