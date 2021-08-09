<template>
	<ul class="group-list">
		<GroupItem
			v-for="group of groups"
			:key="group.code"
			:groupCode="group.code"
			:nameTeacher="group.schedule[0].teacher"
			@group:select="selectGroup"
		/>
	</ul>
</template>

<script lang="ts">
	import { defineComponent, PropType, Ref, toRef } from "vue";

	import { useSubjects } from "../../../../composables/useSubjects";
	import { groups } from "../../../../interfaces";
	import GroupItem from "./GroupItem.vue";

	export default defineComponent({
		name: "GroupList",
		components: {
			GroupItem,
		},
		props: {
			groups: {
				type: Object as PropType<groups>,
				require: true,
			},
			codeSubject: {
				type: String,
				require: true,
				default: "",
			},
			level: {
				type: String,
				default: "",
				require: true,
			},
		},
		setup(props) {
			const subjectCode: Ref<string> = toRef(props, "codeSubject");
			const levelCode: Ref<string> = toRef(props, "level");
			const { addSubject, removeSubject } = useSubjects();

			const selectGroup = ({ isSelect, groupCode }: { isSelect: boolean; groupCode: string }) => {
				if (isSelect) {
					addSubject({ groupCode, levelCode: levelCode.value, subjectCode: subjectCode.value });
				} else {
					removeSubject({ groupCode, subjectCode: subjectCode.value });
				}
			};

			return { selectGroup };
		},
	});
</script>

<style lang="scss" scoped>
	.group-list {
		padding: 0;
	}
</style>
