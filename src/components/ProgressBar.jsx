import * as React from 'react'
import Box from '@mui/material/Box'
import LinearProgress from '@mui/material/LinearProgress'
import Typography from '@mui/material/Typography'

const ProgressBar = ({ progress, setProgress, setShowProgress }) => {
  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress(oldProgress => {
        if (oldProgress === 100) {
          setShowProgress(false)
          return
        }
        const diff = Math.random() * 100
        return Math.min(oldProgress + diff, 100)
      })
    }, 500)

    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Box
      sx={{
        width: '100vw',
        height: '100vh',
        paddingTop: 38,
        paddingX: { xs: 5, sm: 15, md: 20, lg: 40 },
        textAlign: 'center',
      }}
    >
      <Typography component='h2' variant='h6' mb={2}>
        Atanas is thinking...
      </Typography>
      <LinearProgress
        color='secondary'
        variant='determinate'
        value={progress}
      />
    </Box>
  )
}

export default ProgressBar
