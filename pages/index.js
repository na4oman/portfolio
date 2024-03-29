import * as React from 'react'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'

import Sidebar from '../src/components/Sidebar'
import Hero from '../src/components/Hero'
import Work from '../src/components/Work'
import Skills from '../src/components/Skills'
import Contact from '../src/components/Contact'
import AppbarMobile from '../src/components/AppbarMobile'
import SidebarMobile from '../src/components/SidebarMobile'
import About from '../src/components/About'
import { scrollTo } from '../src/animation/scrollTo'
import ProgressBar from '../src/components/ProgressBar'

export default function Index() {
  const [open, setOpen] = React.useState(false)
  const [openIcon, setOpenIcon] = React.useState(false)
  const aboutRef = React.useRef()
  const skillsRef = React.useRef()
  const workRef = React.useRef()
  const contactRef = React.useRef()
  const [showProgress, setShowProgress] = React.useState(true)
  const [progress, setProgress] = React.useState(0)

  const handleClick = () => {
    setOpen(prevState => !prevState)
    setOpenIcon(prevState => !prevState)
  }

  const refArr = [aboutRef, skillsRef, workRef, contactRef]

  function executeScroll(index) {
    // refArr[index].current.scrollIntoView()
    scrollTo({ ref: refArr[index] })
  }

  function executeScrollMobile(index) {
    handleClick()
    scrollTo({ ref: refArr[index] })
  }

  return (
    <>
      {showProgress && (
        <ProgressBar
          progress={progress}
          setProgress={setProgress}
          setShowProgress={setShowProgress}
        />
      )}
      {!showProgress && (
        <React.Fragment>
          <AppbarMobile onClickHandler={handleClick} openIcon={openIcon} />
          {open && (
            <SidebarMobile
              onClickHanle={executeScrollMobile}
              handleClick={handleClick}
            />
          )}
          <Sidebar onClickHanle={executeScroll} />
          <Box
            component='main'
            sx={{
              marginLeft: { xs: '0', md: '9rem' },
            }}
          >
            <Hero onClickHanle={executeScroll} />
            <About ref={aboutRef} />
            <Skills ref={skillsRef} />
            <Work ref={workRef} />
            <Contact ref={contactRef} />
          </Box>
        </React.Fragment>
      )}
    </>
  )
}
