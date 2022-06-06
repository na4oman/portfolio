import * as React from 'react'
import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'

export default function Copyright() {
  return (
    <Typography variant='body2' color='primary.main' align='center'>
      {'Copyright © '} {new Date().getFullYear()} by{' '}
      <MuiLink color='inherit' href='/'>
        Atanas Irikev
      </MuiLink>
      . All rights reserved.
    </Typography>
  )
}
