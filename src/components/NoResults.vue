<template>
	<section class="no-res">
		<slot />
	</section>
</template>

<script>
	export default {
		name: 'NoResults'
	}
</script>

<style scoped lang="scss">
	.no-res {
		text-align: center;

		h2 {
			color: #888888;
			font-weight: 300;
			font-size: 3.5rem;
		}
	}
</style>
