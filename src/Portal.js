/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */
import React from 'react'
import { createPortal } from 'react-dom'

class Portal extends React.Component {
  constructor(props) {
    super(props)
    if (!this.container && typeof document !== 'undefined') {
      this.container = document.createElement('div')
      document.body.appendChild(this.container)
    }
  }

  componentWillUnmount() {
    document.body.removeChild(this.container)
  }

  render() {
    if (!this.container) return null
    return createPortal(this.props.children, this.container)
  }
}

export default Portal
