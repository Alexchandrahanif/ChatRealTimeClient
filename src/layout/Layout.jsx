import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidabar from './Sidebar'

const Layout = () => {
  return (
    <div className="w-screen h-screen flex ">
      <div className="w-[30%] h-full ">
        <Sidabar />
      </div>
      <div className="bg-slate-200 w-[70%]">
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
