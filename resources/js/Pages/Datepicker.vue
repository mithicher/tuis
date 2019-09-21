<template>
	<layout>
		<div class="mb-10 w-2/3 mx-auto">
			<h1 class="text-3xl font-bold mb-10 text-gray-800">Datepicker</h1>

			<box class="mb-10">
				<template slot="title">Datepicker</template>
				<template slot="body">
					<date-input
						format="YYYY-MM-DD"
						class="w-64"
						placeholder="Select date"
						v-model="datepicker"
						readonly
					></date-input>
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
import SwitchInput from "@/Shared/tuis/SwitchInput";
import DateInput from "@/Shared/tuis/DateInput";

const code = `<date-input format="YYYY-MM-DD" class="mt-10 w-64" placeholder="Select date" v-model="datepicker" readonly></date-input>`;
const jsCode = `import DateInput from "@/components/DateInput.vue";

export default {
	data() {
		return {
			datepicker: "2019-09-20"
		};
	},

	components: {
		DateInput
	}
};`;

export default {
	components: {
		Layout,
		CodeBlock,
		BasicTable,
		Heading,
		Box,
		SwitchInput,
		DateInput
	},

	data() {
		return {
			code: code,
			jsCode: jsCode,
			datepicker: "2019-09-25"
		};
	}
};
</script>

 