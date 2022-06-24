import React,{useState} from 'react'
import ReportGmailerrorredIcon from '@mui/icons-material/ReportGmailerrorred';
import "./car.css"
import "./rent.css"
import map_1 from "../../images/map.jpg"
import carRent from "./carRent.json"
import ccar from "../../images/ccar.png"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import cardPay from "../bookFlight/cardImage.json"
import air_1 from "../../images/air-1.jpg"
import card_1 from "../../images/card-8.jpg"
import { Link } from 'react-router-dom';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import taxi from "../../images/taxi.png"
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

const Rent = () => {
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [data,setData] = useState([])
  const [datas,setDatas] = useState([])
  const [datad,setDatad] = useState([])
  const [cards,setCards] = useState([])
  const[searchItem, setSearchItem] = useState('');

  const handleOpen = (s1) => {
    
    const data1 = carRent.find((e) => {
      return e.id === s1
    })

    setData(data1)
    setOpen(true)
  };

  const confirmOpen = (s4) => {
    
    const data3 = carRent.find((e) => {
      return e.id === s4
    })

    setDatad(data3)
    setOpened(true)
  };
  const choosecard = (s3) => {
    const card1 = cardPay.find((e)=>{
      return e.card === s3
    })
    setCards(card1)
  }

  const payOpen = (s2) => {
    
    const data2 = carRent.find((e) => {
      return e.id === s2
    })

    setDatas(data2)
    setOpens(true)
  };

  const handleClose = () => setOpen(false);
  const handleCloses = () => {setOpens(false);setOpen(false)};
  const handleClosed = () => {setOpened(false);setOpens(false);setOpen(false)};

  return (
    <>
      <div className='car' >
        <div className='carPart' >
          <div className='partUnder' >
            <div className='firstLine' >
              <ReportGmailerrorredIcon/>
              <p>Clean cars. Flexible bookings. Socially distant rental counters.</p>
            </div>
            <p className='secondLine' >We’re working with our partners to keep you safe and in the driving seat.</p>
            <a href="" className='firstLine' >Find out how</a>
          </div>
        </div>
        <div className='carSearch'>
          <div className='carTres' >
            <div className='firstDiv' >
              <div className='idealCar'>
                <h3 className='idealTitle' >Let's find your ideal car</h3>
                <p>Pick-up</p>
                <input type="date" />
                <p>Drop-off</p>
                <input type="date" />
                <br />
                <button>Search</button>
              </div>
            </div>
            <div className='suplier' >
              <p className='suplierName' >Supplier</p>
              <br />
                <input type="radio" id="all" name="fav_language" value="all" onChange={event => setSearchItem(event.target.value)} />
                <label for="all">All</label>
                <br /><br />
                <input type="radio" id="Alamo" name="fav_language" value="Alamo" onChange={event => setSearchItem(event.target.value)} />
                <label for="Alamo">Alamo</label>
                <br /><br />
                <input type="radio" id='Avis' name="fav_language" value="Avis" onChange={event => setSearchItem(event.target.value)} />
                <label for="Avis">Avis</label>
                <br /><br />
                <input type="radio" id='Budget' name="fav_language" value="Budget" onChange={event => setSearchItem(event.target.value)} />
                <label for="Budget">Budget</label>
                <br /><br />
                <input type="radio" id='City Rental' name="fav_language" value="City Rental" onChange={event => setSearchItem(event.target.value)} />
                <label for="City Rental">City Rental</label>
                <br /><br />
                <input type="radio" id='Van Rental' name="fav_language" value="Van Rental" onChange={event => setSearchItem(event.target.value)} />
                <label for="Van Rental">Van Rental</label>
            </div>
          </div>
          <div className='map' >
            <img src={map_1} alt="" />
            <br />
            <img src={map_1} alt="" />
            <br />
            <img src={map_1} alt="" />
            <br />
            <img src={map_1} alt="" />
            <br />
            <img src={map_1} alt="" />
          </div>
          <div className='available' >
            {carRent.filter((val)=>{
              if(searchItem === ""){
                return val;
              }else if(val.title.toLowerCase().includes(searchItem.toLowerCase())){
                return val;
              }
              if(searchItem === ""){
                return val;
              }else if(val.all.toLowerCase().includes(searchItem.toLowerCase())){
                return val;
              }
            }).map((val,key)=> {
              return(
                <>
                  <div className='avilCar' key={key} >
                    <div className='series' >
                      <div>
                        <p style={{fontSize: "1.7rem"}} >Serial No.: {val.id}</p>
                        <img src={ccar} alt="" style={{marginLeft: "1.5rem"}} />
                        <p>{val.title}</p>
                        <p style={{color: "#0088ff"}} >Rental terms</p>
                      </div>
                      <div className='location' >
                        <h2>Location:</h2>
                        <div>
                          <p>Supplier :- </p>
                          <span> {val.title}</span>
                        </div>
                        <div>
                          <p>Mileage :- </p>
                          <span> {val.millage}</span>
                        </div>
                        <div>
                          <p>Fuel Policy :- </p>
                          <span>Like for Like</span>
                        </div>
                        <div>
                          <p>Fair :- </p>
                          <span>car hire from ₹ {val.price} per day</span>
                        </div>
                        <div>
                          <p>Special :- </p>
                          <span>Contactless Pick-up -Avoid the</span>
                        </div>
                        <div>
                          <p>Offers :- </p>
                          <br />
                          <span>paperwork registration you arrive</span>
                        </div>
                      </div>
                    </div>
                    <div className='priceInclud' >
                      <div className='detail' >
                        <h2>Price includes</h2>
                        <p>Amendments</p>
                        <p>Theft Protection</p>
                        <p>Collision Damage Waiver</p>
                      </div>
                      <div className='chooseCar' >
                        <p>Price per 1 day:</p>
                        <p className='INR' >INR Rs. {val.price}</p>
                        <button onClick={() => handleOpen(val.id) } >Choose this car</button>
                      </div>
                    </div>
                  </div>
                </>
              )
            })}
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
                          <p style={{fontSize: "1.7rem"}} >Series No.: {data.id}</p>
                          <p style={{marginLeft: "3rem"}} >{data.title} <br /> Rental terms</p>
                        </div>
                        <div>
                          <img src={ccar} alt="" style={{marginLeft: "1.5rem"}} />
                        </div>
                        <p className='IdflightName' >{data.millage}</p>
                      </div>
                      <div className='IditemPrice' >
                        <div>
                          <p>Discover your next dream destination,</p>
                          <p>Discover</p>
                        </div>
                        <div className='location' style={{marginTop: "5rem"}} >
                          <h2>Location:</h2>
                          <div>
                            <span> {data.title}</span>
                            <br />
                          </div>
                          <div>
                            <span> {data.millage}</span>
                            <br />
                          </div>
                          <div>
                            <span>Like for Like</span>
                            <br />
                          </div>
                          <div>
                            <span>car hire from ₹ {data.price} per day</span>
                            <br />
                          </div>
                          <div>
                            <span>Contactless Pick-up -Avoid the</span>
                            <br />
                          </div>
                          <div>
                            <span>------------------------------</span>
                            <span>paperwork registration you arrive</span>
                            <br />
                          </div>
                        </div>
                        <br /><br />
                        <div className='IdbookPrice' >
                          <p>Rs. {data.price}</p>
                          <p style={{fontSize: "1rem"}} >Total Price of flight-Book</p>
                        </div>
                        <div className='IditemBtn' >
                          <Button className='Idbtn' onClick={() => payOpen(data.id)} >Pay Now</Button>
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
                <div style={{display: "flex"}} >
                <div className='payProce' >
                  <p className='payTotal' >Total Price: {datas.price}</p>
                  <p className='checkProce' >Check and Pay</p>
                  <p className='chooseProce' >How would you like to pay</p>
                  <div className='payCard' >
                    {cardPay.map((val,key)=>{
                      return(
                        <>
                          <div key={key} >
                            <button onClick={()=>choosecard(val.card)} ><img src={val.card} alt="" /></button>
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
                  <div className='payHolder' style={{marginTop: "-0.6rem"}} >
                    <p>Chirag d Patel</p>
                  </div>
                  <p className='cardName' >Card number*</p>
                  <div className='payHolder' style={{marginTop: "-0.6rem"}}>
                    <img src={card_1} alt="" />
                    <p>6070 5045 9083 4550</p>
                  </div>
                  <p className='cardName' >Expiry Date*</p>
                  <div className='payHolder' style={{marginTop: "-0.6rem"}}>
                    <p>10/2024</p>
                  </div>
                  
                    <button className='payBtn' onClick={() => confirmOpen(datas.id)} >PAY NOW</button>
                </div>
                <img className='airLogo' src={taxi} alt="" />
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
                  <p className="confirm" >Your Booking is Confirmed <CheckBoxIcon style={{marginLeft: "0.5rem",color: "#0dbb0d"}} /></p>
                  <p style={{fontSize: "1.05rem",marginBottom: "-1rem"}} >Your Order ID is:</p>
                  <p>{datad.user}</p>
                  <Link to="/car" style={{color: "blue"}} >Back To Home</Link>
                </Box>
          </Modal>
      </div>
    </>
  )
}

export default Rent