import * as React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import Sidebar from '../src/components/Sidebar'
import Hero from '../src/components/Hero'
import Work from '../src/components/Work'
import Skills from '../src/components/Skills'
import Contact from '../src/components/Contact'

export default function Index() {
  return (
    <Stack direction='row'>
      <Sidebar />
      <Box flex={11} marginLeft='9rem'>
        <main>
          <Hero />
          <Skills />
          <Work />
          <Contact />
        </main>
      </Box>
    </Stack>
  )
}
