import React from 'react'
import "./flight.css"
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import WrapTextIcon from '@mui/icons-material/WrapText';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import image_1 from "../../images/place-1.jpg"
import image_2 from "../../images/place-2.jpg"
import image_3 from "../../images/place-3.jpg"
import image_4 from "../../images/place-4.jpg"
import image_5 from "../../images/place-5.jpg"
import image_6 from "../../images/place-6.jpg"
import image_7 from "../../images/place-7.jpg"
import city_1 from "../../images/city-1.jpg"
import city_2 from "../../images/city-2.jpg"
import city_3 from "../../images/city-3.jpg"
import city_4 from "../../images/city-4.jpg"
import city_5 from "../../images/city-5.jpg"
import city_6 from "../../images/city-6.jpg"
import city_7 from "../../images/city-7.jpg"
import { useNavigate } from 'react-router-dom';

const Flight = () => {
  
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  const navigate = useNavigate();

  const book = () => {
    navigate("/book");
  }
  return (
    <div className='mainflight' >
      <div className='flightDetail' >
        <div className='detail'>
          <div className='flightHeadline' >
              <p>Coronavirus (COVID-19) may affect your travel plans. <span> Learn more</span></p>
          </div>
          <div className='flightBook' >
            <p className='bookTitle' >Compare and book flights with ease</p>
            <p className='destination' >Discover your next dream destination</p>
          </div>
          <div className='flightSelect'>
            <input type="radio" id="html" name="fav_language" value="HTML" />
            <label for="html">Round-trip</label>
            <input type="radio" id="css" name="fav_language" value="CSS" />
            <label for="css">Oneway</label>
            <input type="radio" id="javascript" name="fav_language" value="JavaScript" />
            <label for="javascript">Multi-city</label>
            <select >
              <option value="Economy">Economy</option>
              <option value="Economy">Business</option>
              <option value="Economy">First-class</option>
              <option value="Economy">Premium-Economy</option>
            </select>
          </div>
          <div className='flightPlace' >
            <input type="text" value="LKO" />
            <CompareArrowsIcon/>
            <input type="text" value="JAl" />
            <input type="text" value={date} />
            <button onClick={book} >Search</button>
          </div>
        </div>
      </div>
      <div className='flightImage' >
          <div className='imageTitle' >
            <p>Popular flights near you</p>
            <span>Find deals on domestic and international flights</span>
          </div>
          <div className='image'>
            <div>
              <img src={image_1} alt="" onClick={book}  />
              <p>Lucknow to Jaipur</p>
            </div>
            <div>
              <img src={image_2} alt="" onClick={book} />
              <p>Lucknow to Kolkata</p>
            </div>
            <div>
              <img src={image_3} alt="" onClick={book} />
              <p>Lucknow to Srinagar</p>
            </div>
            <div>
              <img src={image_4} alt="" onClick={book} />
              <p>Lucknow to Haydrabad</p>
            </div>
          </div>
          <br /><br /><br />
          <br /><br /><br />
          <br /><br />
          <div className='image'>
            <div>
                <img src={image_5} alt="" onClick={book} />
                <p>Lucknow to Pune</p>
            </div>
            <div>
                <img src={image_6} alt="" onClick={book} />
                <p>Lucknow to Chanai</p>
            </div>
            <div>
              <img src={image_7}alt="" onClick={book} />
              <p>Lucknow to Bangalore</p>
            </div>
          </div>
        </div>
        <br /><br /><br />
          <br /><br /><br />
          <br /><br />
      <div className='flightImage' >
          <div className='imageTitle' >
            <p>Trending cities</p>
            <span>Book flights to a destination popular with travelers from India</span>
          </div>
          <div className='image'>
            <div>
              <img src={city_1} alt="" onClick={book} />
              <p>New Delhi, India</p>
            </div>
            <div>
              <img src={city_2} alt="" onClick={book} />
              <p>Dubai, United Arab Emirates</p>
            </div>
            <div>
              <img src={city_3} alt="" onClick={book} />
              <p>Panaji,India</p>
            </div>
            <div>
              <img src={city_4} alt="" onClick={book} />
              <p>Mumbai,India</p>
            </div>
          </div>
          <br /><br /><br />
          <br /><br /><br />
          <br /><br />
          <div className='image'>
            <div>
                <img src={city_5} alt="" onClick={book} />
                <p>Bangalore,India</p>
            </div>
            <div>
                <img src={image_6} alt="" onClick={book} />
                <p>Riyadh,India</p>
            </div>
            <div>
              <img src={city_6}alt="" onClick={book} />
              <p>Jeddah,Saudi Arabia</p>
            </div>
            <div>
              <img src={city_7}alt="" onClick={book} />
              <p>Jammu,India</p>
            </div>
          </div>
        </div>
        <div className='readMore' >
          <div className='more' >
            <div className='morePart' >
              <div>
                <WrapTextIcon/>
                <p>Huge selection</p>
              </div>
              <p>Easily compare thousands of flights, all in one place</p>
            </div>
            <div className='morePart' >
              <div>
                <YoutubeSearchedForIcon/>
                <p>No hidden fees</p>
              </div>
              <p>Always know exactly what you’re paying for</p>
            </div>
            <div className='morePart' >
              <div>
                <AirplaneTicketIcon/>
                <p>More flexibility</p>
              </div>
              <p>Keep your travel dates open with flexible ticket options</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Flight