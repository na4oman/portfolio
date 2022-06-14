import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import Image from 'next/image'
import certificate1 from '../../public/images/certificates/html-css.jpg'
import MyImageList from './MyImageList'

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
          <Typography paragraph color='dark_grey.main'>
            I'm a self-taught junior Full Stack Web Developer with passion for
            building fully responsive user-friendly websites and web
            applications from scratch using proven design patterns combined with
            the latest technologies. I am looking to make a start within the
            industry where I can improve my skills and enhance my knowledge in
            both front-end and back-end technologies.
          </Typography>
          <Typography paragraph color='dark_grey.main'>
            More than three years ago, I first stumbled upon the term "web
            development", and that's when it all changed. I've started looking
            deeper into it, bought my first Udemy course and started watching
            YouTube videos, following some of the best channels and instructors.
            My current tech stack includes MUI for styling, Nextjs for front-end
            along with Nextjs API routes for building API endpoints. MongoDB and
            Firebase are my preferred databases for now but I am going to learn
            and implement others as well.
          </Typography>
          <Typography paragraph color='dark_grey.main'>
            What excites me most about web development is that I am learning and
            am a part of the technology that seems to run today's world. I am
            excited to think that a concept that seems beyond comprehension is
            familiar and known to me. The creativity that coding and web
            development require appeals to me. I like the filling of
            satisfaction when a project is complete, or when you finally manage
            to solve an issue or implement a new feature you have been
            struggling with. All of these things are what I look forward to
            spending more time doing as a full time developer.
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
