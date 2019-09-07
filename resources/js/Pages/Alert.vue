<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-4 text-gray-800">Alert</h1>
			<heading
				class="mb-10"
			>Alerts are used to communicate a state that affects a system, feature or page.</heading>

			<box class="mb-10">
				<template slot="title">Examples without Icon</template>
				<template slot="body">
					<alert :with-icon="false">Info. Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>

					<br />

					<alert
						:with-icon="false"
						variant="success"
					>Info. Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>
				</template>
			</box>

			<box class="mb-10">
				<template slot="title">Examples with Icon</template>
				<template slot="body">
					<alert>Info. Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>

					<br />

					<alert variant="danger">Danger. Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>

					<br />

					<alert variant="success">Success. Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>
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

import Alert from "@/Shared/tuis/Alert";

const code = `<alert>Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>

<alert
	:with-icon="false"
>Info. Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>

<alert
	variant="danger"	
>Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>

<alert
	variant="success"
>Lorem ipsum dolor sit amet consectetur adipisicing elit.</alert>`;

const jsCode = `import Alert from @/Shared/tuis/Alert";

export default { 
	components: {
		Alert
	}
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Alert,
		Box
	},

	data() {
		return {
			code: code,
			jsCode: jsCode,
			datas: [
				{
					name: "with-icon",
					type: "Boolean",
					default: false,
					description: "If true, icon is shown"
				},
				{
					name: "variant",
					type: "String",
					default: "info, danger, success",
					description: "The status of the alert"
				}
			]
		};
	}
};
</script>
 