
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'

import { Suspense } from 'react'
import useScrollToTop from '../../hooks/UseSrollTop'






function UserTemplate() {

  useScrollToTop()
  return (
    <div className='roboto bg-[#ececec]'>
 

         <div className=''>
        <Header/>
        <Suspense >
  <Outlet />
</Suspense>

      <Footer />
    </div>
    </div>
 
  )
}

export default UserTemplate
