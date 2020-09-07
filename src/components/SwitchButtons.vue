<template>
	<div class="switch-btn">
		<input type="radio" :name="buttonsName" :id="leftButtonId" :value="leftButtonValue" checked/>
		<label :for="leftButtonId">
			<slot name="left-button-txt">Left</slot>
		</label>
		<input type="radio" :name="buttonsName" :id="rightButtonId" :value="rightButtonValue"/>
		<label :for="rightButtonId">
			<slot name="right-button-txt">Right</slot>
		</label>
	</div>
</template>

<script>
	export default {
		name: 'switch-buttons',
		props: {
			leftButtonValue: {
				type: String,
				required: true
			},
			leftButtonId: {
				type: String,
				required: true
			},
			rightButtonValue: {
				type: String,
				required: true
			},
			rightButtonId: {
				type: String,
				required: true
			},
			buttonsName: {
				type: String,
				required: true
			}
		}
	}
</script>

<style scoped lang="scss">
	.switch-btn {
		input {
			position: absolute;
			left: -9999px;

			& + label {
				padding: .5rem 1rem;
				display: inline-block;
				background-color: rgba(55, 55, 55, 0.6);
				text-transform: uppercase;
				color: white;
				cursor: pointer;

				&:first-of-type {
					border-bottom-left-radius: 6px;
					border-top-left-radius: 6px;
				}
				&:last-of-type {
					border-bottom-right-radius: 6px;
					border-top-right-radius: 6px;
				}
			}

			&:hover {
				& + label {
					border-color: #213140;
				}
			}

			&:checked {
				& + label {
					background-color: #f65261;
					z-index: 1;
				}
			}

			&:focus {
				& + label {
					outline: dotted 1px #CCC;
					outline-offset: .45rem;
				}
			}
		}
	}
</style>
