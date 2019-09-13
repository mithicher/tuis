<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Dropdown</h1>

			<box class="mb-10">
				<template slot="title">Basic Dropdown</template>
				<template slot="body">
					<div class="h-24 mt-10">
						<div class="flex items-center justify-between bg-white shadow rounded-lg px-4">
							<a href="#" class="py-3">
								<div
									class="w-8 h-8 rounded-full bg-blue-500 inline-flex items-center justify-center text-white font-bold"
								>S</div>
							</a>

							<div>
								<dropdown>
									<template #trigger>
										<span
											class="outline-none block inline-flex items-center justify-center h-8 w-8 overflow-hidden rounded-full border-2 border-gray-600 xl:border-gray-300"
										>
											<img
												src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"
												alt
												class="h-full w-full object-cover"
											/>
										</span>
									</template>
									<template #dropdown>
										<div class="mt-2 bg-white xl:border rounded-lg w-48 py-1 shadow-xl">
											<a
												class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
												href="#"
											>Notifications</a>
											<a
												class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
												href="#"
											>Profile & Account</a>
											<a
												class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
												href="#"
											>Help & Feedback</a>
											<div class="border-t my-1"></div>
											<a
												class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
												href="#"
											>Admin Panel</a>
											<a
												class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
												href="#"
											>Logout</a>
										</div>
									</template>
								</dropdown>
							</div>
						</div>
					</div>
				</template>
			</box>

			<code-block :code="code" language="html" class="mb-10">Template Code</code-block>
			<code-block :code="jsCode" language="js" class="mb-10">JS Code</code-block>
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

const code = `<dropdown>
	<template #trigger>
		<span
			class="block inline-flex items-center justify-center h-8 w-8 
			overflow-hidden rounded-full border-2 border-gray-600 xl:border-gray-300"
		>
			<img
				src="/avatar.png"
				alt
				class="h-full w-full object-cover"
			/>
		</span>
	</template>
	<template #dropdown>
		<div class="mt-2 bg-white xl:border rounded-lg w-48 py-1 shadow-xl">
			<a
				class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
				href="#"
			>Notifications</a>
			<a
				class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
				href="#"
			>Profile & Account</a>
			<a
				class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
				href="#"
			>Help & Feedback</a>
			<div class="border-t my-1"></div>
			<a
				class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
				href="#"
			>Admin Panel</a>
			<a
				class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-400"
				href="#"
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
 