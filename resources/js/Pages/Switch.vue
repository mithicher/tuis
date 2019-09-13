<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Switch</h1>

			<box class="mb-10">
				<template slot="title">Switch</template>
				<template slot="body">
					<switch-input color="#4299e1" v-model="switchInput">
						<span v-if="switchInput == true">Active</span>
						<span v-if="switchInput == false">Not Active</span>
					</switch-input>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>
			<code-block :code="jsCode" language="js" class="mb-10">JS Code</code-block>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import CodeBlock from "@/Shared/tuis/CodeBlock";
import Box from "@/Shared/tuis/Box";
import BasicTable from "@/Shared/tuis/BasicTable";
import Heading from "@/Shared/tuis/Heading";
import SwitchInput from "@/Shared/tuis/SwitchInput";

const code = `<switch-input color="#F5BF21" v-model="switchInput">
	<span v-if="switchInput == true">Active</span>
	<span v-if="switchInput == false">Not Active</span>
</switch-input>`;
const jsCode = `import SwitchInput from "@/components/SwitchInput.vue";

export default {
	data() {
		return {
			switchInput: false
		};
	},

	components: {
		SwitchInput
	}
};`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Box,
		SwitchInput
	},

	data() {
		return {
			switchInput: false,
			code: code,
			jsCode: jsCode,

			datas: [
				{
					name: "label",
					type: "String",
					default: "empty",
					description: "label of the input field"
				},
				{
					name: "v-model",
					type: "String",
					default: "",
					description: "For data binding"
				},
				{
					name: "options",
					type: "array",
					default: "[]",
					description:
						"[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]"
				},
				{
					name: "stacked",
					type: "Boolean",
					default: "true",
					description: "If false, radio inputs are inlined"
				}
			]
		};
	}
};
</script>

 