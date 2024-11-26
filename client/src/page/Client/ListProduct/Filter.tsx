import React, { useEffect, useState } from 'react';
import { Button, Popover, Slider } from 'antd';
import './css/customCss.css';
import { CiFilter } from 'react-icons/ci';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { priceList, refreshRates, screenSizes, trademark, ramOptions, romOptions, frontCameras, rearCameras } from './DataFilter';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { getCatelogryThunkAll, getCatelogryThunkId } from '../../../redux/catelogry/catelogry.slice';
import { IoAddOutline } from 'react-icons/io5';
import { setlistProductByIdCategory } from '../../../redux/product/product.slice';
type ObjFilterType = {
    company: string,
    price: string[];
    size: string[];
    refreshRate: string[];
    ram: string[];
    rom: string[];
    frontCamera: string[];
    rearCamera: string[];
    cpu: string[];

};
interface FilterProps {
    data: number | undefined;
}

const Filter: React.FC<FilterProps> = ({ data }) => {
    const AppDispatch = useAppDispatch();
    const queryParams = new URLSearchParams();
    const [arrayFilterShowProduct, setarrayFilterShowProduct] = useState([]);



    const [ObjFilter, setObjFilter] = useState<ObjFilterType>({
        company: '',
        price: [],
        size: [],
        refreshRate: [],        // mảng cho tần số quét
        ram: [],                // mảng cho RAM
        rom: [],                // mảng cho ROM
        frontCamera: [],        // mảng cho camera trước
        rearCamera: [],         // mảng cho camera sau
        cpu: [],                // mảng cho hiệu suất (CPU)

    });

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listCateloriesOne = useAppSelector((state: any) => state.category.listCateloriesOne);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const listCatelories = useAppSelector((state: any) => state.category.listCatelories);

    const ProductsByIdComponent = useAppSelector((state) => state.product.listProductByIdCategory);

    const [open, setopen] = useState(false);
    const handleVisibleChange = (event: boolean) => {
        setopen(event);
    };




    useEffect(() => {
        AppDispatch(getCatelogryThunkId(data));

    }, [AppDispatch, data]);
    useEffect(() => {
        AppDispatch(getCatelogryThunkAll());

    }, [AppDispatch]);


    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const price = params.get('price')?.split(',') || [];
        const size = params.get('size')?.split(',') || [];
        const refreshRate = params.get('refreshRate')?.split(',') || [];
        const ram = params.get('ram')?.split(',') || [];
        const rom = params.get('rom')?.split(',') || [];
        const frontCamera = params.get('frontCamera')?.split(',') || [];
        const rearCamera = params.get('rearCamera')?.split(',') || [];
        const cpu = params.get('cpu')?.split(',') || [];



        setObjFilter((prev) => ({
            ...prev,
            price,
            size,
            refreshRate,
            ram,
            rom,
            frontCamera,
            rearCamera,
            cpu,

        }));

    }, []);



    useEffect(() => {
        if (listCateloriesOne && listCateloriesOne.category_name) {

            setObjFilter((prev) => ({
                ...prev,
                company: listCateloriesOne.category_name,
            }));
        }

    }, [listCateloriesOne]);



    function handleChangeProduct(key: string) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const NewId = listCatelories.find((element: any) => element.category_name.toLowerCase() === key)?.category_id;

        if (NewId != undefined) {
            const filterKeys = [
                'price',
                'size',
                'operatingSystem',
                'refreshRate',
                'ram',
                'rom',
                'frontCamera',
                'rearCamera',
                'cpu',
                'batteryCapacity',
                'fastCharging',
                'specialFeature'
            ];

            filterKeys.forEach(key => {
                const filterValue = ObjFilter[key as keyof ObjFilterType];
                if (Array.isArray(filterValue) && filterValue.length > 0) {
                    queryParams.append(key, filterValue.join(','));
                }
            });
            const url = `http://localhost:5173/list-sản-phẩm?category_dad=1&category=${NewId}&${queryParams.toString()}`;
            window.location.href = url;
        } else {
            console.log(NewId);
        }
    }


    const handleSelectSize = (size: string) => {
        setObjFilter((prev) => ({
            ...prev,
            size: prev.size.includes(size) ? prev.size : [...prev.size, size],
        }));
    };

    const handleprice = (price: string) => {
        setObjFilter((prev) => ({
            ...prev,
            price: prev.price.includes(price) ? prev.price : [...prev.price, price],
        }));
    };


    const handleSelectRate = (rate: string) => {
        setObjFilter((prev) => ({
            ...prev,
            refreshRate: prev.refreshRate.includes(rate)
                ? prev.refreshRate
                : [...prev.refreshRate, rate],
        }));
    };


    const handleSelectRam = (ram: string) => {
        setObjFilter((prev) => ({
            ...prev,
            ram: prev.ram.includes(ram) ? prev.ram : [...prev.ram, ram],
        }));
    };

    const handleSelectRom = (rom: string) => {
        setObjFilter((prev) => ({
            ...prev,
            rom: prev.rom.includes(rom) ? prev.rom : [...prev.rom, rom],
        }));
    };

    const FrontCameras = (frontCameras: string) => {
        setObjFilter((prev) => ({
            ...prev,
            frontCamera: prev.frontCamera.includes(frontCameras)
                ? prev.frontCamera
                : [...prev.frontCamera, frontCameras],
        }));
    };

    const RearCameras = (rearCameras: string) => {
        setObjFilter((prev) => ({
            ...prev,
            rearCamera: prev.rearCamera.includes(rearCameras)
                ? prev.rearCamera
                : [...prev.rearCamera, rearCameras],
        }));
    };



    const Deletefilter = (id: number, value: string) => {

        setObjFilter(prev => {
            const newFilter = { ...prev };

            if (newFilter.price) {
                newFilter.price = newFilter.price.filter(item => item !== value);
            }
            if (newFilter.size) {
                newFilter.size = newFilter.size.filter(item => item !== value);
            }

            if (newFilter.refreshRate) {
                newFilter.refreshRate = newFilter.refreshRate.filter(item => item !== value);
            }
            if (newFilter.ram) {
                newFilter.ram = newFilter.ram.filter(item => item !== value);
            }
            if (newFilter.rom) {
                newFilter.rom = newFilter.rom.filter(item => item !== value);
            }
            if (newFilter.frontCamera) {
                newFilter.frontCamera = newFilter.frontCamera.filter(item => item !== value);
            }
            if (newFilter.rearCamera) {
                newFilter.rearCamera = newFilter.rearCamera.filter(item => item !== value);
            }
            if (newFilter.cpu) {
                newFilter.cpu = newFilter.cpu.filter(item => item !== value);
            }


            return newFilter;
        });
    };





    useEffect(() => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const NewData = ProductsByIdComponent.filter((item: any) => {

            const screenSize = item.infor_product_infor_product.infor_screen.toLowerCase();
            const Ram = item.infor_product_infor_product.infor_ram.toLowerCase();
            const Rom = item.infor_product_infor_product.infor_rom.toLowerCase();
            const Rates = item.infor_product_infor_product.infor_scanning_frequency.toLowerCase();
            const font = item.infor_product_infor_product.infor_frontCamera.toLowerCase();
            const rear = item.infor_product_infor_product.infor_rearCamera.toLowerCase();
            const cpuDB = item.infor_product_infor_product.infor_cpu.toLowerCase();


            const matchesSize = ObjFilter.size.length > 0
                ? ObjFilter.size.some((size) => screenSize === size.toLowerCase())
                : true;

            const matchesRam = ObjFilter.ram.length > 0
                ? ObjFilter.ram.some((ram) => Ram === ram.toLowerCase())
                : true;

            const matchesRom = ObjFilter.rom.length > 0
                ? ObjFilter.rom.some((rom) => Rom === rom.toLowerCase())
                : true;

            const matchesRates = ObjFilter.refreshRate.length > 0
                ? ObjFilter.refreshRate.some((refreshRate) => Rates === refreshRate.toLowerCase())
                : true;


            const matchesfont = ObjFilter.frontCamera.length > 0
                ? ObjFilter.frontCamera.some((frontCamera) => font === frontCamera.toLowerCase())
                : true;

            const matchesrear = ObjFilter.rearCamera.length > 0
                ? ObjFilter.rearCamera.some((rearCamera) => rear === rearCamera.toLowerCase())
                : true;


            const matchescpu = ObjFilter.cpu.length > 0
                ? ObjFilter.cpu.some((cpu) => cpuDB === cpu.toLowerCase())
                : true;






            return matchesSize && matchesRam && matchesRom && matchesRates && matchesfont && matchesrear && matchescpu

        });

        setarrayFilterShowProduct(NewData)
        // setarrayFilterShowProduct(NewData);
    }, [ObjFilter.cpu, ObjFilter.frontCamera, ObjFilter.ram, ObjFilter.rearCamera, ObjFilter.refreshRate, ObjFilter.rom, ObjFilter.size, ProductsByIdComponent]);




    useEffect(() => {
        AppDispatch(setlistProductByIdCategory(arrayFilterShowProduct))
    }, [AppDispatch, arrayFilterShowProduct])








    const ArrayFilter = (item: string[]) => {
        return item.map((filter, index) => (
            <Button
                key={index}  // sử dụng index làm key, nếu `filter` không có giá trị unique
                className='min-w-[70px] h-[40px] flex justify-center items-center'
                variant="outlined"
            >
                <span>{filter}</span>
                <IoAddOutline
                    onClick={() => Deletefilter(index, filter)} // Đảm bảo `Deletefilter` xử lý đúng
                    className='transform transition-all duration-500 hover:text-[red] text-[25px] rotate-[45deg]'
                />
            </Button>
        ));
    }

    const NotaArray = (key: number, item: string) => {
        return (
            <Button
                key={key}
                className='min-w-[70px] h-[40px] flex justify-center items-center'
                variant="outlined"
            >

                <span>{item}</span>

            </Button>
        )
    }

    function Selected() {
        return (
            <div className='flex flex-wrap max-w-[1360px] gap-[10px] text-[17px] justify-start items-center'>
                <span>Đã Chọn :</span>
                {Object.entries(ObjFilter).map(([key, item]) => (
                    Array.isArray(item) ? ArrayFilter(item) : NotaArray(key, item)
                ))}

            </div>
        );
    }
    function OptionSelected() {
        const [priceclick, setPriceClick] = useState(false)
        function orPrice() {
            setPriceClick(!priceclick);
        }

        const [priceRange, setPriceRange] = useState([0, 70000000]);


        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const handleChange = (value: any) => {
            setPriceRange(value);
        };

        return (
            <>
                <div className="grid border-t-[1px] grid-cols-3 box-border gap-[15px] text-[14px] p-6  bg-white rounded-lg ">
                    <div className="flex flex-col col-span-3">
                        <span className="font-bold mb-1 ">Hãng</span>
                        <div className="flex flex-wrap gap-3">
                            {trademark.map((item, index) => (
                                <Button
                                    key={index}
                                    className="min-w-[60px] h-[35px] flex justify-center items-center"
                                    color={item.label.toLowerCase() === (typeof ObjFilter['company'] === 'string' ? ObjFilter['company'].toLowerCase() : '') ? 'primary' : 'default'}
                                    variant="outlined"
                                    onClick={() => handleChangeProduct(item.label.toLowerCase())}
                                >
                                    <img className="w-full h-full object-cover" src={item.url} alt={item.label} />
                                </Button>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold mb-1">Giá</span>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                priceList.map((item, index) => (
                                    <Button key={index} onClick={() => handleprice(item.price)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                                        <span>{item.price}</span>
                                    </Button>
                                ))
                            }
                            <Button onClick={orPrice} className="col-span-3 min-w-[60px] text-[14px] border-0 bg-transparent h-[35px] flex justify-center items-center text-blue-500">
                                <HiAdjustmentsHorizontal />
                                <span>Hoặc chọn mức giá</span>
                            </Button>
                            <div className={`${priceclick != false ? 'block' : 'hidden'} col - span - 3`}>
                                <Slider
                                    range
                                    min={0}
                                    max={70000000}
                                    onChange={handleChange}
                                    value={priceRange}
                                />
                                <div>
                                    Giá: {priceRange[0].toLocaleString()} - {priceRange[1].toLocaleString()} VNĐ
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold mb-1">Kích thước màn hình</span>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                screenSizes.map((item, index) => (
                                    <Button key={index} onClick={() => handleSelectSize(item.size)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                                        <span>{item.size}</span>
                                    </Button>
                                ))
                            }

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold mb-1">Tần số quét</span>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                refreshRates.map((item, index) => (
                                    <Button key={index} onClick={() => handleSelectRate(item.rate)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                                        <span>{item.rate}</span>
                                    </Button>
                                ))
                            }

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold mb-1">RAM</span>
                        <div className="grid grid-cols-4 gap-3">
                            {
                                ramOptions.map((item, index) => (
                                    <Button key={index} onClick={() => handleSelectRam(item.capacity)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                                        <span>{item.capacity}</span>
                                    </Button>
                                ))
                            }

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold mb-1">Bộ nhớ trong</span>
                        <div className="grid grid-cols-3 gap-3">

                            {
                                romOptions.map((item, index) => (
                                    <Button key={index} onClick={() => handleSelectRom(item.capacity)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                                        <span>{item.capacity}</span>
                                    </Button>
                                ))
                            }

                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold mb-1">Camera trước</span>
                        <div className="grid grid-cols-3 gap-3">
                            {
                                frontCameras.map((item, index) => (
                                    <Button key={index} onClick={() => FrontCameras(item.resolution)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                                        <span>{item.resolution}</span>
                                    </Button>
                                ))
                            }
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <span className="font-bold mb-1">Camera sau</span>
                        <div className="grid grid-cols-3  gap-3">
                            {
                                rearCameras.map((item, index) => (
                                    <Button key={index} onClick={() => RearCameras(item.resolution)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                                        <span>{item.resolution}</span>
                                    </Button>
                                ))
                            }
                        </div>
                    </div>
                    <div className="flex border-t-[1px] pt-6 flex-row justify-center items-center gap-[5px] col-span-3 mt-4">
                        <Button onClick={() => handleVisibleChange(false)} color='danger' className="min-w-[200px] h-[50px] flex justify-center items-center" variant="outlined">
                            <span>Bỏ chọn</span>
                        </Button>
                        <Button color='primary' onClick={() => handleVisibleChange(false)} className="min-w-[200px] h-[50px] flex justify-center items-center" variant="solid">
                            {
                                arrayFilterShowProduct.length != 0 ? <span>Xem thêm {arrayFilterShowProduct.length} kết quả</span>
                                    : <span>Không có kết quả</span>

                            }
                        </Button>
                    </div>
                </div >


            </>
        );

    }

    return (
        <Popover open={open} placement="bottomLeft" trigger={'click'} title={Selected} content={<OptionSelected />}>
            <Button onClick={() => handleVisibleChange(!open)} className='text-[17px] font-bold'>
                <CiFilter />
                <span>Lọc</span>
            </Button>
        </Popover>



    )
}

export default Filter