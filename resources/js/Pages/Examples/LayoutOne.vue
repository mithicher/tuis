<template>
	<div>
		<div class="md:flex items-center justify-between bg-white shadow-base px-4">
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
				<a href="#" class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500">Search</a>
				<a
					href="#"
					class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500"
				>Schedule</a>
				<a href="#" class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500">Events</a>
			</div>
			<div class="hidden md:block">
				<a href="#" class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500">Sign up</a>
				<a href="#" class="px-4 py-5 inline-block font-medium text-gray-600 hover:text-blue-500">Login</a>
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
	</div>
</template>

<script>
import Layout from "@/Shared/Layout";
import TextInput from "@/Shared/tuis/TextInput";
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Card from "@/Shared/tuis/Card";
import Heading from "@/Shared/tuis/Heading";

export default {
	components: {
		LoadingButton,
		TextInput,
		Card,
		Heading
	},

	data() {
		return {
			showNavbar: false
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
 