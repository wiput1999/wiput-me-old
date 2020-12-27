import React from 'react'
import { FaFacebookSquare, FaGithub, FaLinkedin } from 'react-icons/fa'

import Subtitle from '../common/Subtitle'
import Title from '../common/Title'
import Topic from '../common/Topic'
import {
  ACTIVITIES,
  AWARDS,
  EDUCATIONS,
  INTERNSHIPS,
  FEATUREDPROJECTS,
  SKILLS,
  SCHOOLPROJECTS,
} from '../../utils/const'
import { Internship } from '../section/Internship'
import { Education } from '../section/Education'
import { Award } from '../section/Award'
import { Activity } from '../section/Activity'
import { FeaturedProject } from '../section/FeaturedProject'
import { SchoolProject } from '../section/SchoolProject'

export default function Index(): React.ReactElement {
  return (
    <div className='container mx-auto max-w-5xl py-8'>
      <Title>Wiput Pootong</Title>
      <Subtitle>
        Senior Student at Faculty of Information Technology, KMITL
      </Subtitle>
      <Subtitle>Backend Developer</Subtitle>
      <Topic>Internships</Topic>
      {INTERNSHIPS.map(data => (
        <Internship key={data.company} {...data} />
      ))}
      <Topic>Educations</Topic>
      {EDUCATIONS.map(data => (
        <Education key={data.institite} {...data} />
      ))}
      <Topic>Awards</Topic>
      {AWARDS.map(data => (
        <Award key={data.name} {...data} />
      ))}
      <Topic>Extra-curricular Activities</Topic>
      {ACTIVITIES.map(data => (
        <Activity key={data.name} {...data} />
      ))}
      <Topic>Featured Projects</Topic>
      {FEATUREDPROJECTS.map(data => (
        <FeaturedProject key={data.name} {...data} />
      ))}
      <Topic>School Projects</Topic>
      {SCHOOLPROJECTS.map(data => (
        <SchoolProject key={`schoolproject-${data.name}`} {...data} />
      ))}
      <Topic>Skills</Topic>
      <div className='grid grid-cols-4'>
        {SKILLS.map(data => (
          <div className='py-2 text-center' key={data}>
            {data}
          </div>
        ))}
      </div>
      <div className='text-center mt-4 flex justify-center text-gray-700'>
        <div className='px-4'>
          <a
            href='https://fb.com/wiput.pootong'
            target='_blank'
            rel='noopener noreferrer'>
            <FaFacebookSquare size='48px' />
          </a>
        </div>
        <div className='px-4'>
          <a
            href='https://github.com/wiput1999'
            target='_blank'
            rel='noopener noreferrer'>
            <FaGithub size='48px' />
          </a>
        </div>
        <div className='px-4'>
          <a
            href='https://www.linkedin.com/in/wiputpootong/'
            target='_blank'
            rel='noopener noreferrer'>
            <FaLinkedin size='48px' />
          </a>
        </div>
      </div>
    </div>
  )
}
