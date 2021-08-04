<template>
	<li>{{ level }}</li>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "ItemLevel",
		props: {
			level: {
				type: String,
				require: true,
			},
		},
		setup() {},
	});
</script>
