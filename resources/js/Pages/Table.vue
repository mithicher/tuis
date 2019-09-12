<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Basic Table</h1>

			<box class="mb-10">
				<template slot="title">Basic Table</template>
				<template slot="body">
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
import Dropdown from "@/Shared/tuis/Dropdown";

const code = `<basic-table :headings="['Name', 'Type', 'Default', 'Description']">
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
</basic-table>`;

const jsCode = `import BasicTable from @/Shared/tuis/BasicTable";

export default { 
	components: {
		BasicTable
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
			jsCode: jsCode,

			datas: [
				{
					name: "headings",
					type: "Array",
					default: "[]",
					description: "Array of datas"
				}
			]
		};
	}
};
</script>
