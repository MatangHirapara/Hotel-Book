import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import attrect from "./attrect.json"
import "./ProcessAttrect.css"
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import "../stayPage/staypage.css"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import card_1 from "../../images/card-8.jpg"
import air_1 from "../../images/air-1.jpg"
import cardpay from "../bookFlight/cardImage.json"
import { incNum,decNum } from '../../../redux/adults/action';
import { inccount,deccount } from '../../../redux/child/childaction';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';


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
const ProcessAttrect = () => {
  const mystate = useSelector((state) => state.change);
  const mychild = useSelector((state) => state.child);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [opened, setOpened] = React.useState(false);
  const [dataes,setDataes] = useState([])
  const [datas,setDatas] = useState([])
  const [cards,setCards] = useState([])
  const [datad,setDatad] = useState([])


  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;

  const {id} = useParams()
  const data = attrect.find((e) => {
    return e.id === id
  })

  const payOpen = (s2) => {
    
    const data2 = attrect.find((e) => {
      return e.id === s2
    })

    setDatas(data2)
    setOpens(true)
  };
  const choosecard = (s3) => {
    const card1 = cardpay.find((e)=>{
      return e.card === s3
    })
    setCards(card1)
  }
  const confirmOpen = (s4) => {
    
    const data3 = attrect.find((e) => {
      return e.id === s4
    })

    setDatad(data3)
    setOpened(true)
  };

  const [childs, setChild] = useState(data.child)
  const [adult, setAdult] = useState(data.price)
  const [totals , setTotals] = useState("")
  const [counter , setCounter] = useState("")


  const close =  () => {
    document.getElementById("counter").style.display = "none";
  }
  const click =  () => {
    document.getElementById("counter").style.display = "block";
  }
  
  const childplus = () => {
    dispatch(inccount())
      setChild(childs * 2)
    document.getElementById('minus').style.display = "block";
  }
  const childminus = () => {
    if(mychild > 0){
      dispatch(deccount())
      setChild(childs / 2)
      document.getElementById('minus').style.display = "block";
    }else{
      document.getElementById('minus').style.display = "none";
    }
  }


  const adultplus = () => {
    dispatch(incNum())
      setAdult(adult * 2)
    document.getElementById('adultminus').style.display = "block";
  }
  const adultminus = () => {
    if(mystate > 0){
      dispatch(decNum())
      setAdult(adult / 2)
      document.getElementById('adultminus').style.display = "block";
    }else{
      document.getElementById('adultminus').style.display = "none";
    }
  }

  const handleOpen = (s1) => {
    
    const data1 = attrect.find((e) => {
      return e.id === s1
    })

    setDataes(data1)
    setOpen(true)
  };


  const total = () => {
    setTotals(childs + adult)
    setCounter(mystate + mychild)
     handleOpen(data.id)
  }

  const handleClose = () => setOpen(false);
  const handleClosed = () => {setOpened(false);setOpens(false);setOpen(false)};
  const handleCloses = () => {setOpens(false);setOpen(false)};

  return (
    <>
      <div className='ProcessAttrect' >
        <div className='ProcessStyle'>
          <div className='ProcessImg'>
            <img src={data.image} alt="" />
            <img src={data.image} alt="" />
            <img src={data.image} alt="" />
            <img src={data.image} alt="" />
            <img src={data.image} alt="" />
          </div>
          </div>
          <div className='ProcessDetail' >
            <div className='Detail' >
              <div className='DetailItem1' >
                <h2>{data.title}</h2>
                <p className='DetailItem1Title' >Sltr-haris Type I physeal fx unspecified metatarsal, 7thP</p>
                <div className='DetailItem1review' >
                  <ThumbUpAltOutlinedIcon/>
                  <div>
                    <p>84% liked it</p>
                    <p>from 72 reviews</p>
                  </div>
                </div>
                <br />
                <div className='DetailItem1review' >
                  <CloseOutlinedIcon/>
                  <div>
                    <p>Instant Confirmation</p>
                  </div>
                </div>
                <br />
                <div className='DetailItem1review' >
                  <MarkEmailReadOutlinedIcon/>
                  <div>
                    <p>Free cancellation on some options</p>
                  </div>
                </div>
                <br />
                <div className='DetailImg' >
                  <div className='Detailmap' >
                    <LocationOnOutlinedIcon style={{fontSize: "2.2rem",color: "#0bd90b"}} />
                    <div>{data.city}</div>
                  </div>
                </div>
                <div style={{marginBottom: "2rem"}} >
                  <div style={{display: 'flex', alignItems: "center",marginTop: "1rem"}} >
                    <LocationOnOutlinedIcon style={{fontSize: "2.2rem",color: "#0bd90b"}} />
                    <div>
                      <p style={{fontSize: "1.2rem",marginTop: "-0.1rem",marginBottom: "0.1rem"}} >Metting Point</p>
                      <p style={{marginTop: "-0.1rem",marginBottom: "0.1rem" }} >749 Prairieview Trail</p>
                    </div>
                  </div>
                  <Button 
                    style={
                      {
                        fontSize: "0.85rem",
                        marginLeft: "2.5rem",
                        marginTop:"0.6rem",
                        fontWeight: "700"
                      }
                    }>
                    Get directions
                  </Button>
                </div>
              </div>
              <div className='DetailItem2' >
                <h2>Ticket and Prices</h2>
                <p className='DetailItem2Go'  >when you are going?</p>
                <input type="text" value={date} />
                <br />
                <br />
                <div className='checkTotal'  >
                  <div className='styleCheck' >
                    <p style={{fontSize: "1.2rem"}} >Return Ticket</p>
                    <div>
                      <MarkEmailReadOutlinedIcon/>
                      <p>Free cancellation See deatils</p>
                    </div>
                    <div className='detailPrice'>
                      <div>
                        <p>from</p>
                        <p style={{fontSize: "1.2rem",fontWeight: "700"}} >Rs. {data.price}</p>
                      </div>
                      <Button onClick={click} style={{border: "2px solid #0080ff"}} >Select</Button>
                    </div>
                  </div>
                </div>
                <div className='detailTotal' id='counter'>
                  <CloseIcon onClick={close} />
                  <div className='Total' >
                    <div className='Totalfirst' >
                      <div>
                        <p>Adult (age 13-99)</p>
                        <p style={{marginTop: "-1rem"}} >Rs. {adult}</p>
                      </div>
                      <div style={{width:"8vw",display: "flex",alignItems: "center",justifyContent: "space-between"}} >
                        <button onClick={adultplus} >+</button>
                        <p style={{fontSize: "1.3rem"}} >{mystate}</p>
                        <button id='adultminus' onClick={adultminus} >-</button>
                      </div>
                    </div>
                    <div className='Totalfirst' >
                      <div>
                        <p>child (age 4-12)</p>
                        <p style={{marginTop: "-1rem"}} >Rs. {childs}</p>
                      </div>
                      <div style={{width:"8vw",display: "flex",alignItems: "center",justifyContent: "space-between"}} >
                        <button onClick={childplus} >+</button>
                        <p style={{fontSize: "1.3rem"}} >{mychild}</p>
                        <button id='minus' onClick={childminus} >-</button>
                      </div> 
                    </div>
                    <Button 
                      onClick={total}
                      style={
                      {
                        marginTop: "1.2rem",
                        marginLeft: "38.2rem",
                        padding: "6px 35px",
                        backgroundColor: "#0080ff",
                        color:"white",
                        border: "2px solid white"
                      }}>Next
                    </Button>
                  </div>
                </div>  
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
                    <div className='idDemo' >
                      <div>
                        <img src={dataes.image} alt="" />
                        
                      </div>
                      <div style={{marginLeft: "1rem"}} >
                        Date:- 27-4-2022
                        <p>{counter}x Admission</p>
                        <p>{dataes.title}</p>
                        <p><LocationOnOutlinedIcon/> {dataes.city}</p>
                      </div>
                    </div>
                    <div className='IditemPrice' >
                      <div style={{marginTop: "-1rem"}} >
                        <p>Discover your next dream destination,</p>
                        <p>Discover</p>
                      </div>
                      <div className='IdbookPrice' >
                        <div>
                          <p>{mystate}X Adults(age 13+)</p>
                          <p>Rs. {adult}</p>
                        </div>
                        <div>
                          <p>{mychild}X Child (age 4-12)</p>
                          <p>Rs. {childs}</p>
                        </div>
                        <br />
                        <div style={{borderTop: "1.8px dotted black"}} >
                          <p style={{fontSize: "1.3rem",fontWeight: "700"}} >Total Price:</p>
                          <p style={{fontSize: "1.3rem",fontWeight: "700"}} >Rs. {totals}</p>
                        </div>
                      </div>
                      <div className='IditemBtn' >
                        <Button className='Idbtn' onClick={() => payOpen(dataes.id)} >Pay Now</Button>
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
                  <p className='payTotal' >Total Price: {totals}</p>
                  <p className='checkProce' >Check and Pay</p>
                  <p className='chooseProce' >How would you like to pay</p>
                  <div className='payCard' >
                    {cardpay.map((val,key)=>{
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
                  <p className="confirm" >Your Booking is Confirmed <CheckBoxIcon style={{marginLeft: "0.5rem",color: "#0dbb0d"}} /></p>
                  <p style={{fontSize: "1.05rem",marginBottom: "-1rem"}} >Your Order ID is:</p>
                  <p>{datad.user}</p>
                  <Link to="/attrection" style={{color: "blue"}} >Back To Home</Link>
                </Box>
             </Modal>
      </div>
    </>
  )
}

export default ProcessAttrect