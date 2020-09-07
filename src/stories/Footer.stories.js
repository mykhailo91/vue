import Footer from '../components/Footer.vue'

export default {
  component: Footer,
  title: 'Footer'
}

export const withFooter = () => ({
  components: { Footer },
  template: `<Footer>
     <span>netflix</span><span>roulette</span>
    </Footer>`
})
