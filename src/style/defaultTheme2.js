import { css } from 'styled-components'

export const white = '#fff'
export const gray100 = '#f8f9fa'
export const gray200 = '#e9ecef'
export const gray300 = '#dee2e6'
export const gray400 = '#ced4da'
export const gray500 = '#adb5bd'
export const gray600 = '#6c757d'
export const gray700 = '#495057'
export const gray800 = '#343a40'
export const gray900 = '#212529'
export const black = '#000'

export const blue = '#007bff'
export const indigo = '#6610f2'
export const purple = '#6f42c1'
export const pink = '#e83e8c'
export const red = '#dc3545'
export const orange = '#fd7e14'
export const yellow = '#ffc107'
export const green = '#28a745'
export const teal = '#20c997'
export const cyan = '#17a2b8'

export const primary = blue
export const secondary = gray600
export const success = green
export const info = cyan
export const warning = yellow
export const danger = red
export const light = gray100
export const dark = gray800

export const btnSize = ({
  paddingY,
  paddingX,
  fontSize,
  lineHeight,
  borderRadius,
}) => css`
  padding: ${paddingY} ${paddingX};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  border-radius: ${props =>
    props.theme.enableRounded ? `${borderRadius}px` : 0};
`
