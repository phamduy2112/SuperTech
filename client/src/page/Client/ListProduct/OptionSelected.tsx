import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import { ObjFilterTypeinterface, priceList } from './DataFilter';
import { useAppSelector } from '../../../redux/hooks';

interface OptionSelectedProps {
    handleChangeProduct: (company: string, id: number) => void;
    handleSelectSize: (size: string) => void;
    handlePrice: (price: string) => void;
    handleSelectRate: (rate: string) => void;
    handleSelectRam: (ram: string) => void;
    handleSelectRom: (rom: string) => void;
    handleFrontCameras: (front: string) => void;
    handleRearCameras: (rear: string) => void;
    HandClick: (boolean: boolean) => void;
    RemoveClick: (boolean: boolean) => void;
    Datafilter: any[];
    ObjFilter: ObjFilterTypeinterface;
    dataId: number;
    handlesystem: (systemchose: string) => void;
    handlecpu: (cpuChose: string) => void;
    handlechip_battery: (chip_batteryChose: string) => void;
    handlemore: (moreChose: string) => void;

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
    HandClick,
    RemoveClick,
    ObjFilter,
    dataId,
    handlesystem,
    handlecpu,
    handlechip_battery,
    handlemore,


}) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ListCatelogry_dad = useAppSelector((state: any) => state.category.catelogryDad);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const inforProduct = useAppSelector((state: any) => state.product.inforProduct);
    const ListProduct = useAppSelector((state: any) => state.product.listProduct);


    const isSelected = (array: string[], value: string) => array.includes(value);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    useEffect(() => {
        if (Array.isArray(inforProduct) && inforProduct.length > 0) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const ArrayFilter = ListProduct.filter((item: any) =>
                inforProduct.some(inforItem => inforItem.infor_product === item.infor_product)
            );
            setFilteredProducts(ArrayFilter);
        }
    }, [inforProduct, ListProduct]);
    console.log('filteredProducts', filteredProducts)




    const [ScreenValues, setScreenValues] = useState<string[]>([]);
    const [Ram, setRam] = useState<string[]>([]);
    const [Rom, setRom] = useState<string[]>([]);
    const [ScanningFrequency, setscanning_frequency] = useState<string[]>([]);
    const [FrontCameras, setscanning_frontCamera] = useState<string[]>([]);
    const [RearCameras, setscanning_rearCamera] = useState<string[]>([]);
    const [Scanningsystem, setscanning_system] = useState<string[]>([]);
    const [Scanningcpu, setscanning_cpu] = useState<string[]>([]);
    const [Scanningchip_battery, setscanning_chip_battery] = useState<string[]>([]);
    const [Scanningmore, setscanning_more] = useState<string[]>([]);



    useEffect(() => {
        // Kiểm tra inforProduct trước khi thực hiện lọc
        if (Array.isArray(inforProduct) && inforProduct.length > 0) {
            const uniqueScreenValues = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_screen)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((screen: any) => screen && screen.trim() !== '')
                )
            ];
            const uniqueRam = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_ram)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((ram: any) => ram && ram.trim() !== '')
                )
            ]


            const uniqueRom = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_rom)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((rom: any) => rom && rom.trim() !== '')
                )
            ]

            const unique_scanning_frequency = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_scanning_frequency)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((item: any) => item && item.trim() !== '')
                )
            ]
            const unique_frontCamera = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_frontCamera)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((item: any) => item && item.trim() !== '')
                )
            ]
            const unique_rearCamera = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_rearCamera)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((item: any) => item && item.trim() !== '')
                )
            ]
            const unique_system = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_system)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((item: any) => item && item.trim() !== '')
                )
            ]
            const unique_cpu = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_cpu)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((item: any) => item && item.trim() !== '')
                )
            ]
            const unique_chip_battery = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_chip_battery)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((item: any) => item && item.trim() !== '')
                )
            ]
            const unique_more = [
                ...new Set(
                    inforProduct
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .map((item: any) => item.infor_more)
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        .filter((item: any) => item && item.trim() !== '')
                )
            ]



            setScreenValues(uniqueScreenValues);
            setRam(uniqueRam);
            setRom(uniqueRom);
            setscanning_frequency(unique_scanning_frequency);
            setscanning_frontCamera(unique_frontCamera);
            setscanning_rearCamera(unique_rearCamera);
            setscanning_system(unique_system);
            setscanning_cpu(unique_cpu);
            setscanning_chip_battery(unique_chip_battery);
            setscanning_more(unique_more)


        }
    }, [inforProduct]);



    const categoryDadNames: { [key: number]: string } = {
        1: "Điện thoại",
        2: "Laptop",
        3: "Sạc dự phòng",
        4: "Sạc/Cáp sạc",
        5: "Ốp Lưng",
        6: "Tai Nghe",
        7: "Cáp Chuyển Đổi",


    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any


    return (
        <>
            <div className="grid border-t-[1px] grid-cols-3 box-border gap-[15px] text-[14px] p-6 bg-white rounded-lg">
                <div className="flex flex-col col-span-3">
                    <div className="font-bold">Các hãng {
                        categoryDadNames[dataId]

                    } </div>
                    <div className="flex flex-wrap gap-3">
                        {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            ListCatelogry_dad?.map((item: any, index: number) => (
                                <Button
                                    key={index}
                                    className="min-w-[60px] h-[35px] flex justify-center items-center"
                                    type={item.category_name.toLowerCase() === ObjFilter.company.toLowerCase() ? 'primary' : 'default'}
                                    onClick={() => handleChangeProduct(item.category_name.toLowerCase(), item.category_dad)}
                                >
                                    <span>{item.category_name}</span>
                                </Button>
                            ))}
                    </div>
                </div>
                <div className={`${dataId != 3 && dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`}>
                    <span className="font-bold mb-1">Hệ điều hành</span>
                    <div className="grid grid-cols-3 gap-3">
                        {
                            filteredProducts.map((value, i) =>
                                Scanningmore.map((item, index) =>
                                    <span>
                                        {item}
                                    </span>
                                )
                            )
                        }
                    </div>
                </div>

                <div className="flex flex-col">
                    <span className="font-bold mb-1">Giá</span>
                    <div className="grid grid-cols-3 gap-3">
                        {priceList.map((item, index) => (
                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.price, item.price) ? 'primary' : 'default'}
                                onClick={() => handlePrice(item.price)}
                            >
                                <span>{item.price}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={`${dataId != 3 && dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`}>
                    <span className="font-bold mb-1">Kích thước màn hình</span>
                    <div className="grid grid-cols-3 gap-3">
                        {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            ScreenValues.map((item: any, index) => (
                                <Button
                                    key={index}
                                    className="min-w-[60px] h-[35px] flex justify-center items-center"
                                    type={isSelected(ObjFilter.size, item) ? 'primary' : 'default'}
                                    onClick={() => handleSelectSize(item)}
                                >
                                    <span>{item}</span>
                                </Button>
                            ))}



                    </div>
                </div>
                <div className={`${dataId != 3 && dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`}>
                    <span className="font-bold mb-1">Tần số quét</span>
                    <div className="grid grid-cols-3 gap-3">
                        {ScanningFrequency.map((item, index) => (



                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.refreshRate, item) ? 'primary' : 'default'}
                                onClick={() => handleSelectRate(item)}
                            >
                                <span>{item}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={`${dataId != 3 && dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`}>
                    <span className="font-bold mb-1">RAM</span>
                    <div className="grid grid-cols-4 gap-3">
                        {Ram.map((item, index) => (
                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.ram, item) ? 'primary' : 'default'}
                                onClick={() => handleSelectRam(item)}
                            >
                                <span>{item}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={`${dataId != 3 && dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`}>
                    <span className="font-bold mb-1">Bộ nhớ trong</span>
                    <div className="grid grid-cols-3 gap-3">
                        {Rom.map((item, index) => (
                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.rom, item) ? 'primary' : 'default'}
                                onClick={() => handleSelectRom(item)}
                            >
                                <span>{item}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={`${dataId != 3 && dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`}>
                    <span className="font-bold mb-1">Chíp xử lý</span>
                    <div className="grid grid-cols-3 gap-3">
                        {Scanningcpu.map((item, index) => (
                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.cpu, item) ? 'primary' : 'default'}
                                onClick={() => handlecpu(item)}
                            >
                                <span>{item}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={`${dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`} >
                    <span className="font-bold mb-1">Dung lượng Pin</span>
                    <div className="grid grid-cols-3 gap-3">
                        {Scanningchip_battery.map((item, index) => (
                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.chip_battery, item) ? 'primary' : 'default'}
                                onClick={() => handlechip_battery(item)}
                            >
                                <span>{item}</span>
                            </Button>
                        ))}
                    </div>
                </div>


                <div className={`${dataId != 3 && dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`}>
                    <span className="font-bold mb-1">Camera trước</span>
                    <div className="grid grid-cols-3 gap-3">
                        {FrontCameras.map((item, index) => (
                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.frontCamera, item) ? 'primary' : 'default'}
                                onClick={() => handleFrontCameras(item)}
                            >
                                <span>{item}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className={`${dataId != 2 && dataId != 3 && dataId != 4 && dataId != 5 && dataId != 6 && dataId != 7 ? 'visible' : 'hidden'} flex flex-col`}>
                    <span className="font-bold mb-1">Camera sau</span>
                    <div className="grid grid-cols-3 gap-3">
                        {RearCameras.map((item, index) => (
                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.rearCamera, item) ? 'primary' : 'default'}
                                onClick={() => handleRearCameras(item)}
                            >
                                <span>{item}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold mb-1">Thông tin thêm</span>
                    <div className="grid grid-cols-3 gap-3">
                        {Scanningmore.map((item, index) => (
                            <Button
                                key={index}
                                className="min-w-[60px] h-[35px] flex justify-center items-center"
                                type={isSelected(ObjFilter.more, item) ? 'primary' : 'default'}
                                onClick={() => handlemore(item)}
                            >
                                <span>{item.replace(/<p>|<\/p>/g, '')}</span>
                            </Button>
                        ))}
                    </div>
                </div>
                <div className="flex border-t-[1px] pt-6 flex-row justify-center items-center gap-[5px] col-span-3 mt-4">
                    <Button color='danger' onClick={() => RemoveClick(false)} className="min-w-[200px] h-[50px] flex justify-center items-center" variant="outlined">
                        <span>Bỏ chọn</span>
                    </Button>
                    <Button onClick={() => HandClick(true)} color='primary' className="min-w-[200px] h-[50px] flex justify-center items-center" variant="solid">
                        {Datafilter.length !== 0 ? <span>Hiện có {Datafilter.length} kết quả</span> : <span>Không có kết quả</span>}
                    </Button>
                </div>
            </div>
        </>
    );
}

export default OptionSelected;