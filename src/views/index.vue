<template>
	<main class="home">
		<nav class="home__nav">
			<div class="home__department" v-for="[title, links] of Object.entries(options)">
				<h2>{{ title }}</h2>
				<div class="home_links">
					<router-link
						v-for="{ name, routeName, department } of links"
						:to="{ name: routeName, params: { department: department } }"
						class="home__link"
					>
						{{ name }}
					</router-link>
				</div>
			</div>
		</nav>
	</main>
</template>

<script setup lang="ts">
	const options = {
		"Facultad de Ciencias y Tecnologia": [
			{
				name: "Cappuchino",
				routeName: "Cappuchino",
				department: "fcyt",
			},
			{
				name: "Teacher Tracker",
				routeName: "TeacherTracker",
				department: "fcyt",
			},
		],
		"Facultad de Ciencias Economicas": [
			{
				name: "Cappuchino",
				routeName: "Cappuchino",
				department: "fce",
			},
			{
				name: "Teacher Tracker",
				routeName: "TeacherTracker",
				department: "fce",
			},
		],
	};
</script>

<style scoped lang="scss">
	@import "@/scss/abstracts/variables", "@/scss/abstracts/mixins";
	.home {
		height: 100%;
		display: grid;
		grid-template-rows: 1fr;
		padding: 1rem 2rem;

		&__nav {
			height: 100%;
			display: grid;
			grid-template-rows: 1fr 1fr;
		}

		&__department {
			height: 100%;
			display: grid;
			gap: 2rem;
			grid-template-rows: 50px 1fr;

			@include large {
				gap: 0;
			}

			h2 {
				font-weight: 100;
			}
		}

		&_links {
			height: 100%;
			display: grid;
			grid-template-rows: 1fr 1fr;
			grid-template-columns: 1fr;
			gap: 1rem;

			@include large {
				height: 100%;
				display: grid;
				grid-template-rows: 1fr;
				grid-template-columns: 1fr 1fr;
			}
		}

		&__link {
			display: flex;
			align-items: center;
			justify-content: center;
			text-align: center;
			border-radius: $border_radius;
			background-color: var(--primary-color);
			padding: 1rem;
			color: var(--font-color);
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
