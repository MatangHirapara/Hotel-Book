import React, { useState } from 'react'
import "./bookflight.css"
import "../../pages/flight/flight.css"
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import LuggageIcon from '@mui/icons-material/Luggage';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import bookFlights from "./bookFlights.json"
import { useParams } from "react-router-dom"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "./bookId.css"
import Modal from '@mui/material/Modal';
import Slider from '@mui/material/Slider';
import cardPay from "./cardImage.json"
import card_1 from "../../images/card-8.jpg"
import air_1 from "../../images/air-1.jpg"


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};
const styled = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};
const styles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 950,
  height: 650,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 3,
};
const BookFlight = () => {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth() + 1}/${current.getFullYear()}`;

  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [data, setData] = useState([])
  const [datas, setDatas] = useState([])
  const [datad, setDatad] = useState([])
  const [cards, setCards] = useState([])


  const handleOpen = (s1) => {

    const data1 = bookFlights.find((e) => {
      return e.sheet === s1
    })

    setData(data1)
    setOpen(true)
  };

  const confirmOpen = (s4) => {

    const data3 = bookFlights.find((e) => {
      return e.sheet === s4
    })

    setDatad(data3)
    setOpened(true)
  };

  const choosecard = (s3) => {
    const card1 = cardPay.find((e) => {
      return e.card === s3
    })
    setCards(card1)
  }

  const payOpen = (s2) => {

    const data2 = bookFlights.find((e) => {
      return e.sheet === s2
    })

    setDatas(data2)
    setOpens(true)
  };

  const handleClose = () => setOpen(false);
  const handleCloses = () => { setOpens(false); setOpen(false) };
  const handleClosed = () => { setOpened(false); setOpens(false); setOpen(false) };
  const [value, setValue] = React.useState(30);
  const [searchItem, setSearchItem] = useState('');

  const handleSliderChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
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
            <CompareArrowsIcon />
            <input type="text" value="JAl" />

            <TextField size="small" style={{width: '18%', height: '50%'}}
              id="datetime-local"
              label="Book-Date"
              type="datetime-local"
              defaultValue="2017-05-24T10:30"
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />

            <button>Search</button>
          </div>
        </div>
      </div>
      <div className='bookFlight' >
        <div className='bookpart' >
          <div className='part-1' >
            <div>
              <p>Filter</p>
              <span>Showing result</span>
            </div>
            <div>
              <p>Stop</p>
              <input type="radio" name='stop' value="1 Stop Max" />
              <label htmlFor="stop">1 Stop Max</label>
            </div>
            <div>
              <p>Duration</p>
              <span>Maximum travel time</span>
              <br />
              <span >{value} Hour's</span>
              <Box sx={{ width: 250 }}>
                <Slider
                  defaultValue={value}
                  onChange={handleSliderChange}
                  aria-label="Default"
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            <div>
              <p>Flight Times</p>
              <p
                style={{ textAlign: "center", width: "320px", fontSize: "1rem", color: "blue", borderBottom: "1.5px solid blue" }} >
                Outbound flight
              </p>
              <span style={{ fontWeight: "600" }} >Departs from Sardar Vallabhabhai international airport mumbai</span>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">All</label>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">12:00 AM - 5:59 AM</label>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">6:00 AM - 11:59 AM</label>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">12:00 PM - 5:59 PM</label>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">6:00 PM - 11:59 PM</label>
            </div>
            <br />
            <div>
              <span style={{ fontWeight: "600", borderTop: "1px solid grey" }} >Arrives to Jaipur International Airport</span>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">All</label>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">12:00 AM - 5:59 AM</label>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">6:00 AM - 11:59 AM</label>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">12:00 PM - 5:59 PM</label>
              <br /><br />
              <input type="checkbox" value="All" />
              <label htmlFor="">6:00 PM - 11:59 PM</label>
            </div>
            <br />
            <div>
              <div style={{ borderTop: "1px solid grey", fontWeight: "600", width: "270px" }}  >
                <span >Airlines</span>
              </div>
              <br />
              <input type="radio" id="all" name="fav_language" value="all" onChange={event => setSearchItem(event.target.value)} />
              <label for="all">All</label>
              <br /><br />
              <input type="radio" id='air' name="fav_language" value="Air India" onChange={event => setSearchItem(event.target.value)} />
              <label for="air">Air-India</label>
              <br /><br />
              <input type="radio" id='indigo' name="fav_language" value="IndiGo" onChange={event => setSearchItem(event.target.value)} />
              <label for="indigo">Indigo</label>
              <br /><br />
              <input type="radio" id='vistara' name="fav_language" value="Vistara" onChange={event => setSearchItem(event.target.value)} />
              <label for="vistara">Vistara</label>
            </div>
          </div>
          <div className='part-2' >
            {bookFlights.filter((val) => {
              if (searchItem === value) {
                return val;
              } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
                return val;
              }
              if (searchItem === value) {
                return val;
              } else if (val.all.toLowerCase().includes(searchItem.toLowerCase())) {
                return val;
              }
            }).map((val, key) => {
              return (
                <>
                  <div className='item' key={key.id} >
                    <div className='itemDetail'>
                      <div>
                        <p>{val.sheet}</p>
                        <p>{val.start}PM--------------{val.end}AM</p>
                      </div>
                      <div>
                        <ConnectingAirportsIcon style={{ marginLeft: "1.3rem", color: "rgb(0,115,255)" }} />
                        <p>LKO Jan 19_________________JAI Jan 19</p>
                      </div>
                      <p className='flightName' >{val.name}</p>
                    </div>
                    <div className='itemPrice' >
                      <div>
                        <LuggageIcon />
                        <LuggageIcon />
                        <LuggageIcon />
                      </div>
                      <div>
                        <p>Discover your next dream destination,</p>
                        <p>Discover</p>
                      </div>
                      <div className='bookPrice' >
                        <p>{val.price}</p>
                        <p style={{ fontSize: "1rem" }} >Total Price of flight-Booking</p>
                      </div>
                      <div className='itemBtn' >

                        <Button className='btn' onClick={() => handleOpen(val.sheet)}>Book Now</Button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="idItem" >
            <div className='mainId' >
              <div className='idDetail'>
                <div>
                  <p>{data.sheet}</p>
                  <p>{data.start}PM--------------{data.end}AM</p>
                </div>
                <div>
                  <ConnectingAirportsIcon style={{ marginLeft: "1.3rem", color: "rgb(0,115,255)" }} />
                  <p>LKO Jan 19 ________________JAI Jan 19</p>
                </div>
                <p className='IdflightName' >{data.name}</p>
              </div>
              <div className='IditemPrice' >
                <div>
                  <p>Discover your next dream destinations</p>
                  <p>Discover</p>
                </div>
                <div className='IdbookPrice' >
                  <p>{data.price}</p>
                  <p style={{ fontSize: "1rem" }} >Total Price of flight-Book</p>
                </div>
                <div className='IditemBtn' >
                  <Button className='Idbtn' onClick={() => payOpen(data.sheet)} >Pay Now</Button>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
      <Modal
        open={opens}
        onClose={handleCloses}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styles} >
          <p className="payTitle" >Your Flight Booking Detail</p>
          <div style={{ display: "flex" }} >
            <div className='payProce' >
              <p className='payTotal' >Total Price: {datas.price}</p>
              <p className='checkProce' >Check and Pay</p>
              <p className='chooseProce' >How would you like to pay</p>
              <div className='payCard' >
                {cardPay.map((val, key) => {
                  return (
                    <>
                      <div key={key} >
                        <button onClick={() => choosecard(val.card)} ><img src={val.card} alt="" /></button>
                      </div>
                    </>
                  )
                })}
              </div>
              <div className='payHolder'>
                <img src={cards.card} alt="" />
                <p>Pay Card Type</p>
              </div>
              <p className='cardName' >Cardholder's name</p>
              <div className='payHolder' style={{ marginTop: "-0.6rem" }} >
                <p>Chirag d Patel</p>
              </div>
              <p className='cardName' >Card number*</p>
              <div className='payHolder' style={{ marginTop: "-0.6rem" }}>
                <img src={card_1} alt="" />
                <p>6070 5045 9083 4550</p>
              </div>
              <p className='cardName' >Expiry Date*</p>
              <div className='payHolder' style={{ marginTop: "-0.6rem" }}>
                <p>10/2024</p>
              </div>

              <button className='payBtn' onClick={() => confirmOpen(datas.sheet)} >PAY NOW</button>
            </div>
            <img className='airLogo' src={air_1} alt="" />
          </div>
        </Box>
      </Modal>
      <Modal
        open={opened}
        onClose={handleClosed}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={styled} >
          <p className="confirm" >Your Booking is Confirmed <CheckBoxIcon style={{ marginLeft: "0.5rem", color: "#0dbb0d" }} /></p>
          <p style={{ fontSize: "1.05rem", marginBottom: "-1rem" }} >Your Order ID is:</p>
          <p>{datad.id}</p>
          <Link to="/flight" style={{ color: "blue" }} >Back To Home</Link>
        </Box>
      </Modal>
    </>
  )
}

export default BookFlight