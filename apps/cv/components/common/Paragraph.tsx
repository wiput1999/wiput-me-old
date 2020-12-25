import React from 'react'

type ParagraphProps = {
  color?: undefined | '' | 'gray'
  children?: React.ReactNode
}

const Paragraph = ({ children, color }: ParagraphProps): React.ReactElement => {
  return <p className={color && `text-${color}-500`}>{children}</p>
}

export default Paragraph
