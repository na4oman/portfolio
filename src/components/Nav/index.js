import React from 'react'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/system'

const MyListItem = styled(ListItem)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignContent: 'center',
  alignItems: 'center',
  paddingLeft: 0,
  paddingRight: 0,
}))

export default function Nav() {
  const [selectedIndex, setSelectedIndex] = React.useState(1)
  const handleListItemClick = index => {
    setSelectedIndex(index)
  }

  const MyDivider = styled(Divider)(({ theme }) => ({
    backgroundColor: theme.palette.grey[800],
  }))

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
    >
      <List
        sx={{
          color: theme => theme.palette.grey[500],
          // selected and (selected + hover) states
          '&& .Mui-selected, && .Mui-selected:hover': {
            color: 'info.main',
          },
          // hover states
          '& .MuiListItemButton-root:hover': {
            color: 'info.main',
          },
        }}
      >
        <MyDivider />
        <MyListItem>
          <ListItemButton
            sx={{ padding: '2px 0' }}
            selected={selectedIndex === 0}
            onClick={() => handleListItemClick(0)}
          >
            <ListItemText primary='About' />
          </ListItemButton>
        </MyListItem>
        <MyDivider />
        <MyListItem>
          <ListItemButton
            sx={{ padding: '2px 0' }}
            selected={selectedIndex === 1}
            onClick={() => handleListItemClick(1)}
          >
            <ListItemText primary='My Skills' />
          </ListItemButton>
        </MyListItem>
        <MyDivider />
        <MyListItem>
          <ListItemButton
            sx={{ padding: '2px 0' }}
            selected={selectedIndex === 2}
            onClick={() => handleListItemClick(2)}
          >
            <ListItemText primary='Work' />
          </ListItemButton>
        </MyListItem>
        <MyDivider />
        <MyListItem>
          <ListItemButton
            sx={{ padding: '2px 0' }}
            selected={selectedIndex === 3}
            onClick={() => handleListItemClick(3)}
          >
            <ListItemText primary='Contact' />
          </ListItemButton>
        </MyListItem>
        <MyDivider />
      </List>
    </Box>
  )
}
