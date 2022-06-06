import React, { useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box'
import Logo from './Logo'
import Nav from './Nav'
import SocialMedia from './SocialMedia'
import { Slide } from '@mui/material'

const SidebarMobile = ({ onClickHanle }) => {
  const [shown, setShown] = useState(false)
  const containerRef = useRef(null)

  const clickHandler = index => onClickHanle(index)

  useEffect(() => {
    setShown(true)
  }, [])

  return (
    <Slide
      direction='down'
      in={shown}
      container={containerRef.current}
      timer={{
        enter: 1500,
        exit: 5000,
      }}
      timeout={1500}
      easing={{
        enter: 'cubic-bezier(0, 1.3, .8, 1)',
        // exit: 'linear',
        exit: 'cubic-bezier(0, 1.3, .8, 1)',
      }}
    >
      <Box
        component='header'
        position='fixed'
        width='100%'
        margin={0}
        p={0}
        backgroundColor='background.default'
        sx={{
          paddingTop: '20px',
          height: '100vh',
          display: { xs: 'flex', md: 'none' },
          flexDirection: 'column',
          justifyContent: 'space-around',
        }}
        zIndex={100}
        ref={containerRef}
      >
        <Logo />
        <Nav onHandleClick={clickHandler} />
        <SocialMedia />
      </Box>
    </Slide>
  )
}

export default SidebarMobile
