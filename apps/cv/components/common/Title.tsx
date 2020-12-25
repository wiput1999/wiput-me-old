import React from 'react'

const Title = ({
  children,
}: {
  children?: React.ReactNode
}): React.ReactElement => {
  return <h1 className='text-4xl font-bold py-6'>{children}</h1>
}

export default Title
