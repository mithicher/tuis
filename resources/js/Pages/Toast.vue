<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-4 text-gray-800">Toast</h1>

			<alert class="mb-4">
				<strong>Vue Snackbar:</strong> A Vue.JS plugin for creating and displaying snackbars following the material design policies created by Google. Documentation available at
				<a
					href="https://vue-snack.surge.sh"
				>https://vue-snack.surge.sh</a>
			</alert>

			<alert class="mb-4">Use Toast to show short & precise message.</alert>

			<box class="mb-10">
				<template slot="title">Toast Example</template>
				<template slot="body">
					<loading-button @click="showMessage">Show Toast Message</loading-button>
				</template>
			</box>

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
import LoadingButton from "@/Shared/tuis/LoadingButton";

import Alert from "@/Shared/tuis/Alert";

const jsCode = `// app.js
import VueSnackbar from "vue-snack";
Vue.use(VueSnackbar, { close: true, position: 'bottom-left' });

// in your component file
export default {
	methods: {
		showMessage () {
			this.$snack.success("We are using Vue Snackbar");
		}
	}
}`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Alert,
		Box,
		LoadingButton
	},

	data() {
		return {
			jsCode: jsCode
		};
	},

	methods: {
		showMessage() {
			this.$snack.success("We are using Vue Snackbar");
		}
	}
};
</script>
 