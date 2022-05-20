import React from 'react'
import Box from '@mui/material/Box'
import Logo from './Logo'
import Nav from './Nav'
import SocialMedia from './SocialMedia'

const Sidebar = () => {
  return (
    <Box
      component='header'
      position='fixed'
      width='9rem'
      margin={0}
      p={0}
      flex={1}
      backgroundColor='background.default'
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Logo />
      <Nav />
      <SocialMedia />
    </Box>
  )
}

export default Sidebar
