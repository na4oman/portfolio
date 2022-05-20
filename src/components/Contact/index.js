import { Box, TextareaAutosize, TextField, Typography } from '@mui/material'

export default function Contact() {
  return (
    <Box
      component='form'
      sx={{
        m: 10,
        p: 10,
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <Typography component='h3' variant='h4' color='info.main'>
        Contact me
      </Typography>
      <Box mb={1} width={1000}>
        <TextField
          id='standard-text-input'
          label='Name'
          type='text'
          variant='standard'
          color='info'
          border='white'
          sx={{
            color: '#a5a5a5',
            // backgroundColor: theme => theme.palette.background.light,
          }}
        />
        <TextField
          id='standard-email-input'
          label='Email'
          type='email'
          variant='standard'
          color='info'
          sx={{ color: '#a5a5a5' }}
        />
      </Box>
      <Box width={500} color='white'>
        <TextField
          id='standard-subject-input'
          label='Subject'
          type='text'
          variant='standard'
          color='info'
          size='large'
          sx={{
            color: '#696969',
            fontWeight: 300,
            // backgroundColor: theme => theme.palette.background.light,
            '& .MuiInputBase-input': {
              width: '100%',
              border: 0,
              fontSize: '1rem',
              fontWeight: 300,
              color: theme => theme.palette.text.secondary.main,
              padding: '0.5rem .8rem',
            },
          }}
        />
      </Box>
    </Box>
  )
}
