<template>
    <layout>
        <div class="container mx-auto py-10 md:py-20">
            <div class="md:flex max-w-6xl mx-auto items-center">
                <div class="md:w-1/2">
                    <heading size="display" class="mb-5 hidden md:block"
                        >September UI</heading
                    >
                    <heading size="heading" class="mb-5 md:hidden"
                        >September UI</heading
                    >

                    <paragraph size="intro"
                        >Build Laravel-Vue websites with speed. A collection of
                        simple, modular and reusable components library that
                        gives you the building blocks you need to build your
                        Laravel-Vue applications.</paragraph
                    >

                    <div class="mt-6 mb-6">
                        <a
                            href="/alert"
                            class="inline-flex align-items-center justify-center rounded-lg font-semibold mr-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                            >Get Started</a
                        >
                        <a
                            href="https://github.com/mithicher/tuis"
                            class="inline-flex align-items-center justify-center rounded-lg font-semibold bg-gray-300 hover:bg-gray-400 text-gray-800 px-8 py-3"
                            >View on Github</a
                        >
                    </div>

                    <span class="text-gray-600">current version v1.0.1</span>
                </div>
                <div class="md:w-1/2">
                    <img
                        src="/bg.svg"
                        alt="hero-bg"
                        width="450"
                        class="mx-auto"
                    />
                </div>
            </div>
        </div>
    </layout>
</template>

<script>
import Layout from "@/Shared/Layout";
import Heading from "@/Shared/tuis/Heading.vue";
import Paragraph from "@/Shared/tuis/Paragraph.vue";

const code = `<form @submit.prevent="save" enctype="multipart/form-data" method="post">
	<card with-header with-footer>
		<template slot="header">
			<heading size="heading">Form with Image Upload</heading>
		</template>

		<select-input
			class="mb-5"
			label="Select fruit"
			v-model="selectedValue"
			:options="options"
			:errors="errors['selectedValue']"
			@input="delete errors['selectedValue']"
		></select-input>

		<text-input
			class="mb-5"
			label="Text Input"
			v-model="text"
			:errors="errors['text']"
			@input="delete errors['text']"
		></text-input>

		<file-input
			v-model="photo"
			class="pr-6 pb-8 w-full lg:w-1/2"
			type="file"
			accept="image/*"
			label="Photo"
			:errors="errors['photo']"
		/>

		<template slot="footer">
			<loading-button
				ref="cancelButton"
				variant="secondary"
				variant-type="outline"
				type="submit"
			>Cancel</loading-button>
			<loading-button ref="submitButton" variant="primary" type="submit">Save Button</loading-button>
		</template>
	</card>
</form>`;

export default {
    components: {
        Layout,
        Heading,
        Paragraph
    },

    props: {
        errors: Object
    },

    data() {
        return {
            code: code,
            loading: false,

            photo: null,
            text: "",
            selectedValue: "Apple",

            options: [
                {
                    label: "Apple",
                    value: "Apple"
                },
                {
                    label: "Banana",
                    value: "Banana"
                },
                {
                    label: "Blueberry",
                    value: "Blueberry"
                },
                {
                    label: "Kiwi",
                    value: "Kiwi"
                },
                {
                    label: "Pear",
                    value: "Pear"
                },
                {
                    label: "Pineapple",
                    value: "Pineapple"
                },
                {
                    label: "Watermelon",
                    value: "Watermelon"
                }
            ]

            // errors: {
            // 	selectedValue: ["This field is required"]
            // }
            // errors: {}
        };
    },

    methods: {
        save() {
            var data = new FormData();

            data.append("selectedValue", this.selectedValue || "");
            data.append("photo", this.photo || "");
            data.append("text", this.text || "");

            this.$refs.submitButton.startLoading();

            this.$inertia
                .post("/test/store", data)
                .then(() => {
                    this.$refs.submitButton.stopLoading();
                })
                .catch(() => {
                    this.$refs.submitButton.stopLoading();
                });
        }
    }
};
</script>
