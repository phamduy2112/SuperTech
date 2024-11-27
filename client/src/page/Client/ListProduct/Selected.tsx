import React, { useState } from 'react'
import { ObjFilterTypeinterface } from './DataFilter';

function Selected() {
    return (
        <div className='flex flex-wrap max-w-[1360px] gap-[10px] text-[17px] justify-start items-center'>
            <span>Đã Chọn :</span>
            {/* {Object.entries(ObjFilter).map(([key, item]) => (
                Array.isArray(item) ? ArrayFilter(item) : NotaArray(key, item)
            ))} */}

        </div>
    );
}

export default Selected