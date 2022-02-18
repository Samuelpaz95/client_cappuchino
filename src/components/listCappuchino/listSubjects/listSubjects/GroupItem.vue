<template>
	<li @click="select" class="group-item">
		<input :checked="isSelect" class="group-item__input" type="checkbox" :id="groupCode + nameTeacher" />
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
		props: {
			nameTeacher: {
				type: String,
				default: "",
				require: true,
			},
			groupCode: String,
			scheduleDay: String,
			scheduleStart: String,
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
			isSelect(): boolean {
				return this.$store.getters["scheduleSubjects/keyScheduleSubjects"].includes(
					this.groupCode + this.nameTeacher + this.scheduleDay + this.scheduleStart
				);
			},
		},
		methods: {
			select() {
				this.$emit("group:select", {
					isSelect: !this.isSelect,
					groupCode: this.groupCode,
				});
			},
		},
	});
</script>

<style lang="scss" scoped>
	.group-item {
		cursor: pointer;

		display: flex;
		line-height: 24px;
		padding: 0 1rem;
		align-items: center;

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
			pointer-events: none;
		}

		&__input {
			margin: 0;
			accent-color: var(--secondary-color);
		}

		&__group {
			display: flex;
			align-items: center;
		}
	}
</style>
