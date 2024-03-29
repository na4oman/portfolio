import React, { useState, useEffect, useRef } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Image from 'next/image'
import profilePic2 from '../../public/images/profile/atanas2.jpg'

const Hero = ({ onClickHanle }) => {
  const [shown, setShown] = useState(false)
  const imageContainerRef = useRef(null)
  const textHiRef = useRef(null)

  useEffect(() => {
    setShown(true)
  }, [])

  const handleButtonClick = () => onClickHanle(3)

  return (
    <Box
      ref={textHiRef}
      component='section'
      bgcolor='background.default'
      color='text.secondary.main'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingX: { xs: 5, md: 0 },
      }}
    >
      <Slide
        direction='right'
        in={shown}
        container={textHiRef.current}
        timeout={2000}
        mountOnEnter
        unmountOnExit
        easing={{
          enter: 'cubic-bezier(0, 1.5, .8, 1)',
          exit: 'linear',
        }}
      >
        <Box aria-label='text-zone'>
          <Typography
            component='h1'
            variant='h1'
            fontWeight='bold'
            sx={{
              display: 'inline-block',
              whiteSpace: 'pre-line',
              background: '-webkit-linear-gradient(90deg, #08fdd8, #fd1056)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '-1px',
              lineHeight: { xs: '3rem', md: '4rem', lg: '5rem' },
              fontSize: { xs: '3rem', md: '3.5rem', lg: '5rem' },
            }}
          >
            <Box
              component='span'
              sx={{
                display: 'block',
              }}
            >
              Hi,
            </Box>

            <Box
              component='span'
              sx={{
                display: 'block',
              }}
            >
              I&apos;m
              <Box
                component='span'
                display='inline-block'
                position='relative'
                ml={3}
                sx={{
                  color: theme => theme.palette.secondary.main,
                  WebkitTextFillColor: 'initial',
                  fontSize: { xs: '4.5rem', sm: '6rem', lg: '7.5rem' },
                  '&::before': {
                    content: '"A"',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 6,
                    color: theme => theme.palette.error.main,
                  },
                }}
              >
                A
              </Box>
              tanas,
            </Box>
            <Box
              component='span'
              sx={{
                display: 'block',
              }}
            >
              web developer
            </Box>
          </Typography>
          <Typography
            component='h3'
            variant='h6'
            sx={{
              color: theme => theme.palette.grey[500],
              fontWeight: '300',
              letterSpacing: '3px',
            }}
          >
            Full Stack Web Developer
          </Typography>
          <Typography
            component='h4'
            variant='caption'
            sx={{
              color: theme => theme.palette.grey[500],
              fontWeight: '300',
              letterSpacing: '2px',
            }}
          >
            JavaScript / React / NextJS / NodeJS / Express / MongoDB
          </Typography>
          <Box>
            <Button
              // color='secondary'
              onClick={handleButtonClick}
              sx={{
                color: theme => theme.palette.secondary.main,
                display: 'inline-block',
                padding: '.7rem 4rem',
                border: '1px solid #08fdd8',
                marginTop: '2rem',
                textTransform: 'none',
                textDecoration: 'none',
                letterSpacing: '2px',
                fontSize: '1rem',
                fontWeight: '400',
                transition: 'all 0.5s ease-in',
                '&:hover': {
                  background: theme => theme.palette.secondary.main,
                  color: '#1d1d1d',
                  border: '1px solid #1d1d1d',
                },
              }}
            >
              Contact me!
            </Button>
          </Box>
        </Box>
      </Slide>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          alignItems: 'center',
          justifyContent: 'center',
        }}
        ref={imageContainerRef}
      >
        <Slide
          direction='left'
          in={shown}
          container={imageContainerRef.current}
          timeout={2000}
          easing={{
            enter: 'cubic-bezier(0, 1.5, .8, 1)',
            exit: 'linear',
          }}
        >
          <Box
            sx={{
              width: { xs: '12rem', md: '15rem', lg: '20rem' },
              height: { xs: '12rem', md: '15rem', lg: '20rem' },
              boxShadow: '0 1px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '50%',
              overflow: 'hidden',
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
        </Slide>
      </Box>
    </Box>
  )
}

export default Hero
