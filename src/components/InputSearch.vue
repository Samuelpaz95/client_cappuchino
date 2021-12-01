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
			<ButtonIcon type="button" icon="search" height="16" class="search__button" />
		</form>
		<ul class="search__options" v-show="matchOptions.length > 0">
			<div>Resultados</div>
			<li
				@click="$emit('select:professor', value)"
				:key="index"
				class="search__option"
				v-for="(value, index) in matchOptions.slice(0, 5)"
			>
				<div>{{ value }}</div>
				<div>{{ departmentInfoDisplay }}</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
	import { ref, Ref, inject, computed } from "vue";
	import { Idepartment } from "../interfaces";
	import { useSearch } from "../composables/useSearch";
	import ButtonIcon from "../components/ui/ButtonIcon.vue";

	const inputSearch = ref("");
	const departmentInfo = inject("departmentInfo") as Ref<Idepartment | null>;

	const departmentInfoDisplay = computed(
		() => departmentInfo.value?.name + " | " + departmentInfo.value?.semanticName.toUpperCase()
	);
	const { matchOptions, searchOptions, clearMatchOptions } = useSearch();
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables";

	.search {
		position: relative;

		&__bar {
			height: 54px;
			border-radius: $border_radius;
			background-color: var(--primary-color);
			display: flex;
			width: 100%;
		}

		&__options {
			position: absolute;
			width: 100%;
			z-index: 1;
			background-color: var(--primary-color);
			border-radius: $border_radius;
			padding: 1rem 1rem;
			transition: 1s;

			> div {
				padding-bottom: 0.4rem;
			}

			li:nth-child(2) {
				border-top: 3px solid var(--secondary-color);
			}
		}

		&__option {
			width: 100%;
			padding: 3px 0;
			list-style: none;
			transition: 1s;

			:not(:last-child) {
				border-bottom: 1px solid var(--font-color);
			}

			div:first-child {
				line-height: 24px;
			}

			div:nth-child(2) {
				font-size: 0.76rem;
				opacity: 0.6;
				line-height: 1.2rem;
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
			border-radius: $border_radius;
			font-size: 1rem;
			color: var(--font-color);
			padding-left: 1rem;
			width: 100%;
		}

		::placeholder {
			color: var(--font-color);
		}
	}
</style>
