import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider} from '@mui/material/styles';
import theme from './theme'
import Link from 'next/Link'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    console.log()
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link href="/">
          <ListItem key='Home' disablePadding>
            <ListItemButton>
              <ListItemIcon><HomeIcon /></ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
        </Link>
        <ListItem key='Contact' disablePadding>
            <ListItemButton>
              <ListItemIcon><MailIcon /></ListItemIcon>
              <ListItemText primary='Contact' />
            </ListItemButton>
          </ListItem>
          <ListItem key='About me' disablePadding>
            <ListItemButton>
              <ListItemIcon><AccountCircleIcon /></ListItemIcon>
              <ListItemText primary='About me' />
            </ListItemButton>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme = {theme}>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon sx={{ color: 'white' }} /></Button>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}> {list(anchor)}</Drawer>
        </React.Fragment>
      ))}
    </ThemeProvider>
  );
}
