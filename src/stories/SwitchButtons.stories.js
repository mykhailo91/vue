import SwitchButtons from '../components/SwitchButtons.vue'
import {text} from "@storybook/addon-knobs";

export default {
	component: SwitchButtons,
	title: 'Switch Buttons'
}

export const withTextForLeftAndRightButton = () => ({
	components: {SwitchButtons},
	template: `
    <switch-buttons left-button-value="left" right-button-value="right" left-button-id="left" right-button-id="right"
                       buttons-name="name">
      <template v-slot:left-button-txt>{{leftButtonText}}</template>
      <template v-slot:right-button-txt>{{rightButtonText}}</template>
    </switch>`,
	props: {
		leftButtonText: {
			default: text('Left button text', 'left')
		},
		rightButtonText: {
			default: text('Right button text', 'right')
		}
	}
})
