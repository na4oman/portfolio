import React from 'react'
import { Box, Typography } from '@mui/material'

const About = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref} component='section' mx='15%' mb={20}>
      <Typography
        component='h2'
        variant='h2'
        color='secondary'
        textAlign='center'
        mb={5}
      >
        About me
      </Typography>
      <Typography paragraph color='dark_grey.main'>
        More than three years ago, I first stumbled upon the term "web
        development," and that's when it all changed. I've started looking
        deeper into it, bought my first Udemy course and started watching
        YouTube videos about programming. As soon as I completed HTML and CSS
        part of the course and started Javascript, the fun started.
      </Typography>
      <Typography paragraph color='dark_grey.main'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        rerum fuga quos maxime. Quae, voluptas incidunt? Aliquid hic inventore
        eum illum nulla error! Velit, magni temporibus adipisci iure quibusdam
        tenetur. Cum fugit quae hic nisi placeat, id natus ipsa corrupti odio,
        quidem sequi corporis tenetur itaque libero rerum sunt expedita
        architecto, eligendi nesciunt! Beatae, animi adipisci magni id molestiae
        velit?
      </Typography>
      <Typography paragraph color='dark_grey.main'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        rerum fuga quos maxime. Quae, voluptas incidunt? Aliquid hic inventore
        eum illum nulla error! Velit, magni temporibus adipisci iure quibusdam
        tenetur. Cum fugit quae hic nisi placeat, id natus ipsa corrupti odio,
        quidem sequi corporis tenetur itaque libero rerum sunt expedita
        architecto, eligendi nesciunt! Beatae, animi adipisci magni id molestiae
        velit?
      </Typography>
    </Box>
  )
})

export default About
