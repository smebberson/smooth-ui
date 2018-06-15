import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import classNames from 'classnames'
import Transition from './Transition'
import Portal from './Portal'
import * as defaultTheme from './theme/defaultTheme'
import { th } from './utils'

const TooltipComponent = ({ children, className, show, theme, ...props }) => (
  <Portal>
    <Transition timeout={theme.modalTransitionDuration} in={show}>
      {transitionState => (
        <div
          role="dialog"
          tabIndex="-1"
          className={classNames(
            'sui-tooltip',
            {
              'sui-tooltip-shown': show || transitionState === 'exiting',
              [`sui-tooltip-transition-${transitionState}`]: transitionState,
            },
            className,
          )}
          {...props}
        >
          {children}
        </div>
      )}
    </Transition>,
  </Portal>
)

const Tooltip = styled(TooltipComponent)`
  transition: opacity ${th('modalTransitionDuration')}ms ease-in-out;

  &.sui-tooltip-transition-entering {
    opacity: 1;
  }

  &.sui-tooltip-transition-entered {
    opacity: 1;
  }

  &.sui-tooltip-transition-exited {
    opacity: 0;
  }

  &.sui-tooltip-transition-exiting {
    opacity: 0;
  }
`

Tooltip.propTypes = {
  children: PropTypes.node,
  show: PropTypes.bool,
}

Tooltip.defaultProps = {
  theme: defaultTheme,
}

/** @component */
export default Tooltip
