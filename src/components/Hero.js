import React, { useState, useEffect, useRef } from 'react'
import { Box, Button, Slide, Stack, Typography } from '@mui/material'
import Image from 'next/image'
// import profilePic from '../../public/images/profile/atanas.jpg'
import profilePic2 from '../../public/images/profile/atanas2.jpg'
import Link from '../Link'

export default function Hero() {
  const [shown, setShown] = useState(false)
  const imageContainerRef = useRef(null)
  const textHiRef = useRef(null)

  useEffect(() => {
    setShown(true)
  }, [])

  return (
    <Box
      component='section'
      bgcolor='background.default'
      color='text.secondary.main'
      paddingX={15}
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      ref={textHiRef}
    >
      <Slide
        direction='right'
        in={shown}
        container={textHiRef.current}
        timeout={2000}
        easing={{
          enter: 'cubic-bezier(0, 1.5, .8, 1)',
          exit: 'linear',
        }}
      >
        <Box
          aria-label='text-zone'
          flexGrow={1}
          // bgcolor='lightblue'
          // sx={{
          //   display: 'flex',
          //   alignItems: 'center',
          //   justifyContent: 'center',
          // }}
        >
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
              lineHeight: '7rem',
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
                  color: theme => theme.palette.info.main,
                  WebkitTextFillColor: 'initial',
                  fontSize: '8rem',
                  '&::before': {
                    content: '"A"',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 8,
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
            Full Stack Developer
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
            JavaScript / NextJS / NodeJS / Express / MongoDB
          </Typography>
          <Box>
            <Link
              href='/contact'
              sx={{
                color: theme => theme.palette.info.main,
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
                  background: theme => theme.palette.info.main,
                  color: '#1d1d1d',
                  border: '1px solid #1d1d1d',
                },
              }}
            >
              Contact me!
            </Link>
          </Box>
        </Box>
      </Slide>
      <Box
        sx={{
          display: 'flex',
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
            flexGrow={1}
            sx={{
              width: '20rem',
              height: '20rem',
              boxShadow: '0 1px 8px rgba(0, 0, 0, 0.2)',
              borderRadius: '50%',
              overflow: 'hidden',
              marginRight: '5rem',
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
