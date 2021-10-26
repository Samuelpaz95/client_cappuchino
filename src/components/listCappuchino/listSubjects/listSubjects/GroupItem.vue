<template>
	<li class="group-item">
		<input v-model="isSelect" class="group-item__input" type="checkbox" :id="groupCode + nameTeacher" />
		<label class="group-item__label" :for="groupCode + nameTeacher">
			<span class="group-item__teacher">{{ transformNameTeacherToCapitalize }}</span>
			<span class="group-item__group">{{ groupCode }}</span>
		</label>
	</li>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "GroupItem",
		data() {
			return {
				isSelect: false,
			};
		},
		props: {
			nameTeacher: {
				type: String,
				default: "",
				require: true,
			},
			groupCode: String,
		},
		computed: {
			transformNameTeacherToCapitalize(): string {
				const lower: string = this.nameTeacher.toLowerCase();
				const arrayLowerName: string[] = lower.split(" ");
				const capitalizeArrayName: string[] = arrayLowerName.map(
					(name: string) => name[0].toUpperCase() + name.slice(1)
				);
				return capitalizeArrayName.join(" ");
			},
		},
		watch: {
			isSelect(value: boolean) {
				this.$emit("group:select", {
					isSelect: value,
					groupCode: this.groupCode,
				});
			},
		},
	});
</script>

<style lang="scss" scoped>
	@import "@/scss/abstracts/variables.scss";
	.group-item {
		display: flex;
		line-height: 24px;
		padding: 0 1rem;

		&__teacher {
			overflow: hidden;
		}

		&__label {
			display: flex;
			align-items: center;
			justify-content: space-between;
			width: 100%;
			padding-left: 1rem;
			padding-top: 2px;
			padding-bottom: 2px;
		}

		&__input {
			margin: 0;
			accent-color: $secondary_color;
		}

		&__group {
			display: flex;
			align-items: center;
		}
	}
</style>
