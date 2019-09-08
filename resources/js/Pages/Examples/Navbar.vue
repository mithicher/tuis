<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-4 text-gray-800">Navbar</h1>

			<box class="mb-10">
				<template slot="title">Top Navbar</template>
				<template slot="body">
					<div class="md:flex items-center justify-between bg-white shadow rounded-lg px-4">
						<div class="flex justify-between md:flex-none items-center">
							<a href="#" class="py-3">
								<div
									class="w-8 h-8 rounded-full bg-blue-500 inline-flex items-center justify-center text-white font-bold"
								>S</div>
							</a>
							<div
								class="inline-block inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 cursor-pointer md:hidden"
								@click="toggleMenu"
							>
								<svg
									class="fill-current text-gray-600"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
								</svg>
							</div>
						</div>
						<div class="hidden md:block">
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium active text-blue-600 hover:text-blue-500"
							>Dashboard</a>
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Search</a>
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Schedule</a>
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Events</a>
						</div>
						<div class="hidden md:block">
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Sign up</a>
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Login</a>
						</div>

						<div class="md:hidden" v-if="showNavbar">
							<a
								href="#"
								class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
							>Home</a>
							<a
								href="#"
								class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
							>Search</a>
							<a
								href="#"
								class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
							>Schedule</a>
							<a
								href="#"
								class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
							>Events</a>
							<a
								href="#"
								class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
							>Sign up</a>
							<a
								href="#"
								class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500"
							>Login</a>
						</div>
					</div>
				</template>
			</box>

			<box class="mb-10">
				<template slot="title">Top Navbar 2</template>
				<template slot="body">
					<div class="md:flex items-center justify-between bg-white shadow rounded-lg px-4">
						<div class="flex justify-between md:flex-none items-center">
							<a href="#" class="py-3">
								<div
									class="w-8 h-8 rounded-full bg-blue-500 inline-flex items-center justify-center text-white font-bold"
								>S</div>
							</a>
							<div
								class="inline-block inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 cursor-pointer md:hidden"
							>
								<svg
									class="fill-current text-gray-600"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
								>
									<path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
								</svg>
							</div>
						</div>
						<div class="flex-1 hidden md:block md:ml-6">
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium active text-blue-600 hover:text-blue-500"
							>Dashboard</a>
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Search</a>
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Schedule</a>
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Events</a>
						</div>
						<div class="hidden md:block">
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Sign up</a>
							<a
								href="#"
								class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
							>Login</a>
						</div>
					</div>
				</template>
			</box>

			<code-block :code="code" language="css" class="mb-10">Active Link CSS Code</code-block>
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

const code = `.active {
	position: relative;
}
.active:after {
	bottom: 0;
	position: absolute;
	left: 0;
	right: 0;
	display: block;
	margin-left: auto;
	margin-right: auto;
	content: "";
	height: 3px;
	width: 100%;
	border-radius: 1000px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	background-color: #4299e1; /* Change this color a/c to theme */ 
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Alert,
		Box
	},

	data() {
		return {
			showNavbar: false,

			code: code,
			datas: [
				{
					name: "with-icon",
					type: "Boolean",
					default: false,
					description: "If true, icon is shown"
				},
				{
					name: "variant",
					type: "String",
					default: "info, danger, success",
					description: "The status of the alert"
				}
			]
		};
	},

	methods: {
		toggleMenu() {
			this.showNavbar = !this.showNavbar;
		}
	}
};
</script>


<style>
.active {
	position: relative;
}
.active:after {
	bottom: 0;
	position: absolute;
	left: 0;
	right: 0;
	display: block;
	margin-left: auto;
	margin-right: auto;
	content: "";
	height: 3px;
	width: 100%;
	border-radius: 1000px;
	border-bottom-left-radius: 0px;
	border-bottom-right-radius: 0px;
	background-color: #4299e1;
}
</style>