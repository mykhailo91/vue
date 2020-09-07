import MovieComponent from '../components/MovieComponent.vue'

export default {
  component: MovieComponent,
  title: 'Movie component'
}

export const withMovie = () => ({
  components: { MovieComponent },
  template: `
    <movie-component :movie="movie"/>
  `,
  computed: {
    movie: () => ({
      imgSrc: '/jackie.PNG',
      title: 'Kill Bill: Vol 1',
      year: '2003',
      genre: 'Action & Adventure'
    })
  }
})
