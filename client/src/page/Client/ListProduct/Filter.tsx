import React, { useEffect, useState } from 'react';
import { Button, Popover } from 'antd';
import './css/customCss.css';
import { CiFilter } from 'react-icons/ci';
import Selected from './Selected';
import OptionSelected from './OptionSelected';
import { ObjFilterTypeinterface } from './DataFilter';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { useNavigate } from 'react-router-dom'; // Import useNavigate từ React Router
import { setDatafilterSlice } from '../../../redux/product/product.slice';



// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Filter(data: any) {

    const Navigate = useNavigate();

    const AppDispatch = useAppDispatch();






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
    useEffect(() => {
        const Company: string = data.data.catelogries.find((item: any) => item.category_id == data.data.dataCate.category);
        if (Company != undefined) {
            setObjFilter(prevState => ({ ...prevState, company: Company.category_name }));
        }
    }, [data.data.catelogries, data.data.dataCate.category])



    const handleChangeProduct = (company: string) => {
        const CategoryId: any = data.data.catelogries.find((item: any) => item.category_name.toLowerCase() === company.toLowerCase());
        if (CategoryId) {
            setObjFilter(prevState => ({ ...prevState, company: CategoryId.category_name }));
            Navigate(`/list-sản-phẩm?category_dad=${CategoryId.category_dad}&category=${CategoryId.category_id}`);
        }
    };
    const handleSelectSize = (size: string) => {
        setObjFilter(prevState => ({ ...prevState, size: prevState?.size.includes(size) ? prevState.size : [...prevState.size, size] }));
    };

    const handlePrice = (price: string) => {
        setObjFilter(prevState => ({ ...prevState, price: prevState?.price.includes(price) ? prevState.price : [...prevState.price, price] }));

    };

    const handleSelectRate = (rate: string) => {
        setObjFilter(prevState => ({ ...prevState, refreshRate: prevState?.refreshRate.includes(rate) ? prevState.refreshRate : [...prevState.refreshRate, rate] }));

    };

    const handleSelectRam = (ram: string) => {
        setObjFilter(prevState => ({ ...prevState, ram: prevState?.ram.includes(ram) ? prevState.ram : [...prevState.ram, ram] }));

    };

    const handleSelectRom = (rom: string) => {
        setObjFilter(prevState => ({ ...prevState, rom: prevState?.rom.includes(rom) ? prevState.rom : [...prevState.rom, rom] }));

    };

    const handleFrontCameras = (front: string) => {
        setObjFilter(prevState => ({ ...prevState, frontCamera: prevState?.frontCamera.includes(front) ? prevState.frontCamera : [...prevState.frontCamera, front] }));

    };


    const handleRearCameras = (rear: string) => {
        setObjFilter(prevState => ({ ...prevState, rearCamera: prevState?.rearCamera.includes(rear) ? prevState.rearCamera : [...prevState.rearCamera, rear] }));
    };



    const Deletefilter = (index: number, filter: string) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        setObjFilter((prev: any) => {
            const newFilter = { ...prev };
            const filterKeys = [
                'price',
                'size',
                'ram',
                'rom',
                'frontCamera',
                'rearCamera',
                'cpu',
                'refreshRate'
            ];

            filterKeys.forEach(key => {
                if (newFilter[key]) {
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    newFilter[key] = newFilter[key].filter((item: any) => item !== filter);
                }
            });

            return newFilter;
        });
    };

    const [Datafilter, setDatafilter] = useState([]);


    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const Data = data.data.listProduct.filter((item: any) => {
            const PriceFilter = item.product_price;
            const screenSize = item.infor_product_infor_product.infor_screen?.toLowerCase();
            const ramFilter = item.infor_product_infor_product.infor_ram?.toUpperCase();
            const rateFilter = item.infor_product_infor_product.infor_scanning_frequency?.toUpperCase();
            const frontCameraFilter = item.infor_product_infor_product.infor_frontCamera?.toUpperCase();
            const rearCameraFilter = item.infor_product_infor_product.infor_rearCamera?.toUpperCase();
            const romFilter = item.infor_product_infor_product.infor_rom?.toUpperCase();

            const conditions = [
                ObjFilter.price.length === 0 || ObjFilter.price.some(priceRange => {
                    switch (priceRange) {
                        case 'Dưới 5 triệu':
                            return PriceFilter < 5000000;
                        case 'Dưới 10 triệu':
                            return PriceFilter < 10000000;
                        case 'Dưới 20 triệu':
                            return PriceFilter < 20000000;
                        case 'Dưới 30 triệu':
                            return PriceFilter < 30000000;
                        case 'Trên 30 triệu':
                            return PriceFilter > 30000000;
                        default:
                            return true;
                    }
                }),
                ObjFilter.size.length === 0 || ObjFilter.size.some(size => screenSize === size.toLowerCase()),
                ObjFilter.ram.length === 0 || ObjFilter.ram.some(ram => ramFilter === ram.toUpperCase()),
                ObjFilter.rom.length === 0 || ObjFilter.rom.some(rom => romFilter === rom.toUpperCase()),
                ObjFilter.refreshRate.length === 0 || ObjFilter.refreshRate.some(refreshRate => rateFilter === refreshRate.toUpperCase()),
                ObjFilter.frontCamera.length === 0 || ObjFilter.frontCamera.some(frontCamera => frontCameraFilter === frontCamera.toUpperCase()),
                ObjFilter.rearCamera.length === 0 || ObjFilter.rearCamera.some(rearCamera => rearCameraFilter === rearCamera.toUpperCase())
            ];

            return conditions.every(condition => condition);
        });

        setDatafilter(Data);



    }, [data, ObjFilter]);

    const [open, setopen] = useState(false);
    const handleVisibleChange = (event: boolean) => {
        setopen(event);
    };


    return (
        <Popover open={open} placement="bottomLeft" trigger={'click'}
            title={<Selected

                Deletefilter={Deletefilter}
                ObjFilter={ObjFilter}
            />}
            content={<OptionSelected
                Datafilter={Datafilter}
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