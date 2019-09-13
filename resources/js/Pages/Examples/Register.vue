<template>
	<div>
		<div class="h-screen bg-gray-100 flex items-center">
			<card class="max-w-4xl mx-auto" :is-padding="false">
				<div class="flex">
					<div class="w-1/2 p-10">
						<heading size="heading" class="mb-5">Get Started</heading>
						<text-input label="Name" class="mb-4"></text-input>
						<text-input label="Email" type="email" class="mb-4"></text-input>
						<text-input label="Password" type="password" class="mb-5"></text-input>
						<text-input label="Confirm password" type="password" class="mb-5"></text-input>
						<loading-button ref="submitButton" class="w-full">Sign up</loading-button>

						<heading class="mt-5 text-center">
							Already have an account?
							<a
								href="/login"
								class="text-blue-500 hover:text-blue-700 border-b-2 border-blue-200 hover:border-blue-500"
							>Sign in</a>
						</heading>
					</div>
					<div class="flex-1 bg-gray-200">
						<img src="/bg.jpg" alt="bg" class="object-cover h-full w-full" />
					</div>
				</div>
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
 