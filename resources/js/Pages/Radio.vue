<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Radio Input</h1>

			<box class="mb-10">
				<template slot="title">Stacked Radio</template>
				<template slot="body">
					<alert class="mb-4">
						<strong>Note:</strong> All radio inputs must have a default value.
					</alert>

					<radio-input
						label="Select Gender"
						help-text="select aleast one"
						v-model="genderType"
						:options="genders"
						name="gender"
					>
						<template slot-scope="option">{{ option.row.label }}</template>
					</radio-input>
					<code>{{ genderType }}</code>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Inline Radio</template>
				<template slot="body">
					<alert class="mb-4">
						<strong>Note:</strong> All radio inputs must have a default value.
					</alert>

					<radio-input v-model="colorType" :options="colors" name="color" :stacked="false">
						<template slot-scope="option">{{ option.row.label }}</template>
					</radio-input>

					<code>{{ colorType }}</code>
				</template>
			</box>

			<code-block :code="code2" language="html" class="mb-10">Template Code</code-block>

			<code-block :code="jsCode" language="js" class="mb-10">JS Code</code-block>

			<h1 class="text-2xl font-bold mb-4 text-gray-800 mt-10">Props</h1>
			<basic-table :headings="['Name', 'Type', 'Default', 'Description']">
				<tr
					v-for="(data, dataIndex) in datas"
					:key="dataIndex"
					class="hover:bg-grey-lightest focus-within:bg-grey-lightest"
				>
					<td class="border-t">
						<span class="text-gray-700 px-6 py-4 flex items-center focus:text-indigo">{{ data.name }}</span>
					</td>
					<td class="border-t">
						<span class="text-gray-700 px-6 py-4 flex items-center focus:text-indigo">{{ data.type }}</span>
					</td>
					<td class="border-t">
						<span class="text-gray-700 px-6 py-4 flex items-center focus:text-indigo">{{ data.default }}</span>
					</td>
					<td class="border-t">
						<span
							class="text-gray-700 px-6 py-4 flex items-center focus:text-indigo"
						>{{ data.description }}</span>
					</td>
				</tr>
			</basic-table>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import CodeBlock from "@/Shared/tuis/CodeBlock";
import Box from "@/Shared/tuis/Box";
import BasicTable from "@/Shared/tuis/BasicTable";
import Heading from "@/Shared/tuis/Heading";

import SelectInput from "@/Shared/tuis/SelectInput";
import RadioInput from "@/Shared/tuis/RadioInput";
import Alert from "@/Shared/tuis/Alert";

const code = `<radio-input
	label="Select Gender"
	help-text="select aleast one"
	v-model="genderType"
	:options="genders"
	name="gender"
>
	<template slot-scope="option">{{ option.row.label }}</template>
</radio-input>`;

const code2 = `<radio-input v-model="colorType" :options="colors" name="color" :stacked="false">
	<template slot-scope="option">{{ option.row.label }}</template>
</radio-input>`;

const jsCode = `import RadioInput from @/Shared/tuis/RadioInput";

export default { 
	components: {
		RadioInput
	},

	data() {
		return {
			genderType: "male",
			genders: [
				{ label: "Male", value: "male" },
				{ label: "Female", value: "female" },
				{ label: "Other", value: "others" }
			],

			colorType: "red",
			colors: [
				{ label: "Red", value: "red" },
				{ label: "Green", value: "green" },
				{ label: "Yellow", value: "yellow" }
			],
		}
	}
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		SelectInput,
		RadioInput,
		Box,
		Alert
	},

	data() {
		return {
			genderType: "male",
			genders: [
				{ label: "Male", value: "male" },
				{ label: "Female", value: "female" },
				{ label: "Other", value: "others" }
			],

			colorType: "red",
			colors: [
				{ label: "Red", value: "red" },
				{ label: "Green", value: "green" },
				{ label: "Yellow", value: "yellow" }
			],

			code: code,
			code2: code2,
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
 