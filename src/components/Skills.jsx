import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiMaterialui,
  SiBootstrap,
  SiPostman,
  SiGithub,
  SiGit,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiHeroku,
  SiVercel,
  SiNetlify,
} from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { IconContext } from 'react-icons'

const GridItem = ({ item, color }) => (
  <Grid item xs={4} sm={3} md={2}>
    <IconContext.Provider
      value={{
        color: color,
        style: { fontSize: '4rem' },
      }}
    >
      <Box>{item}</Box>
    </IconContext.Provider>
  </Grid>
)

const Skills = React.forwardRef((props, ref) => {
  return (
    <Box ref={ref} mb={20} px={{ xs: '10%', sm: '20%' }}>
      <Typography
        component='h2'
        variant='h2'
        mb={10}
        textAlign='center'
        bgcolor='background.default'
        color='secondary'
      >
        My Skills
      </Typography>
      <Grid container spacing={5}>
        <GridItem item={<SiHtml5 />} color='#e75212' />
        <GridItem item={<SiCss3 />} color='#2965f1' />
        <GridItem item={<FaSass />} color='#c76494' />
        <GridItem item={<SiReact />} color='#61dbfb' />
        <GridItem item={<SiNextdotjs />} color='#fff' />
        <GridItem item={<SiMongodb />} color='#00ed64' />
        <GridItem item={<SiExpress />} color='#fff' />
        <GridItem item={<SiJavascript />} color='#f7e018' />
        <GridItem item={<SiNodedotjs />} color='#83cd29' />
        <GridItem item={<SiMaterialui />} color='#00b0ff' />
        <GridItem item={<SiBootstrap />} color='#7a09f7' />
        <GridItem item={<SiPostman />} color='#ff6c37' />
        <GridItem item={<SiGithub />} color='#fff' />
        <GridItem item={<SiGit />} color='#f05033' />
        <GridItem item={<SiFirebase />} color='#ffcb2c' />
        <GridItem item={<SiHeroku />} color='#7f56c3' />
        <GridItem item={<SiVercel />} color='#fff' />
        <GridItem item={<SiNetlify />} color='#3aafbc' />
      </Grid>
    </Box>
  )
})

export default Skills
