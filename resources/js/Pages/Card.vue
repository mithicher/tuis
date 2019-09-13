<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Card</h1>

			<box class="mb-10">
				<template slot="title">Card Basic</template>
				<template slot="body">
					<card>Lorem ipsum dolor sit amet consectetur adipisicing elit.</card>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Card with Header and Footer</template>
				<template slot="body">
					<card with-header with-footer>
						<template slot="header">Card Header</template>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						<template
							slot="footer"
						>Card Footer</template>
					</card>
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

import Card from "@/Shared/tuis/Card";

const code = `<card>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</card>`;

const code2 = `<card with-header with-footer>
	<template slot="header">Card Header</template>
	Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae amet repellat culpa veritatis.
	<template
		slot="footer"
	>Card Footer</template>
</card>`;

const jsCode = `import Card from @/Shared/tuis/Card";

export default { 
	components: {
		Card
	}
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Card,
		Box
	},

	data() {
		return {
			code: code,
			code2: code2,
			jsCode: jsCode,
			datas: [
				{
					name: "with-header",
					type: "Boolean",
					default: false,
					description: "If true, header section is shown"
				},
				{
					name: "with-footer",
					type: "Boolean",
					default: false,
					description: "If true, footer section is shown"
				},
				{
					name: "is-padding",
					type: "Boolean",
					default: true,
					description: "If false, padding is removed"
				}
			]
		};
	}
};
</script>
 