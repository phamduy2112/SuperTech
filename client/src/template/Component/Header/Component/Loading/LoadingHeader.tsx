import React from 'react'
import Skeleton from 'react-loading-skeleton'

function LoadingHeader() {
  return (
    <Skeleton className="container relative m-auto flex desktopPlus:h-[720px] desktopPlus:w-[1280px] mobile:h-[257px] mobile:w-[358px] flex-col justify-end overflow-hidden rounded-[20px] bg-[#767676] text-white ipad:w-[700px] ipad:h-[400px] desktop:h-[570px] desktop:w-[1100px]">
       
    </Skeleton>

  )
}

export default LoadingHeader