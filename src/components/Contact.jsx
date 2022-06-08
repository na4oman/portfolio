import React, { useState, useEffect } from 'react'
import {
  Box,
  Button,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material'
import Image from 'next/image'

import Link from '../Link'
import addressPicture from '../../public/images/contact/address4.png'
import Copyright from '../Copyright'
import Mapbox from './Mapbox'
import Alert from '@mui/material/Alert'
import AlertTitle from '@mui/material/AlertTitle'

const defaultFormFields = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const Contact = React.forwardRef((props, ref) => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { name, email, subject, message } = formFields
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMessage(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [showMessage])

  const changeHandler = event => {
    const { name, value } = event.target

    setFormFields({ ...formFields, [name]: value })
  }

  const resetFormFields = () => setFormFields(defaultFormFields)

  const submitHandler = event => {
    event.preventDefault()
    // const formData = new FormData(event.currentTarget)
    // const name = formData.get('name')
    // const email = formData.get('email')
    // const subject = formData.get('subject')
    // const message = formData.get('message')

    // const newFormData = {
    //   name,
    //   email,
    //   subject,
    //   message,
    // }

    fetch(`/api/messages`, {
      method: 'POST',
      body: JSON.stringify(formFields),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(data => {
        console.log(data)
        setShowMessage(true)
        resetFormFields()
      })
      .catch(error => {
        console.log(error.message || 'Something went wrong')
      })
  }

  return (
    <Box ref={ref} component='section' px={{ xs: 2, lg: 5 }}>
      <Box>
        {showMessage && (
          <Alert variant='filled' severity='success' color='secondary'>
            <AlertTitle>Success</AlertTitle>
            Your message was successfully sent.
          </Alert>
        )}
      </Box>
      <Box
        component='div'
        sx={{
          mt: 2,
          mb: 5,
          // px: 5,
          '& .MuiTextField-root': {
            m: 0.5,
            // width: { xs: 'calc(100% - 0.5rem)', sm: 'calc(50% - 0.5rem)' },
          },
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: 1,
        }}
        noValidate
        autoComplete='off'
        width='100%'
      >
        <Box mb={5}>
          <Typography
            component='h2'
            variant='h2'
            color='secondary'
            mb={2}
            pl={1}
            fontFamily='Shadows Into Light'
          >
            Let's chat!
          </Typography>
          <Typography paragraph variant='body1' color='primary' mb={2} pl={1}>
            Want to get in touch? Whether you're interested in working on a
            project together or just want to say hello, feel free to leave me a
            message and I'll get back to you as soon as I can! You can also
            check out my social links in the footer of the sidebar to get in
            touch that way.
          </Typography>
          <Box
            component='form'
            onSubmit={submitHandler}
            sx={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                '& .MuiTextField-root': {
                  width: {
                    xs: 'calc(100% - 0.5rem)',
                    sm: 'calc(50% - 0.5rem)',
                  },
                },
              }}
            >
              <TextField
                id='name'
                name='name'
                value={name}
                onChange={changeHandler}
                label='Full Name'
                type='text'
                color='secondary'
                border='white'
                variant='filled'
                required
                sx={{
                  color: '#a5a5a5',
                  backgroundColor: theme => theme.palette.background.light,
                }}
              />
              <TextField
                id='email'
                name='email'
                value={email}
                onChange={changeHandler}
                label='Email'
                type='email'
                variant='filled'
                color='secondary'
                required
                sx={{
                  color: '#a5a5a5',
                  backgroundColor: theme => theme.palette.background.light,
                }}
              />
            </Box>
            <Box
              sx={{
                '& .MuiTextField-root': { width: 'calc(100% - 0.5rem)' },
              }}
            >
              <TextField
                id='subject'
                name='subject'
                value={subject}
                onChange={changeHandler}
                label='Subject'
                type='text'
                variant='filled'
                color='secondary'
                required
                sx={{
                  color: '#a5a5a5',
                  backgroundColor: theme => theme.palette.background.light,
                }}
              />
            </Box>
            <Box
              sx={{
                '& .MuiTextField-root': { width: 'calc(100% - 0.5rem)' },
              }}
            >
              <TextField
                id='message'
                name='message'
                value={message}
                onChange={changeHandler}
                label='Message'
                type='text'
                variant='filled'
                color='secondary'
                multiline
                required
                rows={6}
                sx={{
                  color: '#a5a5a5',
                  backgroundColor: theme => theme.palette.background.light,
                }}
              />
            </Box>
            <Box pl={1}>
              <Button
                type='submit'
                sx={{
                  color: theme => theme.palette.secondary.main,
                  // display: { xs: 'block', sm: 'inline-block' },
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
                Send message!
              </Button>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            minWidth: '50%',
          }}
        >
          {/* <Image src={addressPicture} /> */}
          <Mapbox />
          {/* GOOGLE MAPS */}
          {/* <iframe
            src='https://snazzymaps.com/embed/397127'
            width='100%'
            height='500px'
            frameBorder='none'
          ></iframe> */}
        </Box>
      </Box>
      <Box mb={5}>
        <Copyright />
      </Box>
    </Box>
  )
})

export default Contact
