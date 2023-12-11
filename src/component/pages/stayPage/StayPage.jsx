import React from 'react'

import { incNum, decNum } from '../../../redux/adults/action';
import { inccount, deccount } from '../../../redux/child/childaction';
import { incroom, decroom } from '../../../redux/room/roomaction';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import CloseIcon from '@mui/icons-material/Close';
import "../../counter/count.css"
import { Button } from "@mui/material";

import jorny_1 from "../../images/jorny-1.png"
import jorny_2 from "../../images/jorny-2.png"
import jorny_3 from "../../images/jorny-3.png"
import jorny_4 from "../../images/jorny-4.png"
import jorny_5 from "../../images/jorny-5.png"
import jorny_6 from "../../images/jorny-6.jpg"
import jorny_7 from "../../images/jorny-7.jpg"
import jorny_8 from "../../images/jorny-8.jpg"
import jorny_9 from "../../images/jorny-9.jpg"
import jorny_10 from "../../images/jorny-10.jpg"
import "./staypage.css"
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import HailIcon from '@mui/icons-material/Hail';
import AttractionsIcon from '@mui/icons-material/Attractions';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import SearchIcon from '@mui/icons-material/Search';

const StayPage = () => {

  // const navigate = useNavigate();
  // const mystate = useSelector((state) => state.change);
  // const mychild = useSelector((state) => state.child);
  // const myrooms = useSelector((state) => state.room);
  const dispatch = useDispatch();

  const close = () => {
    document.getElementById("mainDiv").style.display = "none";
  }
  const click = () => {
    document.getElementById("mainDiv").style.display = "block";
  }

  const top100Films = [
    { label: "Gujarat" },
    { label: "Delhi" },
    { label: "Pune" },
    { label: "Mumbai" },
    { label: "Odisha" },
    { label: "Karnatak" },
    { label: "Keral" },
    { label: "U.P" },
    { label: "M.P" },
  ]

  const navigate = useNavigate();

  const mystate = useSelector((state) => state.change);
  const mychild = useSelector((state) => state.child);
  const myrooms = useSelector((state) => state.room);

  const search = () => {
    navigate("/toor")
  }

  return (
    <>
      <div className='staypage' >
        <div className='staymain' >
          <div className='state'>
            <LocationCityIcon style={{ color: "grey" }} />
            <Stack className='stack' spacing={2} sx={{ width: 380 }} style={{ color: "black", display: "flex" }} >
              <Autocomplete style={{ background: 'white' }}
                id="free-solo-demo"
                freeSolo
                options={top100Films}
                renderInput={(params) => <TextField  {...params} label="Where are you going?" />}
              />
            </Stack>
          </div>
          <div className='state' style={{ display: "flex", width: "350px", alignItems: "center" }} >
            <CalendarMonthIcon style={{ color: "grey" }} />
            <div>
              <input type="date" placeholder='Select Date' style={{ border: "none", fontSize: "1rem" }} />
              <input type="date" style={{ border: "none", fontSize: "1rem" }} />
            </div>
          </div>
          <div className='state'>
            <div className='select' onClick={click} >
              <AccountBoxIcon style={{ fontSize: "xx-large", color: "grey" }} />
              <p>{mystate} : Adults,</p>
              <p>{mychild} : Children,</p>
              <p>{myrooms} : Rooms</p>
            </div>
          </div>
          <Button onClick={search} style={{ marginLeft: "1rem", fontSize: "18px", width: "255px", borderRadius: "5px", color: "white", backgroundColor: "#0077ff" }} ><SearchIcon /></Button>
        </div>
        <div id="mainDiv" style={{ width: "100%", height: "45vh" }} >
          <div className="fation" style={{ marginLeft: "79.5rem" }} ></div>
          <div className="counter" >
            <Button onClick={close} style={{ marginLeft: "10rem", color: "red", border: "2px solid black" }} >
              <CloseIcon />
            </Button>
            <div className="counterName" >
              <div>
                <p>Adults</p>
              </div>
              <div className="count">
                <button onClick={() => dispatch(incNum())}>+</button>
                <h3>{mystate}</h3>
                <button disabled={mystate > 0 ? false : true} onClick={() => dispatch(decNum())}>-</button>
              </div>
            </div>
            <div className="counterName" >
              <div>
                <p>Children</p>
              </div>
              <div className="count">
                <button onClick={() => dispatch(inccount())}>+</button>
                <h3>{mychild}</h3>
                <button disabled={mychild > 0 ? false : true} onClick={() => dispatch(deccount())}>-</button>
              </div>
            </div>
            <div className="counterName" >
              <div>
                <p>Rooms</p>
              </div>
              <div className="count">
                <button onClick={() => dispatch(incroom())}>+</button>
                <h3>{myrooms}</h3>
                <button disabled={myrooms > 0 ? false : true} onClick={() => dispatch(decroom())}>-</button>
              </div>
            </div>
          </div>
        </div>
        <div className='staywarn' id=''>
          <div className='warn' >
            <ReportGmailerrorredIcon style={{ padding: "7px", backgroundColor: "f06868", color: "red", border: '2px solid red' }} />
            <p>Get the advice you need. Check the latest COVID-19 restrictions before you travel. </p>
            <a href="#"> Learn more</a>
          </div>
        </div>
        <div className='staycar' >
          <div className='carOption' >
            <div className='option1' >
              <div>
                <DirectionsCarIcon style={{ color: "#0080ff" }} />
              </div>
              <div>
                <p>Rent a car</p>
                <span>Hundreds of cars and 24/7 customer <br />
                  service</span>
              </div>
            </div>
            <div className='option1' >
              <div>
                <HailIcon style={{ color: "#0080ff" }} />
              </div>
              <div>
                <p>Rent a car</p>
                <span>Hundreds of cars and 24/7 customer <br />
                  service</span>
              </div>
            </div>
            <div className='option1' >
              <div>
                <AttractionsIcon style={{ color: "#0080ff" }} />
              </div>
              <div>
                <p>Rent a car</p>
                <span>Hundreds of cars and 24/7 customer <br />
                  service</span>
              </div>
            </div>
          </div>
        </div>
        <div className='stayjorny' >
          <div className='jorny' >
            <img src={jorny_1} alt="" />
            <span style={{ zIndex: '1' }}>Manchester <br /><p>1,096 Properties</p> </span>
            <img src={jorny_2} alt="" />
          </div>
        </div>
        <div className='stayplace' >
          <div className='place' >
            <img src={jorny_3} alt="" />
            <img src={jorny_4} alt="" />
            <img src={jorny_5} alt="" />
          </div>
        </div>
        <div className='staywater' >
          <p>Get inspiration for your next trip</p>
          <div className='water' >
            <img src={jorny_6} alt="" /><p>..Get</p>
            <img src={jorny_7} alt="" /><p>..Get</p>
            <img src={jorny_8} alt="" /><p>..Get</p>
          </div>
        </div>
        <div className='staypark' >
          <div className='park' >
            <img src={jorny_9} alt="" />
            <img src={jorny_10} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default StayPage