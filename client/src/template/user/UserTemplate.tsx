
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'







function UserTemplate() {


  return (
    <div className='roboto'>
 

         <div className=''>
        <Header/>
      <Outlet />
      <Footer />
    </div>
    </div>
 
  )
}

export default UserTemplate
