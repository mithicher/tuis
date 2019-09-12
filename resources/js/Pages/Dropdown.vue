<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Dropdown</h1>

			<box class="mb-10">
				<template slot="title">Basic Dropdown</template>
				<template slot="body">
					<div class="h-64">
						<dropdown class="w-40">
							<template slot="trigger">
								<span class="bg-blue-400 px-4 py-2 rounded-lg text-white outline-none">Dropdown Menu</span>
							</template>

							<template slot="dropdown">
								<div class="shadow rounded-lg bg-white w-40 py-1 mt-4">
									<a href="#" class="font-medium px-4 py-2 block hover:bg-gray-100 hover:text-blue-400">Home</a>
									<a
										href="#"
										class="font-medium px-4 py-2 block hover:bg-gray-100 hover:text-blue-400"
									>Profile</a>
									<a
										href="#"
										class="font-medium px-4 py-2 block hover:bg-gray-100 hover:text-blue-400"
									>Settings</a>
									<a
										href="#"
										class="font-medium px-4 py-2 block hover:bg-gray-100 hover:text-blue-400"
									>Logout</a>
								</div>
							</template>
						</dropdown>
					</div>
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

const code = `<dropdown class="w-40">
	<template slot="trigger">
		<span class="bg-blue-400 px-4 py-2 rounded-lg text-white outline-none">Dropdown Menu</span>
	</template>

	<template slot="dropdown">
		<div class="shadow rounded-lg bg-white w-40 py-1 mt-4">
			<a href="#" class="font-medium px-4 py-2 block hover:bg-gray-100 hover:text-blue-400">Home</a>
			<a
				href="#"
				class="font-medium px-4 py-2 block hover:bg-gray-100 hover:text-blue-400"
			>Profile</a>
			<a
				href="#"
				class="font-medium px-4 py-2 block hover:bg-gray-100 hover:text-blue-400"
			>Settings</a>
			<a
				href="#"
				class="font-medium px-4 py-2 block hover:bg-gray-100 hover:text-blue-400"
			>Logout</a>
		</div>
	</template>
</dropdown>`;

const jsCode = `import Dropdown from @/Shared/tuis/Dropdown";

export default { 
	components: {
		Dropdown
	}
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Box,
		Dropdown
	},

	data() {
		return {
			code: code,
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

<style>
.bounce-enter-active {
	animation: bounce-in 0.5s;
}
.bounce-leave-active {
	animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
	0% {
		transform: scale(0);
	}
	50% {
		transform: scale(1.5);
	}
	100% {
		transform: scale(1);
	}
}
</style>
 