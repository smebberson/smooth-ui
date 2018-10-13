/* eslint-disable jsx-a11y/label-has-for */
import PropTypes from 'prop-types'
import { css } from './styled-engine'
import createComponent from './utils/createComponent'

const Label = createComponent(() => ({
  name: 'label',
  defaultComponent: 'label',
  style: css`
    color: ${th('alertColor')};
    display: inline-block;
    margin-bottom: ${th('alertMarginBottom')};
  `,
  propTypes: {
    children: PropTypes.node,
  },
}))

export default Label
