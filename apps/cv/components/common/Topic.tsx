import React from 'react'

const Topic = ({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement => {
  return <h3 className='text-xl font-bold py-4'>{children}</h3>
}

export default Topic
