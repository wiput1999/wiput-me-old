import React from 'react'

const Card = ({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement => {
  return <div className='pb-4 pl-8'>{children}</div>
}

export default Card
