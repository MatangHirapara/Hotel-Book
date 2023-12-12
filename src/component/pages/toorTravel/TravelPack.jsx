import React, { useState, useContext, useEffect } from 'react'
import "./travel.css"
import PoolIcon from '@mui/icons-material/Pool';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CellWifiIcon from '@mui/icons-material/CellWifi';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Button } from '@mui/material';
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
import toorData from "./toorData.json"
import { incnotify, email } from '../../../redux/notify/notifyaction';
import { useDispatch } from 'react-redux';

const TravelPack = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('Reserv')
  const [record, setRecord] = useState({})

  const { id } = useParams();

  const notifi = (rec) => {

      alert("Congratulations! You Rooms has been booked successfully ")
      dispatch(email(rec))
      setName("Reserved")
      dispatch(incnotify())
  }

  useEffect(() => {
    const data = toorData.find((e) => {
      return e.id === id
    })
    setRecord(data)
  }, [id])

  const bookNow = (e) => {
    alert("Congratulations! You Rooms has been booked successfully ")
    setName("Reserved")

    // toorData = ((e) => {
    //   return e.id !== id
    // })
  }

  return (
    <div className='travelPackage' >
      <div className='travel' >
        <div className='package' >
          <ul>
            <li>Info</li>
            <li>Facilities</li>
            <li>Rules</li>
            <li>The fine print</li>
            <li>Guest reviews (487)</li>
          </ul>
        </div>
        <div className='travelTitle' >
          <div className='title' >
            <p>{record.title}</p>
            <StarOutlineIcon className='starIcon' style={{ fontSize: "m-large", marginLeft: "1rem" }} />
            <StarOutlineIcon className='starIcon' />
            <StarOutlineIcon className='starIcon' />
            <StarOutlineIcon className='starIcon' />
            <StarOutlineIcon className='starIcon' />
            <LocationOnIcon style={{ marginLeft: "1rem", color: "blue" }} />
            <span>{record.name} Show-Map</span>
          </div>
          <div className='titleBtn' >
            <FavoriteBorderIcon style={{ marginRight: "1rem" }} />
            <ShareIcon style={{ marginRight: "1rem" }} />
            <Button className='btn' onClick={() => notifi(record)} >{name}</Button>
          </div>
        </div>
        <div className='travelImage' >
          <div className='image' >
            <img src={record.room} alt="" />
            <img src={record.room1} alt="" style={{ marginTop: "0.5rem" }} />
          </div>
          <img src={record.room2} alt="" />
        </div>
        <div className='travelFacility' >
          <div className='facility' >
            <PoolIcon style={{ fontSize: "xx-large" }} />
            <p>Outdoor pool</p>
          </div>
          <div className='facility' >
            <CellWifiIcon style={{ fontSize: "xx-large" }} />
            <p>Free WiFi</p>
          </div>
          <div className='facility' >
            <LocalParkingIcon style={{ fontSize: "xx-large" }} />
            <p>Free paking</p>
          </div>
          <div className='facility' >
            <AcUnitIcon style={{ fontSize: "xx-large" }} />
            <p>Air condition</p>
          </div>
          <div className='facility' >
            <AccessTimeIcon style={{ fontSize: "xx-large" }} />
            <p>24-hour front desk</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TravelPack