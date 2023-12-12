import React, { Component, useState } from 'react'
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
import { AppBar, Box, IconButton, Menu, MenuItem, Tab, Tabs, Tooltip, Typography } from '@mui/material';

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
const settings = ['Profile', 'Logout'];
const Topbar = ({ props }) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open settings">
                  <IconButton onClick={(event) => handleOpenUserMenu(event)} sx={{ p: 0 }}>
                    <Avatar className='avtarText' sx={{ textTransform: 'capitalize' }} alt={props.tokens.username} src='image.jpg' />
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
        <div className='topbarWrapper' style={{ marginTop: '1.5rem' }}>
          <div className='topbottom'>
            <AppBar position="static" className='AppBarTab'>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="inherit"
                variant="fullWidth"
                sx={{ display: 'flex' }}
                aria-label="full width tabs example"
              >
                <div style={{ marginRight: '-2rem' }}><HotelIcon /></div><Tab className='TabLabelName' label="Stays" onClick={() => stay('/')} {...a11yProps(0)} />
                <div style={{ marginRight: '-2rem' }}><FlightTakeoffIcon /></div><Tab label="Flight" className='TabLabelName' {...a11yProps(1)} onClick={() => stay('/flight')} />
                <div style={{ marginRight: '-0.5rem'}}><LuggageIcon /></div><Tab label="Flight + Hotel" className='TabLabelName' {...a11yProps(2)} />
                <div style={{ marginRight: '-1rem' }}><DirectionsCarIcon /></div><Tab label="Car Rental" className='TabLabelName' {...a11yProps(3)} onClick={() => stay('/car')} />
                <div style={{ marginRight: '-1rem' }}><AttractionsIcon /></div><Tab label="Attrection" className='TabLabelName' {...a11yProps(4)} onClick={() => stay('/attrection')} />
                <div style={{ marginRight: '-1rem' }}><HailIcon /></div><Tab label="Airpot Taxis" className='TabLabelName' {...a11yProps(5)} />
              </Tabs>
            </AppBar>
          </div>
        </div>
      </div>
    </>
  )
}
export default Topbar;