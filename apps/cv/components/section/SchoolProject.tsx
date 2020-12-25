import React from 'react'

import Paragraph from '../common/Paragraph'
import Card from '../common/Card'
import { ISchoolProject } from '../../utils/const'
import Link from '../common/Link'

export const SchoolProject = ({
  name,
  year,
  description,
  link,
}: ISchoolProject): React.ReactElement => {
  return (
    <Card>
      <Link link={link}>{name}</Link>
      <Paragraph color='gray'>
        {year} | {description}
      </Paragraph>
    </Card>
  )
}
