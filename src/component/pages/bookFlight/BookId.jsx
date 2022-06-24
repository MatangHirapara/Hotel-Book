import React from 'react'
import { Button } from '@mui/material';
import "./bookId.css"
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';
import bookFlights from "./bookFlights.json"
import {useParams} from "react-router-dom"
 
const BookId = () => {
  
  const {sheet} = useParams();

  const data = bookFlights.find((e) => {
    return e.sheet === sheet
  })

  return (
    <>
                <div className="idItem" >
                  <div className='mainId' >
                    <div className='idDetail'>
                      <div>
                        <p>{data.sheet}</p>
                        <p>{data.start}PM--------------{data.end}AM</p>
                      </div>
                      <div>
                        <ConnectingAirportsIcon style={{marginLeft: "1.3rem", color: "rgb(0,115,255)"}} />
                        <p>LKO Jan 19 ________________JAI Jan 19</p>
                      </div>
                      <p className='IdflightName' >{data.name}</p>
                    </div>
                    <div className='IditemPrice' >
                      <div>
                        <p>Discover your next dream destination,</p>
                        <p>Discover</p>
                      </div>
                      <div className='IdbookPrice' >
                        <p>{data.price}</p>
                        <p style={{fontSize: "1rem"}} >Total Price of flight-Book</p>
                      </div>
                      <div className='IditemBtn' >
                        <Button className='Idbtn' >Pay Now</Button>
                      </div>
                    </div>
                  </div>
                </div>
    </>
  )
}

export default BookId