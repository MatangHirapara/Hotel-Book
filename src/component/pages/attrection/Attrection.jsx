import React from 'react'
import "./attrection.css"
import dest_1 from  '../../images/dest-1.jpg'
import dest_2 from  '../../images/dest-2.jpg'
import dest_3 from  '../../images/dest-3.jpg'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AttractionsIcon from '@mui/icons-material/Attractions';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import contry_1 from "../../images/contry-1.jpg"
import contry_2 from "../../images/contry-2.jpg"
import contry_3 from "../../images/contry-3.jpg"
import contry_4 from "../../images/contry-4.jpg"
import { useNavigate } from 'react-router-dom'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const Attrection = () => {
  const navigate = useNavigate();
  const attrect = () => {
    navigate("/attrectTour")
  }
  return (
    <>
      <div className='mainAttrect' >
        <div className='attrectPart' >
          <div className='part1' >
            <p className='part1Title' >Find and book a great experience</p>
            <p className='part1Write'>Discover more of your destination and make the most of your trip</p>
            <br />
            <div className='inputdiv' >
              <input className='searchBar' type="search" placeholder='search....' />
              <button className='part1Btn' onClick={attrect}  >SEARCH</button>
            </div>
          </div>
        </div>
        <div className='staywarn' id=''>
          <div className='warn' >
            <ReportGmailerrorredIcon style={{padding: "7px",backgroundColor: "f06868",color: "red"}} />
            <p>Get the advice you need. Check the latest COVID-19 restrictions before you travel. </p>
            <a href="#"> Learn more</a>
          </div>
        </div>
        <div className='Destination' >
          <div className='destwidth' >
            <div>
              <div className='destTitle' >
                <p>Top Destination</p>
              </div>
              <div className='destImage' >
                <img src={dest_1} alt="" onClick={attrect} />
                <img src={dest_2} alt="" onClick={attrect} />
                <img src={dest_3} alt="" onClick={attrect} />
              </div>
            </div>
          </div>
          <div className='destDetail' >
            <div>
              <div className='destTitle' >
                <p>We've got you covered</p>
              </div>
              <div className='detailPart' >
                <div className='firstdetail' >
                  <AttractionsIcon style={{fontSize: "2.3rem",color: "green"}} />
                  <div>
                    <p className='detailTitle' >Explore top attractions</p>
                    <p>Experience the best of your destination, with attractions, tours, activities and more</p>
                  </div>
                </div>
                <div className='firstdetail' >
                  <MarkEmailReadIcon style={{fontSize: "2.3rem",color: "green"}} />
                  <div>
                    <p className='detailTitle' >Fast and flexible</p>
                    <p>Book tickets online in minutes, with free cancellation on many attractions</p>
                  </div>
                </div>
                <div className='firstdetail' >
                  <SupportAgentIcon style={{fontSize: "2.3rem",color: "green"}} />
                  <div>
                    <p className='detailTitle' >Support when you need it</p>
                    <p>Booking.com's global Customer Service team is here to help 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='destContry' >
            <div>
              <div className='destTitle' >
                <p style={{marginBottom: "0.1rem"}} >Explore more destinations</p>
                <span>Find things to do in cities around the world</span>
              </div>  
              <div className='contryName' >
                <ul>
                  <li>Europe</li>
                  <li>North America</li>
                  <li>Asia</li>
                  <li>Africa</li>
                  <li>Ocenia</li>
                  <li>Middle Est</li>
                  <li>Caribbean</li>
                  <li>Central America</li>
                  <li>South America</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='contryImg' >
            <div>
              <img src={contry_1} alt="" />
              <img src={contry_2} alt="" />
              <img src={contry_1} alt="" />
              <img src={contry_3} alt="" />
              <img src={contry_4} alt="" />
              <img src={contry_2} alt="" />
            </div>
          </div>
          <div className='contryImg' >
            <div>
              <img src={contry_1} alt="" />
              <img src={contry_2} alt="" />
              <img src={contry_4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Attrection