<template>
	<div class="search">
		<div class="search__bar">
			<input
				type="search"
				autofocus
				v-model="inputSearch"
				spellcheck="false"
				placeholder="Nombre del docente a buscar"
				class="search__input"
				@focus="showOptions()"
			/>
			<button class="search__button">
				<BaseSystemIcons icon="search" height="16" />
			</button>
		</div>
		<ul class="search__options" v-show="matches.length > 0">
			<div>Resultados</div>
			<li :key="index" class="search__option" v-for="(value, index) in matches.slice(0, 5)">
				<div>{{ value }}</div>
				<div>Facultad de Ciencias y Tecnologia | Fcyt</div>
			</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { defineComponent, onMounted, PropType, Ref, ref, toRef } from "vue";

	import BaseSystemIcons from "./BaseSystemIcons.vue";

	export default defineComponent({
		name: "InputSearch",
		components: {
			BaseSystemIcons,
		},
		emits: [],
		props: {
			listOfItems: {
				required: true,
				type: Array as PropType<string[]>,
				default: () => [],
			},
		},
		setup(props) {
			const listOfItems: Ref<string[]> = toRef(props, "listOfItems");
			const inputSearch = ref("");
			let matches: Ref<string[]> = ref([]);

			onMounted(() => {
				matches.value = listOfItems.value;
			});

			const showOptions = () => {
				if (inputSearch.value != "") {
				} else {
					matches.value = listOfItems.value;
				}
			};

			return {
				inputSearch,
				matches,
				showOptions,
			};
		},
	});
</script>

<style scoped lang="scss">
	@import "../scss/abstracts/variables.scss";

	.search {
		&__bar {
			height: 54px;
			border-radius: $border_radius;
			background-color: $primary_color;
			box-shadow: $box-shadow;
			display: flex;
			width: 100%;
		}

		&__options {
			background-color: $primary_color;
			border-radius: $border_radius;
			padding: 1rem 1rem;
			transition: 1s;

			> div {
				padding-bottom: 0.4rem;
			}

			li:nth-child(2) {
				border-top: 3px solid $secondary_color;
			}
		}

		&__option {
			width: 100%;
			list-style: none;
			transition: 1s;

			:not(:last-child) {
				border-bottom: 1px solid $font_color;
			}

			div:nth-child(2) {
				font-size: 0.76rem;
				opacity: 0.7;
				line-height: 1.2rem;
			}
		}

		&__button {
			background-color: transparent;
			border: none;
			cursor: pointer;
			color: $font_color;
			width: 5rem;
		}

		&__input {
			background-color: $primary_color;
			border: none;
			border-radius: $border_radius;
			font-size: 14px;
			color: $font_color;
			padding-left: 1rem;
			width: 100%;
		}

		::placeholder {
			color: $font_color;
		}
	}
</style>
