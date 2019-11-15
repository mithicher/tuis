<template>
	<component :is="tag" :class="cssClasses" :href="to">
		<slot></slot>
	</component>
</template>

<script>
export default {
	props: {
		tag: {
			type: String,
			default: "p"
		},
		size: {
			type: String,
			default: "normal"
		},
		color: {
			type: String,
			default: ""
		},
		to: {
			type: String
		}
	},

	computed: {
		cssClasses() {
			return [
				{
					"text-sm leading-normal": this.size == "small",
					"text-base leading-normal": this.size == "normal",
					"text-xs font-bold tracking-wider uppercase":
						this.size == "small-caps",
					"text-lg font-light leading-normal": this.size == "intro"
				},
				this.color
			];
		}
	}
};
</script>