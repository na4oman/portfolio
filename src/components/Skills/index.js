import { Box, Grid, Icon, SvgIcon, Typography } from '@mui/material'
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
  SiSass,
  SiHeroku,
  SiVercel,
  SiNetlify,
} from 'react-icons/si'
import { FaSass } from 'react-icons/fa'
import { IconContext } from 'react-icons'

export default function Skills() {
  return (
    <Box mb={20} px={25}>
      <Typography
        component='h2'
        variant='h3'
        mb={10}
        textAlign='center'
        bgcolor='background.default'
        sx={{
          color: theme => theme.palette.info.main,
          // height: '100vh',
        }}
      >
        My Skills
      </Typography>
      <Grid container spacing={5}>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#e75212',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiHtml5 />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#2965f1',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiCss3 />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#c76494',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <FaSass />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#61dbfb',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiReact />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: 'white',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiNextdotjs />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#00ed64',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiMongodb />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: 'white',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiExpress />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#f7e018',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiJavascript />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#689f63',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiNodedotjs />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#00b0ff',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiMaterialui />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#7a09f7',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiBootstrap />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#ff6c37',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiPostman />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: 'white',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiGithub />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#f05033',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiGit />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#ffcb2c',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiFirebase />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#7f56c3',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiHeroku />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: 'white',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiVercel />
            </Box>
          </IconContext.Provider>
        </Grid>
        <Grid item>
          <IconContext.Provider
            value={{
              color: '#3aafbc',
              style: { fontSize: '7rem' },
            }}
          >
            <Box>
              <SiNetlify />
            </Box>
          </IconContext.Provider>
        </Grid>
      </Grid>
    </Box>
  )
}
