<template>
	<div>
		<input
			v-bind="$attrs"
			v-bind:value="value"
			v-on:input="$emit('input', $event.target.value)"
			class="search-input px-2 py-2 h-12 leading-normal block w-full border-2 text-gray-800 bg-white font-sans rounded-lg text-left appearance-none focus:border-blue-600 outline-none"
			:class="searchClass"
		/>
	</div>
</template>

<script>
export default {
	name: "SearchInput",
	inheritAttrs: false,

	data() {
		return {
			search: ""
		};
	},

	props: {
		value: {
			type: String
		},
		searchClass: {
			type: String
		}
	}
};
</script>

<style scoped>
.search-input {
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23b8c2cc' d='M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: left calc(0.375em + 0.275rem) center;
	padding-left: 42px;
}
.search-input.form-control-lg {
	background-position: 10px 12px;
}
</style>