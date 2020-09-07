<template>
  <div class="movie__wrap">
    <img
      src="../../public/jackie.png"
      alt="movie image"
      class="movie__img"
    >
    <div class="movie__footer">
      <div class="movie__info">
        <div class="movie__title">
          {{ movie.title }}
        </div>
        <div class="movie__year">
          {{ movie.year }}
        </div>
      </div>
      <div class="movie__genre">
        {{ movie.genre }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieComponent',
  props: {
    movie: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
	.movie {
		&__wrap {
			width: 325px;
		}

		&__info {
			display: flex;
			justify-content: space-between;
			font-size: 1.25rem;
			margin: 1.5rem 0 1rem;
			color: #888888;
		}

		&__genre {
			font-size: 1rem;
			color: #666666;
		}
	}
</style>
