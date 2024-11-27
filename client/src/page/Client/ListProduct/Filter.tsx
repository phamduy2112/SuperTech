import React, { useEffect, useState } from 'react';
import { Button, Popover } from 'antd';
import './css/customCss.css';
import { CiFilter } from 'react-icons/ci';
import Selected from './Selected';
import OptionSelected from './OptionSelected';
import { ObjFilterTypeinterface } from './DataFilter';


// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Filter(data: any) {
    const [ObjFilter, setObjFilter] = useState<ObjFilterTypeinterface>({
        company: '',
        price: [],
        size: [],
        refreshRate: [],
        ram: [],
        rom: [],
        frontCamera: [],
        rearCamera: [],
    });


    const handleChangeProduct = (company: string) => {
        setObjFilter(prevState => ({ ...prevState, company }));
    };

    const handleSelectSize = (size: string) => {
        setObjFilter(prevState => ({ ...prevState, size: prevState.size.includes(size) ? prevState.size : [...prevState.size, size] }));
    };

    const handlePrice = (price: string) => {
        setObjFilter(prevState => ({ ...prevState, price: prevState.price.includes(price) ? prevState.price : [...prevState.price, price] }));

    };

    const handleSelectRate = (rate: string) => {
        setObjFilter(prevState => ({ ...prevState, refreshRate: prevState.refreshRate.includes(rate) ? prevState.refreshRate : [...prevState.refreshRate, rate] }));

    };

    const handleSelectRam = (ram: string) => {
        setObjFilter(prevState => ({ ...prevState, ram: prevState.ram.includes(ram) ? prevState.ram : [...prevState.ram, ram] }));

    };

    const handleSelectRom = (rom: string) => {
        setObjFilter(prevState => ({ ...prevState, rom: prevState.rom.includes(rom) ? prevState.rom : [...prevState.rom, rom] }));

    };

    const handleFrontCameras = (front: string) => {
        setObjFilter(prevState => ({ ...prevState, frontCamera: prevState.frontCamera.includes(front) ? prevState.frontCamera : [...prevState.frontCamera, front] }));

    };


    const handleRearCameras = (rear: string) => {
        setObjFilter(prevState => ({ ...prevState, rearCamera: prevState.rearCamera.includes(rear) ? prevState.rearCamera : [...prevState.rearCamera, rear] }));
    };


    useEffect(() => {
        console.log('S', ObjFilter);

        Object.keys(ObjFilter).forEach(item => {
            const key = item as keyof ObjFilterTypeinterface;
            // const Size = ObjFilter[key].some(size =>)
            // console.log(data.data);
            // const FilterProduct = data.data.filter((item: any) => {
            //     const FilterSize = ObjFilter

            // })
            // console.log(FilterProduct)
            // ObjFilter.size.length > 0 ? ObjFilter[key] : null
            // key === 'size' ?
            console.log(key)


        })


    }, [ObjFilter, data])



    const [open, setopen] = useState(false);
    const handleVisibleChange = (event: boolean) => {
        setopen(event);
    };


    return (
        <Popover open={open} placement="bottomLeft" trigger={'click'} title={<Selected />} content={
            <OptionSelected
                handleChangeProduct={handleChangeProduct}
                handleSelectSize={handleSelectSize}
                handlePrice={handlePrice}
                handleSelectRate={handleSelectRate}
                handleSelectRam={handleSelectRam}
                handleSelectRom={handleSelectRom}
                handleFrontCameras={handleFrontCameras}
                handleRearCameras={handleRearCameras}
            />

        }>
            <Button onClick={() => handleVisibleChange(!open)} className='text-[17px] font-bold'>
                <CiFilter />
                <span>Lọc</span>
            </Button>
        </Popover>



    )
}

export default Filter