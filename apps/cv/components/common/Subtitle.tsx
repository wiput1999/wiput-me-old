import React from 'react'

const Subtitle = ({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement => {
  return <h2 className='text-2xl text-gray-500'>{children}</h2>
}

export default Subtitle
