<template>
	<div>
		<table class="w-full whitespace-no-wrap bg-white shadow rounded-lg overflow-hidden">
			<thead>
				<tr class="text-left">
					<th
						class="px-6 py-2 text-gray-700 font-bold tracking-wide uppercase text-sm"
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
