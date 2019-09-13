<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Avatar</h1>

			<box class="mb-10">
				<template slot="title">Avatar</template>
				<template slot="body">
					<div class="mb-4">
						<avatar name="Avatar"></avatar>
						<avatar name="Avatar" color="blue"></avatar>
						<avatar name="Avatar" color="orange"></avatar>
					</div>

					<div class="mb-4">
						<avatar name="Avatar" size="small"></avatar>
						<avatar name="Avatar" color="blue"></avatar>
						<avatar name="Avatar" color="orange" size="large"></avatar>
						<avatar name="Avatar" color="orange" size="xlarge"></avatar>
					</div>

					<div>
						<avatar name="Avatar" size="small" shape="rounded"></avatar>
						<avatar name="Avatar" color="blue" shape="rounded"></avatar>
						<avatar name="Avatar" color="orange" size="large" shape="rounded"></avatar>
					</div>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>
		</div>
	</layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import CodeBlock from "@/Shared/tuis/CodeBlock";
import Box from "@/Shared/tuis/Box";
import BasicTable from "@/Shared/tuis/BasicTable";
import Heading from "@/Shared/tuis/Heading";
import Avatar from "@/Shared/tuis/Avatar";

const code = `<avatar name="Avatar"></avatar>
<avatar name="Avatar" color="blue"></avatar>
<avatar name="Avatar" color="orange"></avatar>

/* size */
<avatar name="Avatar" size="small"></avatar>
<avatar name="Avatar" color="blue"></avatar>
<avatar name="Avatar" color="orange" size="large"></avatar>

/* Shape */
<avatar name="Avatar" size="small" shape="rounded"></avatar>
<avatar name="Avatar" color="blue" shape="rounded"></avatar>
<avatar name="Avatar" color="orange" size="large" shape="rounded"></avatar>`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Box,
		Avatar
	},

	data() {
		return {
			code: code,

			datas: [
				{
					name: "label",
					type: "String",
					default: "empty",
					description: "label of the input field"
				},
				{
					name: "v-model",
					type: "String",
					default: "",
					description: "For data binding"
				},
				{
					name: "options",
					type: "array",
					default: "[]",
					description:
						"[{ label: 'Male', value: 'male' }, { label: 'Female', value: 'female' }]"
				},
				{
					name: "stacked",
					type: "Boolean",
					default: "true",
					description: "If false, radio inputs are inlined"
				}
			]
		};
	}
};
</script>

 