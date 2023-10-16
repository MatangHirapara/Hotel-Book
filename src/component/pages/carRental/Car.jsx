import React from 'react'
import "./car.css"
import "../bookFlight/bookflight.css"
import image_1 from "../../images/card-1.gif"
import image_2 from "../../images/card-2.gif"
import image_3 from "../../images/card-3.gif"
import image_4 from "../../images/card-4.gif"
import image_5 from "../../images/card-5.gif"
import image_6 from "../../images/card-6.gif"
import image_7 from "../../images/card-7.gif"
import image_9 from "../../images/card-9.gif"
import trip_1 from "../../images/trip-1.jpg"
import trip_2 from "../../images/trip-2.jpg"
import trip_3 from "../../images/trip-3.jpg"
import trip_4 from "../../images/trip-4.jpg"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import trip_5 from "../../images/trip-5.jpg"
import trip_6 from "../../images/city-2.jpg"
import StarIcon from '@mui/icons-material/Star';
import CloudIcon from '@mui/icons-material/Cloud';
import { NavigationType, useNavigate } from 'react-router-dom'
import PublicIcon from '@mui/icons-material/Public';
import LanguageIcon from '@mui/icons-material/Language';
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';

const Car = () => {
  const navigate = useNavigate();

  const rent =() =>{
    navigate("/rent")
  }
  
  return (
    <div className='carRantal' >
      <div className='carPart' >
        <div className='partUnder' >
          <div className='firstLine' >
            <ReportGmailerrorredIcon/>
            <p>Clean cars. Flexible bookings. S ocially distant rental counters.</p>
          </div>
          <p className='secondLine' >We’re working with our partners to keep you safe and in the driving seat.</p>
          <a className='firstLine' style={{color: "red", fontFamily: "sans-serif"}} onClick={() => navigate('/info')}>Find out how</a>
        </div>
      </div>
      <div className='tripForm' >
        <div className='form' >
          <div className='formLine' >
            <p style={{fontSize: "1.6rem"}} >Car hire for any kind of trip</p>
            <p>Compare deals from the biggest car hire companies</p>
          </div>
          <div className='radioInput' >
            <div>
              <input type="radio" value="name" id='html' name='fav_language' />
              <label htmlFor="html"> Return to same location</label>
            </div>
            <div>
              <input type="radio" value="title" id='css' name='fav_language' />
              <label htmlFor="css"> Return to different location</label>
            </div>
          </div>
          <div className='flightPlace' style={{width: "70%",marginTop: "0.8rem"}} >
              <input type="text" value="LKO" />
              <CompareArrowsIcon style={{marginLeft: "0.8rem"}}/>
              <input type="text" value="JAl" style={{marginLeft: "0.8rem"}}/>
              <button style={{marginLeft: "0.8rem"}} onClick={rent} >Search</button>
          </div>
        </div>
      </div>
      <div className='trippay' >
        <p>Popular Car hire brands</p>
        <div>
          <img src={image_1} alt="" />
          <img src={image_3} alt="" />
          <img src={image_2} alt="" />
          <img src={image_4} alt="" />
          <img src={image_5} alt="" />
          <img src={image_6} alt="" />
          <img src={image_7} alt="" />
          <img src={image_9} alt="" />
        </div>
      </div>
      <br /><br />
      <div className='tripplace' >
        <p>Popular Car hire brands</p>
        <div>
          <div>
            <img src={trip_1} alt="" onClick={rent} />
            <div>
              <p style={{color: "black"}} >London</p>
              <p style={{fontSize: "1rem",marginTop: "-1rem"}} >car hire in 75 pick-up locations</p>
              <p style={{fontSize: "1rem",marginLeft: "1rem",marginTop: "-1rem",}} >From Rs. 3500.00 per day</p>
              <a href="" style={{fontSize: "1rem",marginTop: "-1.4rem",}}>Search rental car in Londan</a>
            </div>
          </div>
          <div>
            <img src={trip_2} alt="" onClick={rent} />
            <div>
              <p style={{color: "black"}} >Paris</p>
              <p style={{fontSize: "1rem",marginTop: "-1rem"}} >car hire in 75 pick-up locations</p>
              <p style={{fontSize: "1rem",marginLeft: "1rem",marginTop: "-1rem",}} >From Rs. 1500.00 per day</p>
              <a href="" style={{fontSize: "1rem",marginTop: "-1.4rem",}}>Search rental car in Paris</a>
            </div>
          </div>
          <div>
            <img src={trip_3} alt="" onClick={rent} />
            <div>
              <p style={{color: "black"}} >Madrid</p>
              <p style={{fontSize: "1rem",marginTop: "-1rem"}} >car hire in 75 pick-up locations</p>
              <p style={{fontSize: "1rem",marginLeft: "1rem",marginTop: "-1rem",}} >From Rs. 2700.00 per day</p>
              <a href="" style={{fontSize: "1rem",marginTop: "-1.4rem",}}>Search rental car in Madrid</a>
            </div>
          </div>
          <div>
            <img src={trip_4} alt="" onClick={rent} />
            <div>
              <p style={{color: "black"}} >Dubai</p>
              <p style={{fontSize: "1rem",marginTop: "-1rem"}} >car hire in 75 pick-up locations</p>
              <p style={{fontSize: "1rem",marginLeft: "1rem",marginTop: "-1rem",}} >From Rs. 3050.00 per day</p>
              <a href="" style={{fontSize: "1rem",marginTop: "-1.4rem",}}>Search rental car in Dubai</a>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div className='tripplace' onClick={rent}  >
        <p>Popular Car hire brands</p>
        <div>
          <div>
            <img src={trip_5} alt="" onClick={rent} />
            <div>
              <p style={{color: "black"}} >Malaga</p>
              <p style={{fontSize: "1rem",marginTop: "-1rem"}} >car hire in 75 pick-up locations</p>
              <p style={{fontSize: "1rem",marginLeft: "1rem",marginTop: "-1rem",}} >From Rs. 3230.00 per day</p>
              <a href="" style={{fontSize: "1rem",marginTop: "-1.4rem",}}>Search rental car in Malaga</a>
            </div>
          </div>
          <div>
            <img src={trip_6} alt="" onClick={rent} />
            <div>
              <p style={{color: "black"}} >Lisbon</p>
              <p style={{fontSize: "1rem",marginTop: "-1rem"}} >car hire in 75 pick-up locations</p>
              <p style={{fontSize: "1rem",marginLeft: "1rem",marginTop: "-1rem",}} >From Rs. 1090.00 per day</p>
              <a href="" style={{fontSize: "1rem",marginTop: "-1.4rem",}}>Search rental car in Lisbon</a>
            </div>
          </div>
        </div>
      </div>
      <div className='footer' >
        <div className='mainFoot' >
          <div className='service' >
            <p className='firstName' >World's biggest online car hire service</p>
            <p className='secondLine' >Why you can find the right car in the right place with us...</p>
          </div>
          <div className='review' >
            <div className='media' >
              <LanguageIcon style={{fontSize: "4rem", color: "#ff8800"}} />
              <div className='mediaTitle' >
                <p className='title' >60,000+</p>
                <p className='mediaName' >Locations</p>
              </div>
            </div>
            <div className='media' >
              <PublicIcon style={{fontSize: "4rem", color: "#ff8800"}} />
              <div className='mediaTitle' >
                <p className='title' >160</p>
                <p className='mediaName' >Contries</p>
              </div>
            </div>
            <div className='media' >
              <CloudIcon style={{fontSize: "4rem", color: "#ff8800"}} />
              <div className='mediaTitle' >
                <p className='title' >43</p>
                <p className='mediaName' >Spoken languges</p>
              </div>
            </div>
            <div className='media' >
              <StarIcon style={{fontSize: "4rem", color: "#ff8800"}} />
              <div className='mediaTitle' >
                <p className='title' >35,00,000</p>
                <p className='mediaName' >Customer reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Car