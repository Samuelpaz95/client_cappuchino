<template>
	<main class="tracker">
		<section class="tracker__container">
			<InputSearch class="tracker__search" :listOfItems="['1', '2']" />
		</section>
	</main>
</template>

<script lang="ts">
	import { defineComponent } from "vue";
	import InputSearch from "@/components/InputSearch.vue";

	export default defineComponent({
		name: "TracherDocent",
		components: {
			InputSearch,
		},
	});
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/mixins";

	.tracker {
		margin: 1rem;

		&__container {
			display: grid;

			@include large {
				grid-template-columns: 0.54fr 1fr;
			}
		}

		&__search {
			margin: 15px 30px;

			@include large {
				margin: 0;
			}
		}
	}
</style>
