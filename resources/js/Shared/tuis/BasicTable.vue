<template>
	<div>
		<table class="w-full whitespace-no-wrap bg-white shadow rounded-lg">
			<thead>
				<tr class="text-left">
					<th
						class="px-6 py-3 text-gray-500 font-bold tracking-wider uppercase text-xs"
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
