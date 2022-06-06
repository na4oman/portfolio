import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import CloseIcon from '@mui/icons-material/Close'
import { Stack } from '@mui/material'

export default function TopAppBar({ onClickHandler, openIcon }) {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'visible', md: 'none' },
        '& .MuiToolbar-root': {
          backgroundColor: 'background.default',
          color: 'secondary.main',
        },
      }}
    >
      <AppBar position='fixed'>
        <Toolbar>
          <Stack
            component='div'
            sx={{ flexGrow: 1 }}
            justifyContent='flex-start'
            direction='row'
          >
            <Typography
              variant='h3'
              component='span'
              color='secondary.main'
              sx={{ fontWeight: 500, transform: 'translateX(28px)' }}
            >
              A
            </Typography>
            <Typography
              variant='h3'
              component='span'
              color='error.main'
              sx={{ fontWeight: 500, transform: 'translateX(0)' }}
            >
              A
            </Typography>
          </Stack>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={onClickHandler}
          >
            {openIcon ? (
              <CloseIcon fontSize='large' />
            ) : (
              <MenuIcon fontSize='large' />
            )}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
