import Navbar  from "../Block/Navbar"
import Sidebar  from "../Block/Sidebar"
import React from "react"
import {Outlet} from "react-router-dom"

const WebLayout:React.FC = () => {
  return (
    <div>
        <Navbar />
        <Sidebar /> 
        <Outlet />
    </div>
  )
}

export default WebLayout