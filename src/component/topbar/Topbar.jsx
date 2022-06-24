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

 const Topbar =()=> {
    const navigate = useNavigate();
    const stay = () => {
      navigate("/")
    }
    const flight = () => {
      navigate("/flight")
    }
    const car = () => {
      navigate("/car")
    }
    const attrect = () => {
      navigate("/attrection")
    }
    
  return (
    <>
      <div className='topbar' id='bgColor'>
        <div className='topbarWrapper'>
          <div className='topLeft'>
            <span className='logo'  >Bokking<span style={{color: "lawngreen"}} >.com</span></span>
            <div className='topbottom'>
              <ul>
                <li><HotelIcon /><a onClick={stay} href='' >Stays</a></li>
                <li><FlightTakeoffIcon/><a onClick={flight} href='' >Flight</a></li>
                <li><LuggageIcon/><a href='' >Flight + Hotel</a></li>
                <li><DirectionsCarIcon/><a onClick={car} href='' >Car rental</a></li>
                <li><AttractionsIcon/><a onClick={attrect} href='' >Attrection</a></li>
                <li><HailIcon/><a href='' >Airpot Taxis</a></li>
              </ul>
            </div>
          </div>
          <div className='topRight'>
            <div className='topbarIconContainer' id='logo' >
              <span className='topIconBadge' >INR</span>
            </div>
            <div className='topbarIconContainer' id='logo' >
              <img src={image_1} alt="" className='topbarflag' />
            </div>
            <div className="topbarIconContainer" >
              <Setting/>
            </div>
            <div className="topbarIconContainer" >
              <button className='topbarbtn' >List Your Property</button>
            </div>
            <div>
              <Avatar style={{color: "blue"}} >M</Avatar>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default Topbar;