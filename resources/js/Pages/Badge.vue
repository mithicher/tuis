<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-4 text-gray-800">Badge</h1>

			<box class="mb-10">
				<template slot="title">Example with Border</template>
				<template slot="body">
					<badge class="mr-2">Info</badge>
					<badge variant="success" class="mr-2">Success</badge>
					<badge variant="danger" class="mr-2">Danger</badge>
					<badge variant="warning" class="mr-2">Warning</badge>
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
import Badge from "@/Shared/tuis/Badge";

const code = `<badge class="mr-2">Info</badge>
<badge variant="success" class="mr-2">Success</badge>
<badge variant="danger" class="mr-2">Danger</badge>
<badge variant="warning" class="mr-2">Warning</badge>`;

const jsCode = `import Badge from "@/Shared/tuis/Badge";

export default {
	components: {
		Badge
	}
};`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Box,
		Badge
	},

	data() {
		return {
			code: code,
			jsCode: jsCode,
			datas: [
				{
					name: "variant",
					type: "String",
					default: "info",
					description:
						"Other color schemes are: success, danger, warning"
				}
			]
		};
	}
};
</script>
 
