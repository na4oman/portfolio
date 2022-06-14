import React from 'react'
import { Box, Fade, Grid, Typography } from '@mui/material'
import Card from './Card'
import { projects } from '../../data'

const Work = React.forwardRef((props, ref) => {
  return (
    <Box
      component='section'
      ref={ref}
      my={10}
      px={{ xs: 2, lg: 5 }}
      bgcolor='background.default'
      // color='secondary'
      // bgcolor='red'
      sx={{
        color: theme => theme.palette.grey[300],
      }}
    >
      <Typography
        textAlign='center'
        component='h2'
        variant='h2'
        color='secondary'
        fontFamily='Shadows Into Light'
      >
        My Projects
      </Typography>
      <Grid
        container
        rowSpacing={5}
        columnSpacing={1}
        sx={{
          marginTop: '1rem',
          justifyContent: 'center',
        }}
      >
        {projects.map(project => (
          <Grid
            item
            xs='auto'
            sm={6}
            lg={4}
            key={project.id}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Card project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
})

export default Work
