<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Spinner</h1>

			<box class="mb-10">
				<template slot="title">Spinner Blue</template>
				<template slot="body">
					<div class="spinner spinner-md spinner-blue w-16 h-16 block"></div>
				</template>
			</box>

			<box class="mb-10">
				<template slot="title">Spinner Red</template>
				<template slot="body">
					<div class="spinner spinner-md spinner-red w-16 h-16 block"></div>
				</template>
			</box>

			<code-block :code="code" language="css" class="mb-10">Template Code</code-block>

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

const code = `@keyframes spinner {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.spinner {
  position: relative;
  overflow: hidden;
}

.spinner:before {
  content: "";
  box-sizing: border-box;
  position: absolute;
  background-color: inherit;
  width: 100%;
  height: 100%;
  display: block;
  z-index: 1;
  top: 0;
  left: 0;
  opacity: 0.95;
}

.spinner:after {
  content: "";
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: 20px;
  height: 20px;
  margin-top: -10px;
  margin-left: -10px;
  border-radius: 50%;
  border: 2px solid rgba(0, 0, 0, 0.1);
  border-left-color: inherit;
  animation: spinner 0.65s linear infinite;
  z-index: 2;
}

.spinner-md:after {
  border-width: 3px;
  width: 32px !important;
  height: 32px !important;
}

.spinner-blue {
  border-left-color: #3490DC !important;
}
.spinner-red {
	border-left-color: #e3342f !important;
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

<style>
@keyframes spinner {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}

.spinner {
	position: relative;
	overflow: hidden;
}

.spinner:before {
	content: "";
	box-sizing: border-box;
	position: absolute;
	background-color: inherit;
	width: 100%;
	height: 100%;
	display: block;
	z-index: 1;
	top: 0;
	left: 0;
	opacity: 0.95;
}

.spinner:after {
	content: "";
	box-sizing: border-box;
	position: absolute;
	top: 50%;
	left: 50%;
	width: 20px;
	height: 20px;
	margin-top: -10px;
	margin-left: -10px;
	border-radius: 50%;
	border: 2px solid rgba(0, 0, 0, 0.1);
	border-left-color: inherit;
	animation: spinner 0.65s linear infinite;
	z-index: 2;
}

.spinner-md:after {
	border-width: 3px;
	width: 32px !important;
	height: 32px !important;
}

.spinner-blue {
	border-left-color: #3490dc !important;
}
.spinner-red {
	border-left-color: #e3342f !important;
}
</style>
 