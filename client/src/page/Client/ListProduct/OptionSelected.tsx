import React, { useState } from 'react'
import { Button, Slider } from 'antd';
import { HiAdjustmentsHorizontal } from 'react-icons/hi2';
import { frontCameras, priceList, ramOptions, rearCameras, refreshRates, romOptions, screenSizes, trademark } from './DataFilter';
interface OptionSelectedProps {
    handleChangeProduct: (company: string) => void;
    handleSelectSize: (size: string) => void;
    handlePrice: (price: string) => void;
    handleSelectRate: (rate: string) => void;
    handleSelectRam: (ram: string) => void;
    handleSelectRom: (rom: string) => void;
    handleFrontCameras: (front: string) => void;
    handleRearCameras: (rear: string) => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Datafilter: any[];

}
const OptionSelected: React.FC<OptionSelectedProps> = ({
    handleChangeProduct,
    handleSelectSize,
    handlePrice,
    handleSelectRate,
    handleSelectRam,
    handleSelectRom,
    handleFrontCameras,
    handleRearCameras,
    Datafilter,
}) => {
    const [priceclick, setPriceClick] = useState(false);
    const [priceRange, setPriceRange] = useState([0, 70000000]);

    const orPrice = () => {
        setPriceClick(!priceclick);
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (value: any) => {
        setPriceRange(value);
    };

    const searchParams = new URLSearchParams(location.search);

    const category = searchParams.get('category');

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
                                // color={item.label.toLowerCase() === (typeof ObjFilter['company'] === 'string' ? ObjFilter['company'].toLowerCase() : '') ? 'primary' : 'default'}
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
                                <Button key={index} onClick={() => handlePrice(item.price)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
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
                                <Button key={index} onClick={() => handleFrontCameras(item.resolution)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
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
                                <Button key={index} onClick={() => handleRearCameras(item.resolution)} className="min-w-[60px] h-[35px] flex justify-center items-center" variant="outlined">
                                    <span>{item.resolution}</span>
                                </Button>
                            ))
                        }
                    </div>
                </div>
                <div className="flex border-t-[1px] pt-6 flex-row justify-center items-center gap-[5px] col-span-3 mt-4">
                    <Button color='danger' className="min-w-[200px] h-[50px] flex justify-center items-center" variant="outlined">
                        <span>Bỏ chọn</span>
                    </Button>
                    <Button color='primary' className="min-w-[200px] h-[50px] flex justify-center items-center" variant="solid">
                        {
                            Datafilter.length != 0 ? <span>Xem thêm {Datafilter.length} kết quả</span>
                                : <span>Không có kết quả</span>

                        }
                    </Button>
                </div>
            </div >


        </>
    );

}

export default OptionSelected