import { Box, Grid, Typography } from '@mui/material'
import Card from './Card'
import { projects } from '../../../data'

export default function Work() {
  return (
    <Box
      mt={10}
      mb={10}
      px={20}
      bgcolor='background.default'
      sx={{
        color: theme => theme.palette.grey[300],
      }}
    >
      <Typography
        textAlign='center'
        component='h2'
        variant='h3'
        color='info.main'
      >
        My Projects
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          marginTop: '3rem',
          marginLeft: '3rem',
        }}
      >
        {projects.map(project => (
          <Grid item key={project.id}>
            <Card project={project} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
