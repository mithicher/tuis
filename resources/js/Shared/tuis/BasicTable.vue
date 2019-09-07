<template>
	<div>
		<table class="w-full whitespace-no-wrap bg-white shadow rounded-lg overflow-hidden">
			<thead>
				<tr class="text-left font-bold">
					<th
						class="px-6 py-2 text-gray-700"
						v-for="(heading, headingIndex) in headings"
						:key="headingIndex"
					>{{ heading }}</th>
				</tr>
			</thead>
			<tbody>
				<slot></slot>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
	props: ["datas", "headings"]
};
</script>
