import NoResults from '../components/NoResults.vue'

export default {
	component: NoResults,
	title: 'NoResults'
}

export const withNoResults = () => ({
	components: { NoResults },
	template: `<no-results>
     <h2>No films found</h2>
    </no-results>`
})
