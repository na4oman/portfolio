import React from 'react'
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'

export default function SocialMedia() {
  const [selectedIndex, setSelectedIndex] = React.useState(1)

  const handleListItemClick = index => {
    const links = [
      'https://www.linkedin.com/in/atanas-irikev-1247051b3/',
      'https://github.com/na4oman',
      'https://www.instagram.com/atanasirikev/',
    ]
    window.open(links[index], '_blank')
  }

  return (
    <List
      sx={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        // color: theme => theme.palette.grey[500],
        // selected and (selected + hover) states
        '&& .Mui-selected, && .Mui-selected:hover': {
          // color: 'info.main',
          color: theme => theme.palette.secondary.main,
          backgroundColor: 'inherit',
        },
        // hover states
        '& .MuiListItemButton-root:hover': {
          color: 'secondary.main',
          backgroundColor: 'inherit',
        },
        '& .MuiSvgIcon-root:hover': {
          color: 'secondary.main',
          backgroundColor: 'inherit',
        },
        '& .MuiListItem-root': {
          width: 'auto',
        },
      }}
    >
      <ListItem>
        <ListItemButton
          sx={{ padding: 0 }}
          selected={selectedIndex === 0}
          onClick={() => handleListItemClick(0)}
        >
          <ListItemIcon sx={{ minWidth: 0 }}>
            <LinkedInIcon
              fontSize='small'
              sx={{ color: theme => theme.palette.grey[500] }}
              p={0}
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          sx={{ padding: 0 }}
          selected={selectedIndex === 1}
          onClick={() => handleListItemClick(1)}
        >
          <ListItemIcon sx={{ minWidth: 0 }}>
            <GitHubIcon
              fontSize='small'
              sx={{ color: theme => theme.palette.grey[500] }}
              p={0}
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      <ListItem>
        <ListItemButton
          sx={{ padding: 0 }}
          selected={selectedIndex === 2}
          onClick={() => handleListItemClick(2)}
        >
          <ListItemIcon sx={{ minWidth: 0 }}>
            <InstagramIcon
              fontSize='small'
              sx={{ color: theme => theme.palette.grey[500] }}
              p={0}
            />
          </ListItemIcon>
        </ListItemButton>
      </ListItem>
      {/* <ListItem>
          <ListItemButton
            sx={{ padding: 0 }}
            selected={selectedIndex === 3}
            onClick={() => handleListItemClick(3)}
          >
            <ListItemIcon sx={{ minWidth: 0 }}>
              <FacebookIcon
                color='info'
                fontSize='small'
                sx={{ color: theme => theme.palette.grey[500] }}
              />
            </ListItemIcon>
          </ListItemButton>
        </ListItem> */}
    </List>
  )
}
