import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./topbar.css";
import { useSelector } from 'react-redux';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { decnotify } from '../../redux/notify/notifyaction';
import { useDispatch } from 'react-redux';

export default function Setting() {
  const notify = useSelector((state) => state.notify)
  const dispatch = useDispatch()
  const none = () => {
    if(state.notify <= 0){
      state.notify = 0
    }
    else{
      state.notify -= 1
    }
      dispatch(decnotify())
  }
  const [state, setState] = React.useState({
    
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'right' || anchor === 'left' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >


      {/* <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
      {/* <Divider /> */}

      
      <List>
        {['Inbox'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <Badge badgeContent={notify} color="error" >
                <Link to="/email" onClick={none} >
                  <InboxIcon /> 
                </Link>
              </Badge>
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
          <Badge badgeContent={notify} color="error">
            <NotificationsIcon onClick={toggleDrawer("right", true)}/>
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