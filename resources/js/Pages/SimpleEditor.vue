<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-4 text-gray-800">Simple Editor</h1>

			<alert class="mb-4">
				A WYSIWYG editor component with Vue.js and Quill.
				<a
					class="text-blue-600"
					href="https://lobotuerto.com/blog/a-wysiwyg-editor-component-with-vuejs-and-quill/"
				>See Details</a>
			</alert>

			<box class="mb-10">
				<template slot="title">Simple Editor Example</template>
				<template slot="body">
					<simple-editor v-model="content"></simple-editor>
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
import LoadingButton from "@/Shared/tuis/LoadingButton";
import Alert from "@/Shared/tuis/Alert";

import SimpleEditor from "@/Shared/tuis/SimpleEditor.vue";

const code = `<simple-editor v-model="content"></simple-editor>`;

const jsCode = `import SimpleEditor from "@/Shared/tuis/SimpleEditor.vue";

export default {
	components: {
		SimpleEditor
	},

	data() {
		return {
			content: "<p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  <p><br></p>"
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
		LoadingButton,
		SimpleEditor
	},

	data() {
		return {
			errors: {
				content: ["Content is required"]
			},

			code: code,
			jsCode: jsCode,
			content: `<p>Hello World!</p>
  <p>Some initial <strong>bold</strong> text</p>
  <p><br></p>`
		};
	},

	methods: {}
};
</script>
 