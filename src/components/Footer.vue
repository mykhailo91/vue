<template>
  <footer class="footer">
    <div class="footer__info">
      <slot />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped lang="scss">
	.footer {
		text-align: center;
		padding: 1.5rem;

		&__info {
			color: #f65261;
			font-size: 1.75rem;

			span:first-child {
				font-weight: bold;
			}
		}
	}
</style>
