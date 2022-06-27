import React from 'react'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import Certificates from './Certificates'
import profilePic2 from '../../public/images/profile/atanas2.jpg'

const About = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref} component='section' px={{ xs: 3, sm: 10 }} mb={20}>
      <Typography
        component='h2'
        variant='h2'
        color='secondary'
        textAlign='center'
        mb={5}
        fontFamily='Shadows Into Light'
      >
        About me
      </Typography>
      <Grid
        container
        spacing={3}
        flexDirection={{ xs: 'column', lg: 'row' }}
        justifyContent='center'
        alignItems={{ xs: 'center', lg: 'flex-start' }}
      >
        <Grid item xs={12} lg={6}>
          <Box
            sx={{
              display: { xs: 'inline-block', sm: 'none' },
              width: '8rem',
              height: '8rem',
              boxShadow: '0 1px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '50%',
              overflow: 'hidden',
              clipPath: 'circle(50% at 50% 50%)',
              shapeOutside: 'circle(50% at 50% 50%)',
              position: 'relative',
              float: 'left',
              mr: '2rem',
            }}
          >
            <Image
              src={profilePic2}
              alt='Picture of the author'
              width={900}
              height={900}
              objectFit='cover'
              objectPosition='top'
              priority
            />
          </Box>
          <Typography paragraph color='dark_grey.main'>
            I'm a self-taught Full Stack Web Developer with passion for building
            fully responsive user-friendly websites and web applications from
            scratch using proven design patterns combined with the latest
            technologies. I am looking for an opportunity where I can improve my
            coding skills and enhance my knowledge in both front-end and
            back-end technologies.
          </Typography>
          <Typography paragraph color='dark_grey.main'>
            More than three years ago, I first stumbled upon the term "web
            development", and that's when it all changed. I've started looking
            deeper into it, bought my first Udemy course and started watching
            YouTube videos, following some of the best channels and instructors.
            My current tech stack includes MUI for styling, NextJS as a
            front-end along with NextJS API routes for building API endpoints.
            MongoDB and Firebase are my preferred databases.
          </Typography>
          <Typography paragraph color='dark_grey.main'>
            I always strive to improve my coding skills and write concise,
            clean, reusable and readable code. I like the filling of
            satisfaction when a project is complete, or when you finally manage
            to solve an issue or implement a new feature you have been
            struggling with. All of these things are what I look forward to
            spending more time doing as a full-time web developer.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Certificates />
        </Grid>
      </Grid>
    </Box>
  )
})

export default About
