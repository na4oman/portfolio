import React from 'react'
import Box from '@mui/material/Box'
import Logo from './Logo'
import Nav from './Nav'
import SocialMedia from './SocialMedia'
import { Button } from '@mui/material'

const Sidebar = ({ onClickHanle }) => {
  const clickHandler = index => onClickHanle(index)

  return (
    <Box
      component='section'
      position='fixed'
      width='9rem'
      margin={0}
      p={0}
      backgroundColor='background.default'
      sx={{
        height: '100vh',
        display: { xs: 'none', md: 'flex' },
        flexDirection: 'column',
        justifyContent: 'space-around',
      }}
    >
      <Logo />
      <Nav onHandleClick={clickHandler} />
      <SocialMedia />
    </Box>
  )
}

export default Sidebar
