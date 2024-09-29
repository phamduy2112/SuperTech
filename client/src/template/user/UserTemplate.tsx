
import { Outlet } from 'react-router-dom'
import Header from '../Component/Header/Header'
import Footer from '../Component/Footer/Footer'






function UserTemplate() {


  return (
    <div className='w-[80%] m-auto'>
        <Header/>
      <Outlet />
      <Footer />
    </div>
  )
}

export default UserTemplate
