import React from 'react'

import { NextPage } from 'next'
import { Flex, Heading, Stack } from '@chakra-ui/core'

const IndexPage: NextPage = () => {
  return (
    <Flex
      overflow='hidden'
      height='100%'
      justify='center'
      align='center'
      wrap={['wrap', 'wrap', 'initial']}>
      <Stack spacing={1}>
        <Heading as='h1' size='2xl'>
          WIPUT POOTONG
        </Heading>
        <Heading as='h4' size='md' textAlign='center'>
          Full-stack developer
        </Heading>
      </Stack>
    </Flex>
  )
}

export default IndexPage
