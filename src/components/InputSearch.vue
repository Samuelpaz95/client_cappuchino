<template>
	<div @focusout="clearMatchOptions" class="search">
		<form @submit.prevent="searchOptions(inputSearch)" class="search__bar">
			<input
				type="search"
				autofocus
				v-model="inputSearch"
				spellcheck="false"
				placeholder="Nombre del docente a buscar"
				class="search__input"
				@input="searchOptions(inputSearch)"
				@focusin="searchOptions(inputSearch)"
			/>
			<ButtonIcon class="search__button" icon="search" height="26.26" title="Buscar" aria-label="Buscar" />
		</form>
		<ul class="search__options" v-show="matchOptions.length > 0">
			<div class="search__result">Resultados</div>
			<li
				@click="$emit('select:professor', value)"
				:key="index"
				class="search__option"
				v-for="(value, index) in matchOptions.slice(0, 5)"
			>
				<div>{{ capitalizeText(value.toLocaleLowerCase()) }}</div>
				<div>{{ departmentInfoDisplay }}</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { ref, Ref, inject, computed } from "vue";
	import { Idepartment } from "../interfaces";
	import { useSearch } from "../composables/useSearch";
	import { capitalizeText } from "../utils/capitalizeText";
	import ButtonIcon from "../components/ui/ButtonIcon.vue";

	const inputSearch = ref("");
	const departmentInfo = inject("departmentInfo") as Ref<Idepartment | null>;

	const departmentInfoDisplay = computed(
		() => departmentInfo.value?.name + " | " + departmentInfo.value?.semanticName.toUpperCase()
	);
	const { matchOptions, searchOptions, clearMatchOptions } = useSearch();
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables", "@/scss/abstracts/mixins";

	.search {
		position: relative;

		&__bar {
			height: 77px;
			border-radius: $border_radius;
			background-color: var(--primary-color);
			display: flex;
			width: 100%;
			box-shadow: var(--box-shadow);
		}

		&__options {
			position: absolute;
			width: 100%;
			z-index: 1;
			background-color: var(--primary-color);
			border-radius: $border_radius;
			padding: 2rem 2rem;
			box-shadow: var(--box-shadow);

			li:nth-child(2) {
				border-top: 3px solid var(--secondary-color);
			}
		}
		&__result {
			font-family: "Allerta Stencil", sans-serif;
			padding-bottom: 0.4rem;
			font-size: 20px;
			line-height: 25.57px;
			font-weight: 400;

			@include large {
				padding-bottom: 1rem;
			}
		}

		&__option {
			width: 100%;
			list-style: none;
			padding: 0.5rem 0;
			border-bottom: 0.5px solid var(--font-color);

			@include large {
				padding: 1rem 0;
				cursor: pointer;
			}

			div:first-child {
				line-height: 24px;
				font-weight: 700;
			}

			div:nth-child(2) {
				font-size: 0.6rem;
				opacity: 0.6;
				line-height: 0.8rem;

				@include large {
					font-size: 0.76rem;
					line-height: 1.2rem;
				}
			}
		}

		&__button {
			border-top-right-radius: $border_radius;
			border-bottom-right-radius: $border_radius;
			width: 5rem;
		}

		&__input {
			background-color: var(--primary-color);
			border: none;
			font-size: 1rem;
			border-radius: $border_radius;
			color: var(--font-color);
			padding-left: 2rem;
			width: 100%;

			@include large {
				font-size: 20px;
			}
		}

		::placeholder {
			color: var(--font-color);
		}
	}
</style>
