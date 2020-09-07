import MovieInfo from "@/components/MovieInfo";

export default {
	component: MovieInfo,
	title: 'Movie info'
}

export const withMovie = () => ({
	components: {MovieInfo},
	template: `
    <movie-info :movie="movie"/>
  `,
	computed: {
		movie: () => ({
			title: 'Pulp Fiction',
			rating: '4.3',
			comment: 'Oscar winning Movie',
			year: '1994',
			duration: '154 min',
			descr: 'Pulp Fiction is a 1994 American crime film written and directed by Quentin Tarantion; it is based on a story by Tarantino and Roger Avary.[4] Starring John Travolta, Samuel L. Jackson, Bruce Willis, Tim Roth, Ving Rhames, and Uma Thurman, it tells several stories of criminal Los Angeles. The film\'s title refers to the pulp magazines, and hardboiled crime novels popular during the mid-20th century, known for their graphic violence and punchy dialogue.'
		})
	}
})
