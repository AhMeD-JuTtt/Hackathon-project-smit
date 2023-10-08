import React from 'react'
import { Outlet } from 'react-router-dom'
import SideBar from '../Components/SideBar'

const Root = () => {
  return (
    <div style={{display:"flex", justifyContent:"space-between"}}>
        <SideBar />
        <div style={{width:"100%", margin:"60px 30px"}}>
            <main>
                <Outlet />
            </main>
        </div>
    </div>

  )
}

export default Root