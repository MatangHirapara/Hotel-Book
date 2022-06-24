import React, { useState } from 'react'
import "./attrectTour.css"
import attrect from "./attrect.json"
import map_2 from "../../images/map-2.png"
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const AttrectTour = () => {
  const [searchitem, setSearchItem] = useState('All');

  const cityName = (event) => {
    setSearchItem(event.target.value);
  }
  return (
    <>
      <div className='attrectTour' >
         <div className='attrectStyle' >
           <div className='attrectPart1' >
             <h3>Filter</h3>
              <div className='Part1Item1' >
                <p>contry</p>
                <div>
                  <input type="radio" id='all' name='fav_language' value="All" onChange={cityName} />
                  <label for="all">All</label>
                </div>
                <div>
                  <input type="radio" id='london' name='fav_language' value="London" onChange={cityName} />
                  <label for="london">London</label>
                </div>
                <div>
                  <input type="radio" id='china' name='fav_language' value="China" onChange={cityName} />
                  <label for="china">China</label>
                </div>
                <div>
                  <input type="radio" id='brazil' name='fav_language' value="Brazil" onChange={cityName} />
                  <label for="brazil">Brazil</label>
                </div>
                <div>
                  <input type="radio" id='dubai' name='fav_language' value="Dubai" onChange={cityName} />
                  <label for="dubai">Dubai</label>
                </div>
                <div>
                  <input type="radio" id='indonesia' name='fav_language' value="Indonesia" onChange={cityName} />
                  <label for="indonesia">Indonesia</label>
                </div>
                <div>
                  <input type="radio" id='russia' name='fav_language' value="Russia" onChange={cityName} />
                  <label for="russia">Russia</label>
                </div>
                <div>
                  <input type="radio" id='United States' name='fav_language' value="United States" onChange={cityName} />
                  <label for="United States">United States</label>
                </div>
              </div>
              <br />
              <div className='Part1Item1' > 
                <p>Price</p>
                <div>
                  <input type="radio" id='price' name='fa_language' />
                  <label for="price">Rs. 0 - Rs. 1800</label>
                </div>
                <div>
                  <input type="radio" id='price' name='fa_language' />
                  <label for="price">Rs. 1694 - Rs. 3388</label>
                </div>
                <div>
                  <input type="radio" id='price' name='fa_language' />
                  <label for="price">Rs. 3388 - Rs. 6351</label>
                </div>
                <div>
                  <input type="radio" id='price' name='fa_language' />
                  <label for="price">Rs. 6351 - Rs. 10,585</label>
                </div>
                <div>
                  <input type="radio" id='price' name='fa_language' />
                  <label for="price">Rs. 10,585+</label>
                </div>
              </div>
              <br />
              <br />
                <div className='Part1Img' >
                  <div className='Part1map' >
                    <LocationOnOutlinedIcon style={{fontSize: "2.2rem",color: "#0bd90b"}} />
                    <div>{searchitem}</div>
                  </div>
                </div>
           </div>
           <div className='attrectPart2'>
             {attrect.filter((val)=> {
               if(searchitem === ""){
                 return val
               }else if(val.city.toLowerCase().includes(searchitem.toLowerCase())){
                 return val
               }
               if(searchitem === ""){
                 return val
               }else if(val.all.toLowerCase().includes(searchitem.toLowerCase())){
                 return val
               }
             }).map((val,key)=> {
               return(
                 <>
                  <div className='Part2style' key={key} >
                    <div className='Part2Item'>
                      <div>
                        <img src={val.image} alt="" />
                      </div>
                      <div className='ItemDetail' >
                        <p className='ItemCity' >{val.city}</p>
                        <p className='ItemPlace' >{val.title}</p>
                        <p className='ItemLocate' >{val.location}</p>
                      </div>
                    </div>
                    <div className='Part2Item2' >
                      <p className='Item2tag' >from</p>
                      <p className='Item2price' >Rs. {val.price}</p>
                     <Link to={`/processAttrect/${val.id}`} ><Button style={{border: "2px solid rgb(0, 140, 255)"}} >View</Button></Link>
                    </div>
                  </div>
                 </>
               )
             })}
           </div>
         </div>
      </div>
    </>
  )
}

export default AttrectTour