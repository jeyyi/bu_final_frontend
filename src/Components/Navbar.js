import React from 'react'
import {Outlet} from "react-router-dom"
const Navbar = () => {
  return (
    <div>This is the navbar
        <Outlet/>
    </div>
  )
}

export default Navbar