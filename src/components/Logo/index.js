import { Box, Stack, Typography } from '@mui/material'

export default function Logo() {
  return (
    <Box textAlign='center'>
      <Stack justifyContent='center' direction='row' sx={{ fontWeight: 800 }}>
        <Typography
          variant='h1'
          component='span'
          color='info.main'
          sx={{ fontWeight: 500, transform: 'translateX(28px)' }}
        >
          A
        </Typography>
        <Typography
          variant='h1'
          component='span'
          color='error.main'
          sx={{ fontWeight: 500, transform: 'translateX(-27px)' }}
        >
          A
        </Typography>
      </Stack>
      <Typography
        color='common.white'
        variant='h5'
        component='p'
        mt={-2}
        mb={1}
        sx={{ fontWeight: 600 }}
      >
        Atanas
      </Typography>
      <Typography
        variant='body3'
        component='p'
        sx={{ fontWeight: 300, color: theme => theme.palette.grey[500] }}
      >
        Web Developer
      </Typography>
    </Box>
  )
}
