import React, { useState } from 'react'
import toorData from "./toorData.json"
import { Link, useNavigate } from 'react-router-dom'
import "./toor.css"
import { Button } from '@mui/material'

const Toor = () => {
  const[searchItem, setSearchItem] = useState('');

  const navigate = useNavigate();

  const search = () => {
    navigate("/travel");
  }
 
  return (
    <div className='maintoor'>
      <div className='toorinput' >
        <input type="text" placeholder='Search...' onChange={event => setSearchItem(event.target.value)} />
        <br />
        <br />
        <br />
        <input type="checkbox" id="vehicle1" onChange={event => setSearchItem(event.target.value)} name="vehicle1" value="800" />
        <label for="vehicle1">Rs. 800</label>
        <br />
        <input type="checkbox" id="vehicle1" onChange={event => setSearchItem(event.target.value)} name="vehicle1" value="1580" />
        <label for="vehicle1">Rs. 1580 +</label>
        <br />
        <input type="checkbox" id="vehicle1" onChange={event => setSearchItem(event.target.value)} name="vehicle1" value="700" />
        <label for="vehicle1">Rs. 700</label>
        <br />
        <button>Search</button>
      </div>
      <div className='toorhotel' >
        {toorData.filter((val)=>{
          if(searchItem === ""){
            return val;
          }else if(val.name.toLowerCase().includes(searchItem.toLowerCase())){
            return val;
          }
          if(searchItem === ""){
            return val;
          }else if(val.money.toLowerCase().includes(searchItem.toLowerCase())){
            return val;
          }
        }).map((val, key) =>{
          return(
            <>
              <div className='item' key={key} >
                <div  >
                  <img style={{width: "160px",height: "200px", borderRadius: "8px"}} src={val.image} alt="" />
                </div>
                <div className='hotelDetail' >
                  <p className='valTitle' >{val.title}</p>
                  <p className='valName' >{val.name}</p>
                  <p className='valrooms'  >{val.roomsize}</p>
                  <p className='valbed' >{val.badquantity}</p>
                  <p className='valDetail' >{val.detail}</p>
                </div>
                <div className='Qulity' >
                  <div className='reviewDetail' >
                    <p className='valReview' >{val.review}</p>
                    <h3 className='valRank' >{val.rank}</h3>
                  </div>
                  <p>Rent Price : /</p>
                  <h2 className='valMoney' >Rs.{val.money}</h2>
                  <Link style={{textDecoration: "none"}} to={`/travel/${val.id}`} > <Button style={{border: "2px solid #0091ff"}} >Check</Button></Link>
                </div>
              </div>
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Toor
