<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-4 text-gray-800">Introduction</h1>
			<heading
				class="mb-10"
			>Input component enables the user to interact with and input content and data. The form input allows you to create various text style inputs such as text, password, email, number, url, search and more.</heading>

			<h1 class="text-2xl font-bold mb-4 text-gray-800">Import</h1>
			<code-block :code="codeImport" language="html" class="mb-10">Template Code</code-block>

			<code-block :code="code" language="js">JS Code</code-block>

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

import FileInput from "@/Shared/tuis/FileInput";
import CodeBlock from "@/Shared/tuis/CodeBlock";
import BasicTable from "@/Shared/tuis/BasicTable";
import Heading from "@/Shared/tuis/Heading";

const code = `import FileInput from "@/Shared/tuis/FileInput";

export default {
	components: {
		FileInput
	},

	props: {
		errors: Object
	},

	data() {
		return {
			photo: null,
		};
	},

	methods: {
		save() {
			var data = new FormData();

			data.append("selectedValue", this.selectedValue || "");
			data.append("photo", this.photo || "");
			data.append("text", this.text || "");

			this.$refs.submitButton.startLoading();

			this.$inertia
				.post("/test/store", data)
				.then(() => {
					this.$refs.submitButton.stopLoading();
				})
				.catch(() => {
					this.$refs.submitButton.stopLoading();
				});
		}
	}
}`;

const codeImport = `<file-input
  v-model="photo"
  class="pr-6 pb-8 w-full lg:w-1/2"
  type="file"
  accept="image/*"
  label="Photo"
  :errors="errors['photo']"
/>`;

export default {
	components: {
		Layout,
		CodeBlock,
		FileInput,
		BasicTable,
		Heading
	},

	data() {
		return {
			code: code,
			codeImport: codeImport,
			datas: [
				{
					name: "isOpen",
					type: "boolean",
					default: "",
					description: "If true, the AlertDialog will open"
				}
			]
		};
	}
};
</script>