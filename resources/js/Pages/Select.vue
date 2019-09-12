<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Select</h1>

			<box class="mb-10">
				<template slot="title">Example</template>
				<template slot="body">
					<select-input v-model="fruitName" label="Select fruit" :options="fruitOptions">
						<option value="null" disabled>Select a fruit</option>
					</select-input>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Example with Error</template>
				<template slot="body">
					<select-input
						v-model="fruitName"
						label="Select fruit"
						:options="fruitOptions"
						:errors="errors['fruitName']"
						@input="delete errors['fruitName']"
					>
						<option value="null" disabled>Select a fruit</option>
					</select-input>
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

const code = `<select-input v-model="fruitName" label="Select fruit" :options="fruitOptions">
	<option value="null" disabled>Select a fruit</option>
</select-input>`;
const code2 = `<select-input
	v-model="fruitName"
	label="Select fruit"
	:options="fruitOptions"
	:errors="errors['fruitName']"
	@input="delete errors['fruitName']"
>
	<option value="null" disabled>Select a fruit</option>
</select-input>`;

const jsCode = `import SelectInput from @/Shared/tuis/SelectInput";

export default { 
	components: {
		SelectInput
	},

	data() {
		return {
			fruitName: null,

			errors: {
				fruitName: ["Name is required"]
			},

			fruitOptions: [
				{
					label: "Apple",
					value: "Apple"
				},
				{
					label: "Mango",
					value: "Mango"
				},
				{
					label: "Orange",
					value: "Orange"
				}
			]
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
		Box
	},

	data() {
		return {
			fruitName: null,
			errors: {
				fruitName: ["Name is required"]
			},

			fruitOptions: [
				{
					label: "Apple",
					value: "Apple"
				},
				{
					label: "Mango",
					value: "Mango"
				},
				{
					label: "Orange",
					value: "Orange"
				}
			],

			code: code,
			code2: code2,
			jsCode: jsCode,
			datas: [
				{
					name: "type",
					type: "String",
					default: "text",
					description: "email, number, tel etc..."
				},
				{
					name: "label",
					type: "String",
					default: "empty",
					description: "label of the input field"
				},
				{
					name: "errors",
					type: "Array",
					default: "[]",
					description: "Display error message"
				},
				{
					name: "v-model",
					type: "String",
					default: "",
					description: "For data binding"
				},
				{
					name: "@input",
					type: "event",
					default: "",
					description: ""
				}
			]
		};
	}
};
</script>
 