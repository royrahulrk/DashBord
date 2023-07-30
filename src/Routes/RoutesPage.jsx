import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashbord from "../Pages/Dashbord/Dashbord"
import Inventory from "../Pages/Inventory/Inventory"
import Orders from "../Pages/Orders/Orders"
import Customers from "../Pages/Customers/Customers"
const RoutesPage = () => {
  return (
    <>
     <Routes>
      <Route path='/' element={<Dashbord/>} />
      <Route path='/inventory' element={<Inventory/>} />
      <Route path='/orders' element={<Orders/>} />
      <Route path='/customers' element={<Customers/>} />
     </Routes>
    
    
    </>
  )
}

export default RoutesPage