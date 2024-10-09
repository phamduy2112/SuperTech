import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminSideBar from './Header/AdminSideBar'
import AdminHeader from './Header/AdminHeader'

function AdminTemplate() {
  return (
    <div className='roboto'><div className='flex'>
    <AdminSideBar/>

    <div className='  lg:ml-[310px]  sm:ml-0 flex-1 bg-slate-400'>
      <AdminHeader/>
      <Outlet />
    </div>
  

</div>
</div>

  )
}

export default AdminTemplate
