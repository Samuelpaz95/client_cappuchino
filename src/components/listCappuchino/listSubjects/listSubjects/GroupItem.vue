<template>
	<li class="group-item">
		<input v-model="asd" class="group-item__radio" type="checkbox" :id="groupCode + nameTeacher" />
		<label class="group-item__label" :for="groupCode + nameTeacher">
			<span class="group-item__description">
				<span class="group-item__teacher">{{ transformNameTeacherToCapitalize }}</span>
				<span class="group-item__group">{{ groupCode }}</span>
			</span>
		</label>
	</li>
</template>

<script lang="ts">
	import { defineComponent } from "vue";

	export default defineComponent({
		name: "GroupItem",
		data() {
			return {
				asd: "",
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
	});
</script>

<style lang="scss" scoped>
	.group-item {
		display: flex;
		line-height: 24px;
		padding: 0 1rem;

		&__teacher {
			overflow: hidden;
		}

		&__description {
			width: 100%;
			display: flex;
			justify-content: space-between;
		}

		&__label {
			display: flex;
			align-items: center;
			width: 100%;

			&::before {
				content: "";
				display: block;
				width: 13px;
				height: 13px;
				margin-right: 10px;
				background-color: red;
			}
		}

		&__radio {
			display: none;
		}

		&__group {
			display: flex;
			align-items: center;
		}
	}
</style>
