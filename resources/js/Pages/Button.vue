<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-4 text-gray-800">Buttons</h1>

			<box class="mb-10">
				<template slot="title">Button</template>
				<template slot="body">
					<loading-button variant="danger" type="button">Confirm</loading-button>
					<loading-button variant="primary" type="button">Register Now</loading-button>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Outline Button</template>
				<template slot="body">
					<loading-button variant="secondary" variant-type="outline" type="button">Cancel</loading-button>
					<loading-button variant="danger" variant-type="outline" type="button">Confirm</loading-button>
					<loading-button variant="primary" variant-type="outline" type="button">Register Now</loading-button>
				</template>
			</box>

			<code-block :code="code2" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Button with Size</template>
				<template slot="body">
					<loading-button size="small" variant="danger" type="button">Save</loading-button>
					<loading-button size="small" variant="primary" type="button">Register Now</loading-button>

					<loading-button size="small" variant="secondary" variant-type="outline" type="button">Cancel</loading-button>
					<loading-button size="small" variant="danger" variant-type="outline" type="button">Confirm</loading-button>
					<loading-button
						size="small"
						variant="primary"
						variant-type="outline"
						type="button"
					>Register Now</loading-button>
				</template>
			</box>

			<code-block :code="code3" language="html" class="mb-10">Template Code</code-block>

			<box class="mb-10">
				<template slot="title">Button with Spinner</template>
				<template slot="body">
					<loading-button
						ref="submitButton"
						variant="primary"
						type="button"
						@click.prevent="submitButton"
					>Spinner Button</loading-button>
				</template>
			</box>

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

import LoadingButton from "@/Shared/tuis/LoadingButton";
import { setTimeout } from "timers";

const code = `<loading-button variant="danger" type="button">Confirm</loading-button>
<loading-button variant="primary" type="button">Register Now</loading-button>`;

const code2 = `<loading-button variant="secondary" variant-type="outline" type="button">Cancel</loading-button>
<loading-button variant="danger" variant-type="outline" type="button">Confirm</loading-button>
<loading-button variant="primary" variant-type="outline" type="button">Register Now</loading-button>`;

const code3 = `<loading-button size="small" variant="danger" type="button">Save</loading-button>
<loading-button size="small" variant="primary" type="button">Register Now</loading-button>
<loading-button size="small" variant="secondary" variant-type="outline" type="button">Cancel</loading-button>
<loading-button size="small" variant="danger" variant-type="outline" type="button">Confirm</loading-button>
<loading-button
	size="small"
	variant="primary"
	variant-type="outline"
	type="button"
>Register Now</loading-button>`;

const jsCode = `import LoadingButton from "@/Shared/tuis/LoadingButton";

export default {
	components: {
		LoadingButton
	},

	methods: {
		submitButton() {
			// Start the Spinner
			this.$refs.submitButton.startLoading();

			// Perform axios requests
			axios.post()
				.then((response) => {})
				.catch((error) => {})
				.finally(() => {
					// Stop the spinner
					this.$refs.submitButton.stopLoading();
				})
		}
	}
};`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Box,
		LoadingButton
	},

	data() {
		return {
			code: code,
			code2: code2,
			code3: code3,
			jsCode: jsCode,
			datas: [
				{
					name: "variant",
					type: "String",
					default: "primary",
					description: "Other color schemes are: danger, secondary"
				},
				{
					name: "variant-type",
					type: "String",
					default: "",
					description: "Makes the button theme outline: outline"
				},
				{
					name: "type",
					type: "String",
					default: "button",
					description: "Button type: submit, button"
				},
				{
					name: "size",
					type: "String",
					default: "normal",
					description: "normal, small"
				}
			]
		};
	},

	methods: {
		submitButton() {
			// Start the Spinner
			this.$refs.submitButton.startLoading();
		}
	}
};
</script>
 
