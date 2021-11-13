<template>
	<main class="home">
		<h1>SCESI</h1>
		<nav class="home__nav">
			<router-link
				v-for="{ name, routeName, department } of routes"
				:to="{ name: routeName, params: { department: department } }"
				class="home__link"
			>
				{{ name }}
			</router-link>
		</nav>
	</main>
</template>

<script setup lang="ts">
	const routes = [
		{
			name: "Cappuchino FCYT",
			routeName: "Cappuchino",
			department: "fcyt",
		},
		{
			name: "Cappuchino FCE",
			routeName: "Cappuchino",
			department: "fce",
		},
		{
			name: "Teacher Tracker FCYT",
			routeName: "TeacherTracker",
			department: "fcyt",
		},
		{
			name: "Teacher Tracker FCE",
			routeName: "TeacherTracker",
			department: "fce",
		},
	];
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables", "@/scss/abstracts/mixins";
	.home {
		display: grid;
		grid-template-rows: auto 1fr;
		padding: 1rem 2rem;
		height: 100%;

		@include large {
			padding: 1rem;
		}

		&__nav {
			display: grid;
			gap: 3rem;
			padding: 3rem 0;
			grid-template-rows: repeat(1fr, 4);

			@include large {
				padding: 0;
				gap: 1rem;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
			}
		}

		&__link {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			border-radius: $border_radius;
			background-color: $primary_color;
			padding: 1rem;
			color: $font_color;
			text-decoration: none;
			font-weight: bold;
			font-size: 1.4rem;

			@include large {
				height: 50%;
				width: 70%;
				place-self: center;
			}
		}
	}
</style>
