<template>
	<div>
		<div class="bg-white shadow-base px-4 relative z-20 md:z-20">
			<div class="container md:flex items-center justify-between mx-auto">
				<div class="flex justify-between md:flex-none items-center">
					<a href="#" class="py-3">
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
					<a
						href="#"
						class="px-4 mr-3 py-5 inline-block font-medium active text-blue-600 hover:text-blue-600"
					>Home</a>
					<a
						href="#"
						class="px-4 mr-3 py-5 inline-block font-medium text-gray-500 hover:text-blue-600"
					>Events</a>
					<a
						href="#"
						class="px-4 mr-3 py-5 inline-block font-medium text-gray-500 hover:text-blue-600"
					>Tickets</a>

					<a
						href="#"
						class="px-4 py-5 inline-block font-medium text-gray-500 hover:text-blue-600"
					>Trending</a>
				</div>

				<div class="hidden md:block">
					<a
						href="#"
						class="px-4 py-5 mr-3 inline-block font-medium text-gray-500 hover:text-blue-600"
					>Log in</a>
					<loading-button href="#" variant="primary" size="small">Sign up</loading-button>
					<!-- <dropdown>
						<template #trigger>
							<div
								class="outline-none inline-flex items-center justify-center h-10 w-10 overflow-hidden rounded-full shadow-inner"
							>
								<img
									src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=256&amp;q=80"
									alt
									class="h-full w-full object-cover"
								/>
							</div>
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
					</dropdown>-->
				</div>
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

		<div class="bg-gray-200 px-4 py-10">
			<div class="mx-auto max-w-2xl text-center">
				<heading
					size="heading2"
					tag="h1"
					class="mb-4"
				>Find amazing events happening around your nearby places</heading>

				<search-input rounded="large" placeholder="Near Guwahati..."></search-input>

				<div class="mt-2 text-gray-600 text-xs">Found 25 events in your area!</div>
			</div>
		</div>

		<div class="px-4 lg:px-6 py-16">
			<div class="container mx-auto">
				<div class="md:flex md:flex-wrap md:flex-1 -mx-4 mb-10">
					<div class="md:w-1/4 px-4 mb-6">
						<card class="h-64 w-full bg-gray-200"></card>
					</div>
					<div class="md:w-1/4 px-4 mb-6">
						<card class="h-64 w-full bg-gray-200"></card>
					</div>
					<div class="md:w-1/4 px-4 mb-6">
						<card class="h-64 w-full bg-gray-200"></card>
					</div>
					<div class="md:w-1/4 px-4 mb-6">
						<card class="h-64 w-full bg-gray-200"></card>
					</div>
					<div class="md:w-1/4 px-4 mb-6">
						<card class="h-64 w-full bg-gray-200"></card>
					</div>
					<div class="md:w-1/4 px-4 mb-6">
						<card class="h-64 w-full bg-gray-200"></card>
					</div>
					<div class="md:w-1/4 px-4 mb-6">
						<card class="h-64 w-full bg-gray-200"></card>
					</div>
					<div class="md:w-1/4 px-4 mb-6">
						<card class="h-64 w-full bg-gray-200"></card>
					</div>
				</div>
			</div>
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
import SearchInput from "@/Shared/tuis/SearchInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";

export default {
	components: {
		Card,
		Heading,
		Dropdown,
		BasicTable,
		Badge,
		Alert,
		SearchInput,
		LoadingButton
	},

	data() {
		return {
			showNav: false,
			showNavbar: false
		};
	},

	methods: {}
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
 