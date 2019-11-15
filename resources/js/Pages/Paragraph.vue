<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Paragraph</h1>

			<box class="mb-10">
				<template slot="title">Normal</template>
				<template slot="body">
					<paragraph>Normal Text</paragraph>
				</template>
			</box>
			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Small Caps</template>
				<template slot="body">
					<paragraph size="small-caps">Small Caps</paragraph>
				</template>
			</box>
			<code-block :code="code2" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Intro Paragraph</template>
				<template slot="body">
					<paragraph size="intro">
						Leverage agile frameworks to provide a robust synopsis
						for high level overviews. Iterative approaches to
						corporate strategy foster collaborative thinking to
						further the overall value proposition. Organically grow
						the holistic world view of disruptive innovation via
						workplace diversity and empowerment.
					</paragraph>
				</template>
			</box>
			<code-block :code="code3" language="html" class="mb-10">Template Code</code-block>

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
import Paragraph from "@/Shared/tuis/Paragraph";

const code = `<paragraph>Normal Text</paragraph>`;
const code2 = `<paragraph size="small-caps">Small Caps</paragraph>`;
const code3 = `<paragraph size="intro">Intro Paragraph</paragraph>`;

const jsCode = `import Paragraph from @/Shared/tuis/Paragraph";

export default { 
	components: {
		Paragraph
	}
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Paragraph,
		Box
	},

	data() {
		return {
			code: code,
			code2: code2,
			code3: code3,
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
					description: "normal|small-caps|intro"
				}
			]
		};
	}
};
</script>
