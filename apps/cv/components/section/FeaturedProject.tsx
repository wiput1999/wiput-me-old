import React from 'react'

import Paragraph from '../common/Paragraph'
import Card from '../common/Card'
import { IFeaturedProject } from '../../utils/const'
import Link from '../common/Link'

export const FeaturedProject = ({
  name,
  description,
  links,
  year,
}: IFeaturedProject): React.ReactElement => {
  return (
    <Card>
      <Paragraph>{name}</Paragraph>
      <Paragraph color='gray'>
        {year} | {description}
      </Paragraph>
      <div className='flex'>
        {links.map(link => (
          <>
            <Link key={link.link} link={link.link}>
              {link.title}
            </Link>
            <div className='px-1' />
          </>
        ))}
      </div>
    </Card>
  )
}
