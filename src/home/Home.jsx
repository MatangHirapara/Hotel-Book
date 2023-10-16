import React from 'react'
import { Routes,Route } from 'react-router-dom'
// import Count from '../component/counter/count'
import StayPage from '../component/pages/stayPage/StayPage'
import Toor from '../component/pages/toorTravel/Toor'
import Flight from '../component/pages/flight/Flight'
import BookId from '../component/pages/bookFlight/BookId'
import BookFlight from '../component/pages/bookFlight/BookFlight'
import TravelPack from '../component/pages/toorTravel/TravelPack'
import Email from '../component/topbar/Email'
import Rent from '../component/pages/carRental/Rent'
import Car from '../component/pages/carRental/Car'
import Attrection from '../component/pages/attrection/Attrection'
import ProcessAttrect from '../component/pages/attrection/ProcessAttrect'
import AttrectTour from '../component/pages/attrection/AttrectTour'
const Home = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<StayPage/>} />
        <Route path='/travel/:id' element={<TravelPack/>} />
        <Route path='/toor' element={<Toor/>} />
        <Route path='/flight' element={<Flight/>} />
        <Route path='/id/:sheet' element={<BookId/>} />
        <Route path='/book' element={<BookFlight/>} />
        <Route path='/email' element={<Email/>} />
        <Route path='/car' element={<Car/>} />
        <Route path='/rent' element={<Rent/>} />
        <Route path='/attrection' element={<Attrection/>} />
        <Route path='/attrectTour' element={<AttrectTour/>} />
        <Route path='/processAttrect/:id' element={<ProcessAttrect/>} />
      </Routes>
    </div>
  )
}

export default Home