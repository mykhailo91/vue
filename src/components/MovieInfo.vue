<template>
	<div class="movie-info__wrap">
		<div class="movie-info__img">
			<img src="../../public/jackie.png" alt="movie img">
		</div>
		<div class="movie-info__details-wrap">
			<div class="movie-info__details">
				<h1 class="movie-info__title">{{movie.title}}</h1>
				<div class="movie-info__rating">
					<span>{{movie.rating}}</span>
				</div>
			</div>
			<div class="movie-info__comment">
				{{movie.comment}}
			</div>
			<div class="movie-info__other">
				<span class="movie-info__year">{{movie.year}}</span>
				<span class="movie-info__duration">{{movie.duration}}</span>
			</div>
			<div class="movie-info__descr">
				{{movie.descr}}
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "MovieInfo",
		props: {
			movie: Object
		}
	}
</script>

<style scoped lang="scss">
	.movie-info {
		&__wrap,
		&__details,
		&__rating,
		&__other {
			display: flex;
		}

		&__img {
			min-width: 325px;
			padding-right: 3rem;
		}

		&__details {
			&-wrap {
				color: #888888;
			}
		}

		&__title {
			margin: 0;
			font-weight: 500;
			padding-right: 1rem;
			font-size: 4rem;
			color: #888888;
		}

		&__rating {
			width: 70px;
			height: 70px;
			justify-content: center;
			border-radius: 50%;
			border: 1px solid #888888;
			position: relative;
			top: 2px;

			span {
				align-self: center;
				font-size: 1.25rem;
				color: #a1e66f;
			}
		}

		&__comment {
			padding: 1.25rem 0;
		}

		&__comment,
		&__descr {
			font-size: 1.25rem;
		}

		&__other {
			padding-bottom: 1.5rem;
			width: 34%;
			font-size: 2rem;
			color: #f65261;
			justify-content: space-between;
		}
	}
</style>
