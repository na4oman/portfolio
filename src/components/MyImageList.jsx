import * as React from 'react'
import Image from 'next/image'
import Dialog from '@mui/material/Dialog'
import { Box, Grid } from '@mui/material'

const defaultImageSrcset = '/images/certificates/html-css.jpg'

export default function MyImageList() {
  const [open, setOpen] = React.useState(false)
  const [imgSrcset, setImgSrcset] = React.useState(defaultImageSrcset)

  const handleClickOpen = e => {
    setOpen(true)
    setImgSrcset(e.target.srcset)
  }

  const handleClose = () => {
    setOpen(false)
    setImgSrcset(defaultImageSrcset)
  }

  return (
    <>
      <Grid
        container
        spacing={1}
        flexDirection={{ xs: 'column', sm: 'row' }}
        justifyContent='center'
        alignItems='center'
      >
        {itemData.map(item => (
          <Grid
            item
            key={item.title}
            xs={12}
            sm={6}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
              srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading='lazy'
              onClick={handleClickOpen}
              width={250}
            />
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{
          width: '100%',
          height: '100%',
        }}
      >
        <Image
          // src='/images/certificates/javascript.jpg'
          src={imgSrcset}
          alt={imgSrcset}
          width={900}
          height={600}
          // layout='fill'
          // objectFit='cover'
          // objectPosition='center'
          priority
        />
      </Dialog>
    </>
  )
}

const itemData = [
  {
    img: '/images/certificates/html-css.jpg',
    title: 'HTML and CSS Certificate',
    link: 'https://www.udemy.com/certificate/UC-2f91b68d-2672-42ef-91c0-90699ee26fda/',
  },
  {
    img: '/images/certificates/javascript.jpg',
    title: 'Javascript Certificate',
    link: 'https://www.udemy.com/certificate/UC-874df15a-06a2-4306-9140-032243f80185/',
  },
  {
    img: '/images/certificates/web-developer-bootcamp.jpg',
    title: 'Web Developer Bootcamp Certificate',
    link: 'https://www.udemy.com/certificate/UC-18PCWUHV/',
  },
  {
    img: '/images/certificates/men.jpg',
    title: 'MEN Stack Certificate',
    link: 'https://www.udemy.com/certificate/UC-e13f51b0-20c4-4cf8-a0b5-f3a24d7f91e8/',
  },
  {
    img: '/images/certificates/mern.jpg',
    title: 'MERN Stack Certificate',
    link: 'https://www.udemy.com/certificate/UC-825dd5a7-d4d0-4e59-bd8d-ded4707f4ea0/',
  },
  {
    img: '/images/certificates/react.jpg',
    title: 'React Certificate',
    link: 'https://www.udemy.com/certificate/UC-aeac320d-993d-43f1-b39e-e8d7857e1a83/',
  },
]
