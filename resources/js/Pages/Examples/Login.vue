<template>
	<div>
		<div class="h-screen bg-gray-100 flex items-center">
			<card class="max-w-md mx-auto py-5">
				<heading size="heading" class="mb-1 text-center">Login to Account</heading>
				<heading class="mb-4 text-center">Please enter your email and password to continue</heading>
				<text-input label="Email address" class="mb-4"></text-input>

				<div class="relative">
					<text-input label="Password" type="text" class="mb-5"></text-input>
					<a
						class="absolute top-0 right-0 text-blue-500 hover:text-blue-700 block text-sm"
						href="#"
					>Forgot Password?</a>
				</div>
				<loading-button ref="submitButton" class="w-full">Sign in</loading-button>

				<heading class="mt-5 text-center">
					Don't have an account?
					<a href="#" class="text-blue-500 hover:text-blue-700">Create Account</a>
				</heading>
			</card>
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
	}
};
</script>