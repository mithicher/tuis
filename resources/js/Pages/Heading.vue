<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Headings</h1>

			<box class="mb-10">
				<template slot="title">Normal</template>
				<template slot="body">
					<heading>Normal Text</heading>
				</template>
			</box>
			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Heading</template>
				<template slot="body">
					<heading size="heading">Heading 1</heading>
				</template>
			</box>
			<code-block :code="code2" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Heading 2</template>
				<template slot="body">
					<heading size="heading2">Heading 2</heading>
				</template>
			</box>
			<code-block :code="code3" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Small Caps</template>
				<template slot="body">
					<heading size="small-caps">Small Caps</heading>
				</template>
			</box>
			<code-block :code="code4" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Display</template>
				<template slot="body">
					<heading size="display">Display</heading>
				</template>
			</box>
			<code-block :code="code5" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Display 2</template>
				<template slot="body">
					<heading size="display2">Display 2</heading>
				</template>
			</box>
			<code-block :code="code6" language="html" class="mb-10">Template Code</code-block>

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

const code = `<heading>Normal Text</heading>`;
const code2 = `<heading size="heading">Heading 1</heading>`;
const code3 = `<heading size="heading2">Heading 2</heading>`;
const code4 = `<heading size="small-caps">Heading 2</heading>`;
const code5 = `<heading size="display">Heading 2</heading>`;
const code6 = `<heading size="display2">Heading 2</heading>`;

const jsCode = `import Heading from @/Shared/tuis/Heading";

export default { 
	components: {
		Heading
	}
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Box
	},

	data() {
		return {
			code: code,
			code2: code2,
			code3: code3,
			code4: code4,
			code5: code5,
			code6: code6,
			jsCode: jsCode,

			datas: [
				{
					name: "tag",
					type: "String",
					default: "p",
					description: ""
				},
				{
					name: "size",
					type: "String",
					default: "normal",
					description: "heading|heading2|small-caps|display|display2"
				}
			]
		};
	}
};
</script>
 