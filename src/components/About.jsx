import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import certificate1 from '../../public/images/certificates/html-css.jpg'
import MyImageList from './MyImageList'
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
            I'm a self-taught junior Full Stack Web Developer with passion for
            building fully responsive user-friendly websites and web
            applications from scratch using proven design patterns combined with
            the latest technologies. I am looking for an opportunity where I can
            improve my coding skills and enhance my knowledge in both front-end
            and back-end technologies.
          </Typography>
          <Typography paragraph color='dark_grey.main'>
            More than three years ago, I first stumbled upon the term "web
            development", and that's when it all changed. I've started looking
            deeper into it, bought my first Udemy course and started watching
            YouTube videos, following some of the best channels and instructors.
            I've first learnt HTML and CSS along with JavaScript. It only piqued
            my curiosity and I decided that I want to connect the front-end with
            a back-end hence I took another course learning Express, NodeJS,
            MongoDB and a lot more. Feeling more flexibility on the front-end
            pushed me to go step further and learn React and NextJS along with
            styling libraries like Bootstrap and Material UI. My current tech
            stack includes MUI for styling, NextJS as a front-end along with
            NextJS API routes for building API endpoints. MongoDB and Firebase
            are my preferred databases.
          </Typography>
          <Typography paragraph color='dark_grey.main'>
            I always strive to improve my coding skills and write concise and
            readable code. What excites me most about web development is that I
            am learning and am a part of the technology that seems to run
            today's world. I am excited to think that a concept that seems
            beyond comprehension is familiar and known to me. The creativity
            that coding and web development require is my nature. I like the
            filling of satisfaction when a project is complete, or when you
            finally manage to solve an issue or implement a new feature you have
            been struggling with. All of these things are what I look forward to
            spending more time doing as a full-time web developer.
          </Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <MyImageList />
        </Grid>
      </Grid>
    </Box>
  )
})

export default About
