<template>
	<div>
		<div class="md:flex items-center justify-between bg-white shadow-base px-4 relative z-20 md:z-20">
			<div class="flex justify-between md:flex-none items-center">
				<div
					class="inline-block md:hidden inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 cursor-pointer"
					@click="showNav = !showNav"
				>
					<svg
						class="fill-current text-gray-600"
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
					>
						<path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
					</svg>
				</div>
				<a href="#">
					<img src="/september_ui_logo.png" alt="logo" width="36" />
				</a>

				<div
					class="inline-block inline-flex items-center justify-center w-8 h-8 rounded-full mr-2 cursor-pointer md:hidden"
					@click="showNavbar = !showNavbar"
				>
					<svg
						class="fill-current text-gray-600"
						xmlns="http://www.w3.org/2000/svg"
						width="30"
						height="30"
						viewBox="0 0 24 24"
					>
						<path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
					</svg>
				</div>
			</div>
			<div class="hidden md:block">
				<search-input rounded="large" :bordered="false" size="small" placeholder="Search..."></search-input>
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

		<div id="siteWrapper" class="lg:mx-0 md:flex" :class="{'opened': showNav == true}">
			<div
				id="sideNavBg"
				class="fixed inset-0 w-full h-full md:hidden"
				:class="{'opened': showNav == true}"
				@click="showNav = !showNav"
				v-if="showNav"
			></div>
			<div
				id="sideNav"
				class="h-screen fixed top-0 md:sticky bg-white w-64 -ml-64 lg:ml-0 overflow-y-auto z-40 md:z-10 shadow-base"
			>
				<div class="py-5 mx-4">
					<inertia-link
						class="mb-1 flex items-center rounded-lg bg-blue-100 text-blue-600 font-medium block py-2 px-5 hover:text-blue-600"
						href="#"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-3"
						>
							<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
							<polyline points="9 22 9 12 15 12 15 22" />
						</svg>Dashboard
					</inertia-link>

					<inertia-link
						class="mb-1 flex items-center rounded-lg hover:bg-blue-100 text-gray-600 font-medium block py-2 px-5 hover:text-blue-600"
						href="#"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-3"
						>
							<path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
							<path d="M22 12A10 10 0 0 0 12 2v10z" />
						</svg>Analytics
					</inertia-link>

					<inertia-link
						class="mb-1 flex items-center rounded-lg hover:bg-blue-100 text-gray-600 font-medium block py-2 px-5 hover:text-blue-600"
						href="#"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-3"
						>
							<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
							<line x1="4" y1="22" x2="4" y2="15" />
						</svg>Ad Campaigns
					</inertia-link>

					<inertia-link
						class="mb-1 flex items-center rounded-lg hover:bg-blue-100 text-gray-600 font-medium block py-2 px-5 hover:text-blue-600"
						href="#"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-3"
						>
							<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
							<path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
						</svg>Links
					</inertia-link>

					<inertia-link
						class="mb-1 flex items-center rounded-lg hover:bg-blue-100 text-gray-600 font-medium block py-2 px-5 hover:text-blue-600"
						href="#"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-3"
						>
							<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
							<circle cx="9" cy="7" r="4" />
							<path d="M23 21v-2a4 4 0 0 0-3-3.87" />
							<path d="M16 3.13a4 4 0 0 1 0 7.75" />
						</svg>Audience
					</inertia-link>

					<inertia-link
						class="mb-1 flex items-center rounded-lg hover:bg-blue-100 text-gray-600 font-medium block py-2 px-5 hover:text-blue-600"
						href="#"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
							class="mr-3"
						>
							<circle cx="12" cy="12" r="3" />
							<path
								d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"
							/>
						</svg>Settings
					</inertia-link>
				</div>
			</div>

			<div class="px-4 lg:px-6 py-10 flex-1">
				<div class="container mx-auto">
					<div class="md:flex md:flex-1 -mx-4 mb-10">
						<div class="md:w-1/4 px-4 mb-4 md:mb-0">
							<card>
								<div class="flex items-center">
									<div
										class="rounded-full bg-blue-100 flex-no-shrink w-16 h-16 inline-flex items-center justify-center mr-4"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="text-blue-600"
										>
											<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
											<circle cx="12" cy="7" r="4" />
										</svg>
									</div>
									<div>
										<heading size="small-caps" class="mb-2">Total Clients</heading>
										<heading size="heading2">09</heading>
									</div>
								</div>
							</card>
						</div>
						<div class="md:w-1/4 px-4 mb-4 md:mb-0">
							<card>
								<div class="flex items-center">
									<div
										class="rounded-full bg-blue-100 flex-no-shrink w-16 h-16 inline-flex items-center justify-center mr-4"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="text-blue-600"
										>
											<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
											<line x1="12" y1="11" x2="12" y2="17" />
											<line x1="9" y1="14" x2="15" y2="14" />
										</svg>
									</div>
									<div>
										<heading size="small-caps" class="mb-2">Total Projects</heading>
										<heading size="heading2">24</heading>
									</div>
								</div>
							</card>
						</div>
						<div class="md:w-1/4 px-4 mb-4 md:mb-0">
							<card>
								<div class="flex items-center">
									<div
										class="rounded-full bg-blue-100 flex-no-shrink w-16 h-16 inline-flex items-center justify-center mr-4"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="text-blue-600"
										>
											<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
											<line x1="12" y1="11" x2="12" y2="17" />
											<line x1="9" y1="14" x2="15" y2="14" />
										</svg>
									</div>
									<div>
										<heading size="small-caps" class="mb-2">Open Project</heading>
										<heading size="heading2">37</heading>
									</div>
								</div>
							</card>
						</div>
						<div class="md:w-1/4 px-4 mb-4 md:mb-0">
							<card>
								<div class="flex items-center">
									<div
										class="rounded-full bg-blue-100 flex-no-shrink w-16 h-16 inline-flex items-center justify-center mr-4"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											class="text-blue-600"
										>
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
											<polyline points="14 2 14 8 20 8" />
											<line x1="16" y1="13" x2="8" y2="13" />
											<line x1="16" y1="17" x2="8" y2="17" />
											<polyline points="10 9 9 9 8 9" />
										</svg>
									</div>
									<div>
										<heading size="small-caps" class="mb-2">Upcoming Invoice</heading>
										<heading size="heading2">09</heading>
									</div>
								</div>
							</card>
						</div>
					</div>

					<basic-table :headings="tableHeadings" theme="striped">
						<tr
							v-for="(data, dataIndex) in datas"
							:key="dataIndex"
							class="focus-within:bg-gray-200 overflow-hidden"
						>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.invoice }}</span>
							</td>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.name }}</span>
							</td>
							<td class="border-t">
								<span class="text-gray-700 px-6 py-4 flex items-center">{{ data.date }}</span>
							</td>
							<td class="border-t">
								<span
									class="text-gray-700 px-6 py-4 flex items-center justify-end"
								>{{ formatCurrency(data.amount) }}</span>
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
		</div>
	</div>
</template>

<script>
const toCurrency = (n, curr, LanguageFormat = undefined) =>
	Intl.NumberFormat(LanguageFormat, {
		style: "currency",
		currency: curr
	}).format(n);

import Layout from "@/Shared/Layout";

import Card from "@/Shared/tuis/Card";
import Heading from "@/Shared/tuis/Heading";
import Dropdown from "@/Shared/tuis/Dropdown";
import BasicTable from "@/Shared/tuis/BasicTable";
import Badge from "@/Shared/tuis/Badge";
import Alert from "@/Shared/tuis/Alert";
import SearchInput from "@/Shared/tuis/SearchInput";

export default {
	components: {
		Card,
		Heading,
		Dropdown,
		BasicTable,
		Badge,
		Alert,
		SearchInput
	},

	data() {
		return {
			showNav: false,
			showNavbar: false,
			datas: [
				{
					invoice: "#IN12345",
					name: "ABC Company",
					date: "10 Sep 2018",
					amount: 12000,
					status: "Completed"
				},
				{
					invoice: "#IN34512",
					name: "XYZ Inc.",
					date: "12 Sep 2018",
					amount: 40000,
					status: "Completed"
				},
				{
					invoice: "#IN12345",
					name: "Software Solutions",
					date: "13 Sep 2018",
					amount: 5000,
					status: "Declined"
				},
				{
					invoice: "#IN12345",
					name: "QWERTY Solutions",
					date: "14 Sep 2018",
					amount: 25000,
					status: "Completed"
				},
				{
					invoice: "#IN34555",
					name: "Software Business",
					date: "15 Sep 2018",
					amount: 20000,
					status: "Pending"
				}
			],

			tableHeadings: [
				{
					title: "Invoice",
					type: "text",
					align: "left"
				},
				{
					title: "Name",
					type: "text",
					align: "left"
				},
				{
					title: "Date",
					type: "text",
					align: "left"
				},
				{
					title: "Amount",
					type: "number",
					align: "right"
				},
				{
					title: "Status",
					type: "text",
					align: "left"
				}
			]
		};
	},

	methods: {
		formatCurrency(amount) {
			return toCurrency(amount, "INR", "en-us");
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

#sideNav {
	transition: all 0.3s ease-in-out;
}

#siteWrapper.opened #sideNav {
	top: 0;
	left: 0rem;
	margin-left: 0rem;
}

#siteWrapper.opened #sideNavBg {
	content: "";
	width: 100%;
	height: 100%;
	left: 0px;
	top: 0px;
	position: fixed;
	z-index: 30;
	background: rgba(0, 0, 20, 0.4);
}
</style>
 