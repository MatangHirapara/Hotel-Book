import React, { Component } from 'react'
import "./topbar.css"
import { useNavigate } from 'react-router-dom';
import HotelIcon from '@mui/icons-material/Hotel';
import image_1 from "../images/flag.png"
import Setting from './Setting';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Avatar from '@mui/material/Avatar';
import LuggageIcon from '@mui/icons-material/Luggage';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import AttractionsIcon from '@mui/icons-material/Attractions';
import HailIcon from '@mui/icons-material/Hail';
import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material';

const settings = ['Profile', 'Logout'];
const Topbar = ({props}) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const stay = (key) => {
    navigate(key)
  }

  const handleOpenUserMenu = (e) => { 
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout = () => {
    navigate('/')
    props.removeDatas();
    localStorage.removeItem("select_tab");
  }
  
  return (
    <>
      <div className='topbar' id='bgColor'>
        <div className='topbarWrapper'>
          <div className='topLeft'>
            <span className='logo'  >Bokking<span style={{ color: "lawngreen" }} >.com</span></span>
          </div>
          <div className='topRight'>
            <div className='topbarIconContainer' id='logo' >
              <span className='topIconBadge' >INR</span>
            </div>
            <div className='topbarIconContainer' id='logo' >
              <img src={image_1} alt="" className='topbarflag' />
            </div>
            <div className="topbarIconContainer" >
              <Setting />
            </div>
            <div className="topbarIconContainer" >
              <button className='topbarbtn' >List Your Property</button>
            </div>
            <div>
              {/* <Avatar style={{ color: "blue" }} >M</Avatar> */}
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={(event) => handleOpenUserMenu(event)} sx={{ p: 0 }}>
                    <Avatar className='avtarText' sx={{textTransform: 'capitalize'}} alt={props.tokens.username} src='image.jpg' />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting) => (
                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                      <Typography onClick={logout} textAlign="center">{setting}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </div>
          </div>
        </div>
        <div className='topbarWrapper'>
          <div className='topbottom'>
            <ul>
              <li><HotelIcon /><a onClick={()=>stay('/')} href='' >Stays</a></li>
              <li><FlightTakeoffIcon /><a onClick={()=>stay('/flight')} href='' >Flight</a></li>
              <li><LuggageIcon /><a href='' >Flight + Hotel</a></li>
              <li><DirectionsCarIcon /><a onClick={()=>stay('/car')} href='' >Car rental</a></li>
              <li><AttractionsIcon /><a onClick={()=>stay('/attrection')} href='' >Attrection</a></li>
              <li><HailIcon /><a href='' >Airpot Taxis</a></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default Topbar;