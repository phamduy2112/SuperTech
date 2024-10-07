import React from 'react'
import AdminHeader from './Header/AdminHeader'
import { Outlet } from 'react-router-dom'

function AdminTemplate() {
  return (
    <div className='roboto'>
 

    <div className=''>
   <AdminHeader/>
 <Outlet />

</div>
</div>
  )
}

export default AdminTemplate
