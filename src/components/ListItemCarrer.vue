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
			<span class="list-item-carrer__action">
				<BaseSystemIcons icon="close" />
			</span>
			<span class="list-item-carrer__action">
				<BaseSystemIcons icon="angle" :rotate="180" />
			</span>
		</span>
	</li>
</template>

<script lang="ts">
	import { defineComponent, computed } from "vue";
	import { useStore } from "vuex";

	import BaseSystemIcons from "./BaseSystemIcons.vue";

	export default defineComponent({
		name: "ListItemCarrers",
		components: {
			BaseSystemIcons,
		},
		props: {
			nameCarrer: {
				type: String,
				require: true,
			},
			updateAt: {
				type: String,
				require: true,
			},
		},
		setup() {
			const store = useStore();
			const departmentName = computed(() => store.getters["departments/departmentName"]);

			return {
				departmentName,
			};
		},
	});
</script>

<style scoped lang="scss">
	@import "../scss/abstracts/variables.scss";

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
			width: 60px;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}

		&__action {
			display: flex;
			width: 30px;
			height: 100%;
			justify-content: center;
			align-items: center;

			&:first-child {
				margin-right: 5px;
			}
		}
	}
</style>
