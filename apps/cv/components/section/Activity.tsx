import React from 'react'

import Paragraph from '../common/Paragraph'
import Card from '../common/Card'
import { IActivity } from '../../utils/const'
import Link from '../common/Link'

export const Activity = ({
  name,
  link,
  role,
  from,
  to,
}: IActivity): React.ReactElement => {
  return (
    <Card>
      <Link link={link}>{name}</Link>
      <Paragraph color='gray'>
        {role} | {from} - {to}
      </Paragraph>
    </Card>
  )
}
