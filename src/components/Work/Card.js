import * as React from 'react'
import { styled } from '@mui/material/styles'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Collapse from '@mui/material/Collapse'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import projectImage from '../../../public/images/projects/project1.avif'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from '../../Link'
import CodeIcon from '@mui/icons-material/Code'
import LinkIcon from '@mui/icons-material/Link'
import { NearMeDisabledSharp } from '@mui/icons-material'
import { maxWidth } from '@mui/system'

const ExpandMore = styled(props => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export default function RecipeReviewCard({ project }) {
  const [expanded, setExpanded] = React.useState(false)

  const {
    codeLink,
    description,
    id,
    image,
    demoLink,
    title,
    summary,
    technologies,
  } = project

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card
      sx={{
        maxWidth: 300,
        color: 'primary.main',
        transition: 'all 0.2s ease-in',
        '&:hover': { transform: 'translateY(-5px)' },
      }}
    >
      <CardMedia
        sx={{
          width: '25rem',
          height: '10rem',
          boxShadow: '0 1px 8px rgba(0, 0, 0, 0.2)',
          overflow: 'hidden',
          marginRight: '5rem',
        }}
      >
        <Image
          src={image}
          alt={title}
          width={320}
          height={180}
          objectFit='cover'
          objectPosition='top'
        />
      </CardMedia>
      <CardHeader title={title} subheader={technologies} />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          {summary}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          aria-label='view project live'
          onClick={() => window.open(demoLink, '_ blank')}
        >
          <LinkIcon />
        </IconButton>
        <IconButton
          aria-label='view source code'
          onClick={() => window.open(codeLink, '_ blank')}
        >
          <CodeIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label='show more'
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>{description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  )
}
