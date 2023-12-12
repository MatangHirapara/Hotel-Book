import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./topbar.css";
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { Link, useNavigate } from 'react-router-dom';
import { decnotify } from '../../redux/notify/notifyaction';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';

export default function Setting() {
  const notify = useSelector((state) => state.notify)
  const navigate = useNavigate()

  const dispatch = useDispatch()
  const none = () => {
    navigate('/email')
    if (notify <= 0) {
      return state.notify = 0
    }
    else {
      state.notify -= 1
    }
    dispatch(decnotify())
  }
  const [state, setState] = React.useState({});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Button>
      <Box
        sx={{ width: anchor === 'right' || anchor === 'left' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >

        <List>
          {['Inbox'].map((text, index) => (
            <ListItem key={index} onClick={none}>
              <ListItemIcon >
                <Badge color="error"  >
                  <InboxIcon />
                </Badge>
              </ListItemIcon>
              <ListItemText primary={text} sx={{ listStyleType: 'none', color: 'black' }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Button>
  );

  return (
    <div>
      <Badge badgeContent={notify} color="error">
        <NotificationsIcon onClick={toggleDrawer("right", true)} />
      </Badge>
      <Drawer
        anchor={"right"}
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list()}
      </Drawer>


    </div>
  );
}