import React from 'react'

type LinkProps = {
  link?: undefined | string
  children?: React.ReactNode
}

const Link = ({ children, link }: LinkProps): React.ReactElement => {
  const element = (
    <p className={`underline ${link && 'cursor-pointer'}`}>{children}</p>
  )
  if (link) {
    return (
      <a href={link} target='_blank' rel='noreferrer'>
        {element}
      </a>
    )
  }
  return element
}

export default Link
