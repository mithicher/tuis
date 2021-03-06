<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Input</h1>

			<box class="mb-10">
				<template slot="title">Example</template>
				<template slot="body">
					<text-input v-model="fullname" label="Full name"></text-input>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Example with Error</template>
				<template slot="body">
					<text-input
						v-model="fullname"
						label="Full name"
						type="text"
						:errors="errors['fullname']"
						@keydown="delete errors['fullname']"
					></text-input>
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

import TextInput from "@/Shared/tuis/TextInput";

const code = `<text-input v-model="fullname" label="Full name"></text-input>`;
const code2 = `<text-input
	v-model="fullname"
	label="Full name"
	type="text"
	:errors="errors['fullname']"
	@keydown="delete errors['fullname']"
></text-input>`;

const jsCode = `import TextInput from @/Shared/tuis/TextInput";

export default { 
	components: {
		TextInput
	}
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		TextInput,
		Box
	},

	data() {
		return {
			fullname: null,
			errors: {
				fullname: ["Fullname is required"]
			},

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
					name: "@keydown",
					type: "event",
					default: "",
					description: ""
				}
			]
		};
	}
};
</script>
 