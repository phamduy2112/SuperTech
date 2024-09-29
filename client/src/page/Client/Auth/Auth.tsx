
import { Outlet } from 'react-router-dom'




function AuthTemplate() {


  return (
    <div className='w-[80%] m-auto'>
     
      <Outlet />
   
    </div>
  )
}

export default AuthTemplate
