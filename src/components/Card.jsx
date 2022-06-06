import React, { useState, useEffect, useRef } from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
// import projectImage from '../../../public/images/projects/project1.avif'
import Image from 'next/image'
import { Box, Button, Fade, Grow } from '@mui/material'

const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function RecipeReviewCard({ project }) {
  const {
    codeLink,
    description,
    id,
    image,
    demoLink,
    title,
    summary,
    technologies,
  } = project

  // const containerRef = useRef(null)
  // const [isVisible, setIsVisible] = useState(false)

  // const callbackFunction = entries => {
  //   const [entry] = entries
  //   setIsVisible(entry.isIntersecting)
  // }

  // const options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: 1.0,
  // }

  // useEffect(() => {
  //   const observer = new IntersectionObserver(callbackFunction, options)
  //   if (containerRef.current) observer.observe(containerRef.current)

  //   return () => {
  //     if (containerRef.current) observer.unobserve(containerRef.current)
  //   }
  // }, [containerRef, options])

  return (
    <Card
      sx={{
        maxWidth: 345,
        color: 'primary.main',
        transition: 'all 0.2s ease-in',
        '&:hover': { transform: 'translateY(-5px)' },
      }}
    >
      <CardMedia
        sx={{
          width: '25rem',
          height: '10rem',
          boxShadow: '0 1px 8px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
        }}
      >
        <Image
          id='image'
          src={image}
          alt={title}
          width={345}
          height={180}
          objectFit='cover'
          objectPosition='top'
        />
      </CardMedia>
      <CardContent>
        <Typography variant='h5' color='tertiary.main' mb={1}>
          {title}
        </Typography>
        <Typography variant='body1' color='dark_grey.main' mb={2}>
          {technologies}
        </Typography>
        <Box height={120}>
          <Typography variant='body2' color='primary'>
            {summary}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size='small'
          color='secondary'
          onClick={() => window.open(demoLink, '_ blank')}
        >
          DEMO
        </Button>
        <Button
          size='small'
          color='primary'
          onClick={() => window.open(codeLink, '_ blank')}
        >
          CODE
        </Button>
      </CardActions>
    </Card>
  )
}
