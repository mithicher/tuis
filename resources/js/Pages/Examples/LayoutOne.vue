<template>
	<div>
		<div class="md:flex items-center justify-between bg-white shadow-base px-4">
			<div class="flex justify-between md:flex-none items-center">
				<a href="/" class="inline-flex items-center font-bold text-xl">
					<img src="/sui.svg" alt="septemberui" width="44" title="September UI" />
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
					class="px-4 mr-3 py-5 inline-block font-medium active text-blue-600 hover:text-blue-600"
				>Dashboard</a>
				<a
					href="#"
					class="px-4 mr-3 py-5 inline-block font-medium text-gray-500 hover:text-blue-600"
				>Invoices</a>
				<a
					href="#"
					class="px-4 mr-3 py-5 inline-block font-medium text-gray-500 hover:text-blue-600"
				>Investments</a>
				<a href="#" class="px-4 py-5 inline-block font-medium text-gray-500 hover:text-blue-600">Notices</a>
			</div>
			<div class="hidden md:block">
				<dropdown>
					<template #trigger>
						<span
							class="outline-none block inline-flex items-center justify-center h-10 w-10 overflow-hidden rounded-full shadow-inner"
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
								class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
								href="#"
							>Notifications</a>
							<a
								class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
								href="#"
							>Profile & Account</a>
							<a
								class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
								href="#"
							>Help & Feedback</a>
							<div class="border-t my-1"></div>
							<a
								class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
								href="#"
							>Admin Panel</a>
							<a
								class="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-blue-600"
								href="#"
							>Logout</a>
						</div>
					</template>
				</dropdown>
				<!-- <a href="#" class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500">Sign up</a>
				<a href="#" class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500">Login</a>-->
			</div>

			<div class="md:hidden" v-if="showNavbar">
				<a href="#" class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500">Home</a>
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
				<a href="#" class="border-t px-2 py-3 block font-medium text-gray-600 hover:text-blue-500">Login</a>
			</div>
		</div>

		<div class="max-w-5xl mx-auto px-4 py-10">
			<alert class="mb-5">
				<strong>Hello</strong>. Please verify your email to unlock full features of the application.
			</alert>

			<div class="mb-4 flex items-center justify-between">
				<heading size="heading">Overview</heading>
				<div>
					<heading>As of September 14, 2018</heading>
				</div>
			</div>
			<div class="md:flex md:flex-1 -mx-4 mb-10">
				<div class="md:w-1/3 px-4 mb-4 md:mb-0">
					<card>
						<heading size="small-caps" class="mb-2">Total Balance</heading>
						<heading size="heading" class="mb-2">$16,412.91</heading>
						<span class="text-green-600">+$648.43</span>
					</card>
				</div>
				<div class="md:w-1/3 px-4 mb-4 md:mb-0">
					<card>
						<heading size="small-caps" class="mb-2">Investments</heading>
						<heading size="heading" class="mb-2">$15,606.14</heading>
						<span class="text-green-600">+$648.43</span>
					</card>
				</div>
				<div class="md:w-1/3 px-4 mb-4 md:mb-0">
					<card class="h-full">
						<heading size="small-caps" class="mb-2">Cash</heading>
						<heading size="heading">$806.78</heading>
					</card>
				</div>
			</div>

			<heading size="heading" class="mb-4">Transaction History</heading>
			<basic-table :headings="['Invoice', 'Date', 'Amount', 'Status']">
				<tr
					v-for="(data, dataIndex) in datas"
					:key="dataIndex"
					class="hover:bg-gray-100 focus-within:bg-gray-200"
				>
					<td class="border-t">
						<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.invoice }}</span>
					</td>
					<td class="border-t">
						<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.date }}</span>
					</td>
					<td class="border-t">
						<span class="text-gray-700 px-6 py-4 flex items-center">${{ data.amount }}</span>
					</td>
					<td class="border-t">
						<span class="px-6 py-4 flex items-center">
							<badge variant="danger" v-if="data.status == 'Declined'">{{ data.status }}</badge>
							<badge variant="success" v-if="data.status == 'Completed'">{{ data.status }}</badge>
							<badge variant="warning" v-if="data.status == 'Pending'">{{ data.status }}</badge>
						</span>
					</td>
				</tr>
			</basic-table>
		</div>
	</div>
</template>

<script>
import Layout from "@/Shared/Layout";

import Card from "@/Shared/tuis/Card";
import Heading from "@/Shared/tuis/Heading";
import Dropdown from "@/Shared/tuis/Dropdown";
import BasicTable from "@/Shared/tuis/BasicTable";
import Badge from "@/Shared/tuis/Badge";
import Alert from "@/Shared/tuis/Alert";

export default {
	components: {
		Card,
		Heading,
		Dropdown,
		BasicTable,
		Badge,
		Alert
	},

	data() {
		return {
			showNavbar: false,
			datas: [
				{
					invoice: "#IN12345",
					date: "10 Sep 2018",
					amount: 12000,
					status: "Completed"
				},
				{
					invoice: "#IN34512",
					date: "12 Sep 2018",
					amount: 40000,
					status: "Completed"
				},
				{
					invoice: "#IN12345",
					date: "13 Sep 2018",
					amount: 5000,
					status: "Declined"
				},
				{
					invoice: "#IN12345",
					date: "14 Sep 2018",
					amount: 25000,
					status: "Completed"
				},
				{
					invoice: "#IN34555",
					date: "15 Sep 2018",
					amount: 20000,
					status: "Pending"
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
	background-color: #4299e1; /* Change this color a/c to theme */
}
</style>
 