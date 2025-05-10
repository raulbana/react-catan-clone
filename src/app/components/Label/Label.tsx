import React from 'react'
import { FontProps } from '../../themes/theme'

export interface LabelProps {
  color: string
  typography: FontProps
  text: string
}

const Label: React.FC<LabelProps> = ({ color, typography, text }) => {
  return (
    <span
      style={{
        color,
        fontFamily: typography.fontFamily,
        fontSize: typography.fontSize,
        fontWeight: typography.fontWeight,
        lineHeight: typography.lineHeight,
      }}
    >
      {text}
    </span>
  )
}

export default Label