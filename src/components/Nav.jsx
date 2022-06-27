import React, { useState, useRef, useEffect } from 'react'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'

import { styled } from '@mui/system'

const MyListItem = styled(ListItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  paddingLeft: 0,
  paddingRight: 0,
}))

export default function Nav({ onHandleClick }) {
  const [selectedIndex, setSelectedIndex] = React.useState(null)
  const [shown, setShown] = useState(false)
  const boxContainerRef = useRef(null)

  useEffect(() => {
    setShown(true)
  }, [])

  const handleListItemClick = index => {
    setSelectedIndex(index)
    onHandleClick(index)
  }

  const MyDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.grey[800],
  }))

  const MyListItemButton = ({ text, index }) => {
    return (
      <ListItemButton
        sx={{ padding: '2px 0' }}
        selected={selectedIndex === index}
        onClick={() => handleListItemClick(index)}
      >
        <ListItemText primary={text} />
      </ListItemButton>
    )
  }

  return (
    <Box
      component='nav'
      aria-label='main-nav'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
      }}
      ref={boxContainerRef}
    >
      <List
        sx={{
          color: theme => theme.palette.grey[500],
          // selected and (selected + hover) states
          '&& .Mui-selected, && .Mui-selected:hover': {
            color: 'secondary.main',
            backgroundColor: 'inherit',
          },
          // hover states
          '& .MuiListItemButton-root:hover': {
            color: 'secondary.main',
            backgroundColor: 'inherit',
          },
        }}
      >
        <MyDivider />
        <MyListItem>
          <MyListItemButton text='About' index={0} />
        </MyListItem>
        <MyDivider />
        <MyListItem>
          <MyListItemButton text='My Skills' index={1} />
        </MyListItem>
        <MyDivider />
        <MyListItem>
          <MyListItemButton text='Work' index={2} />
        </MyListItem>
        <MyDivider />
        <MyListItem>
          <MyListItemButton text='Contact' index={3} />
        </MyListItem>
        <MyDivider />
      </List>
    </Box>
  )
}
