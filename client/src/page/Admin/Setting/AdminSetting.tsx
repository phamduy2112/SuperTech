import React, { useEffect, useState } from 'react';
import { Input, Popover, Button, Row, Col, Modal, Tabs, Divider, Select,Upload,message } from 'antd';
import { FaExclamationTriangle, FaPlus,FaBookmark,FaUserAlt,FaBell,FaCubes,FaImage,FaRegCreditCard, FaLock  } from 'react-icons/fa';
import { SketchPicker } from 'react-color';
import {IMG_BACKEND_SETTING} from '../../../constants';
import { getsetting, updatesettingId } from '../../../service/setting/setting.service';
import { getbank, updatebank } from '../../../service/bank/bank.service';
function AdminSetting() {
    const { TabPane } = Tabs; 
    const [isTokenVisible, setIsTokenVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    const fetchPasswordToken = async () => {
        setIsLoading(true);
        try {
            const response = await getsetting();
            const settingsMap = {};
            response.data.content.forEach(setting => {
                settingsMap[setting.id] = setting.value;
            });
            setIsLoading(false);
            return settingsMap[11].trim();
        } catch (error) {
            console.error('Failed to fetch password token:', error);
            setIsLoading(false);
            return null;
        }
    };
    
    const handlePasswordSubmit = async (inputPassword) => {
        setIsLoading(true);
        try {
            const correctPassword = await fetchPasswordToken();
            if (inputPassword === correctPassword) {
                setIsTokenVisible(true);
                Modal.destroyAll();
            } else {
                alert('Mật khẩu không chính xác!');
            }
        } catch (error) {
            console.error('Error fetching password:', error);
            alert('Lỗi khi tải dữ liệu!');
        } finally {
            setIsLoading(false);
        }
    };

    const showPasswordModal = () => {
        let tempPassword;
        Modal.confirm({
            title: 'Nhập mật khẩu để xem token',
            content: (
                <Input
                    type="password"
                    onChange={(e) => tempPassword = e.target.value} 
                    onPressEnter={() => handlePasswordSubmit(tempPassword)}
                />
            ),
            onOk: () => handlePasswordSubmit(tempPassword),
            onCancel: () => { Modal.destroyAll(); }
        });
    };
    const [settings, setSettings] = useState({
        title: '',
        description: '',
        author: '',
        color: '#fff'
    });
    const [originalSettings, setOriginalSettings] = useState({});
    const [visible, setVisible] = useState(false);
    const [bankDetails, setBankDetails] = useState({
        
        short_name: '',
        accountName: '',
        accountNumber: '',
        contentAutobank: '',
    });
    const fetchSettings = async () => {
        try {
            const response = await getsetting();
            const settingsMap = {};
            response.data.content.forEach(setting => {
                settingsMap[setting.id] = setting.value;
            });
            setSettings({
                title: settingsMap[1],
                description: settingsMap[2],
                color: settingsMap[3],
                author: settingsMap[4],
                logo: settingsMap[5],
                favicon: settingsMap[6],
                noti_website: settingsMap[7],
                contentAutobank: settingsMap[8],
                token: settingsMap[9],
                rechargeNotice: settingsMap[10],
                tokenpass: settingsMap[11]
            });
           setOriginalSettings({
                ...settingsMap
            });
        } catch (error) {
            console.error('Lỗi lấy dữ liệu:', error);
        }
    };

    useEffect(() => {
        fetchSettings();
        fetchBankDetails();
    }, []);
    useEffect(() => {
        // console.log('Current bank details:', bankDetails);
    }, [bankDetails]);
    const handleValueChange = async (field, value) => {
        
        if (field in settings) {
            setSettings(prev => ({ ...prev, [field]: value }));
        }
        if (field in bankDetails) {
            const updatedBankDetails = { ...bankDetails, [field]: value };
            setBankDetails(updatedBankDetails);

            if (updatedBankDetails.id) {
                await updatebank(updatedBankDetails.id, 
                    updatedBankDetails.short_name, 
                    updatedBankDetails.accountName, 
                    updatedBankDetails.accountNumber, 
                    // updatedBankDetails.on_off  
                );
            } else {
                console.error('ID ngân hàng không tồn tại:', updatedBankDetails.id);
            }
        }
    };

    const handleSubmit = async () => {
        try {
            const updates = [];
            Object.keys(settings).forEach(key => {
                if (settings[key] !== originalSettings[key]) {
                    let id;
                    switch (key) {
                        case 'title':
                            id = 1;
                            break;
                        case 'description':
                            id = 2;
                            break;
                        case 'color':
                            id = 3;
                            break;
                        case 'author':
                            id = 4;
                            break;
                        case 'logo':
                            id = 5;
                            break;
                        case 'favicon':
                            id = 6;
                            break;
                        case 'noti_website':
                            id = 7;
                            break;
                        case 'contentAutobank':
                            id = 8;
                            break;
                        case 'token':
                            id = 9;
                            break;
                        case 'rechargeNotice':
                            id = 10;
                            break;
                        default:
                            console.error('Unknown setting key:', key);
                            return;
                    }
                    updates.push(updatesettingId(id, settings[key]));
                }
            });
    
          
            const bankUpdates = [];
            if (bankDetails.id) {
                await updatebank(
                    bankDetails.id,
                    bankDetails.short_name,
                    bankDetails.accountName,
                    bankDetails.accountNumber,
                    // bankDetails.on_off
                );
            }
    
            await Promise.all([...updates, ...bankUpdates]); 
            alert('Cập nhật cài đặt thành công!');
            window.location.reload();
        } catch (error) {
            console.error('Lỗi cập nhật cài đặt:', error);
        }
    };
    const fetchBankDetails = async () => {
        try {
            const response = await getbank();
            console.log('Bank details fetched:', response.data); 
            if (response.data && response.data.content.length > 0) {
                const bankInfo = response.data.content[0];
                console.log('Bank Info:', bankInfo); 
                setBankDetails({
                    id: bankInfo.id_bank,  
                    short_name: bankInfo.short_name || '',
                    accountName: bankInfo.accountName || '',
                    accountNumber: bankInfo.accountNumber || '',
                    // on_off: bankInfo.on_off || 0  
                });
            } else {
                console.error('No data returned from getbank');
            }
        } catch (error) {
            console.error('Failed to fetch bank details:', error);
        }
    };
    const [bankList, setBankList] = useState([]); // State để lưu danh sách ngân hàng

    const fetchBankList = async () => {
        try {
            const response = await fetch('https://api.vietqr.io/v2/banks'); // Gọi API để lấy danh sách ngân hàng
            const data = await response.json(); // Chuyển đổi phản hồi thành JSON
            if (data.code === "00" && data.data) {
                const shortNames = data.data.map(bank => bank.short_name); // Lấy trường short_name từ mỗi ngân hàng
                setBankList(shortNames); // Lưu danh sách shortName vào state
            }
        } catch (error) {
            console.error('Lỗi khi lấy danh sách ngân hàng:', error);
        }
    };
    useEffect(() => {
        fetchBankList();
        fetchBankDetails();
    }, []);

    const colorPicker = (
        <SketchPicker color={settings.color} onChangeComplete={(color) => handleValueChange('color', color.hex)} />
    );
    

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <h2 className="text-[2.2rem] pb-[20px] ">Cài Đặt Website: <b className='text-[#184eff]' >{settings.title}</b></h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab="Cài Đặt Chung" key="1">
                    {/* Nội dung cho General Settings */}
                    <Row gutter={[16, 16]}>
                    <Divider orientation="center">Thông Tin Chung</Divider>
                        <Col span={24}>
                            
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem] flex items-center'> <FaPlus className='mr-1'  /> Title Website: </h4>
                            <span className='text-[12px] text-[#646464] flex items-center'>
                                <FaExclamationTriangle className='text-red-500 mr-1' />
                                Đây là input nhập tên website !
                            </span>
                            <Input
                                value={settings.title}
                                placeholder="Title Website..."
                                onChange={(e) => handleValueChange('title', e.target.value)}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem] flex items-center'> <FaBookmark className='mr-1' /> Description Website:</h4>
                            <span className='text-[12px] text-[#646464] flex items-center '>
                                <FaExclamationTriangle className='text-red-500 mr-1' />
                                Đây là input nhập giới thiệu ngắn ở chân website !
                            </span>
                            <Input
                                value={settings.description}
                                placeholder="Description Website..."
                                onChange={(e) => handleValueChange('description', e.target.value)}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem] flex items-center'> <FaUserAlt className='mr-1' /> Chủ Quản Website:</h4>
                            <span className='text-[12px] text-[#646464] flex items-center  '>
                                <FaExclamationTriangle className='text-red-500 mr-1' />
                                Đây là input nhập chủ của website !
                            </span>
                            <Input
                                value={settings.author}
                                placeholder="Author Website..."
                                onChange={(e) => handleValueChange('author', e.target.value)}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem] flex items-center'><FaBell className='mr-1' /> Thông Báo Website:</h4>
                            <span className='text-[12px] text-[#646464] flex items-center '>
                                <FaExclamationTriangle className='text-red-500 mr-1' />
                                Đây là input thông báo ở đầu trang website !
                            </span>
                            <Input
                                value={settings.noti_website}
                                placeholder="SuperTech..."
                                onChange={(e) => handleValueChange('noti_website', e.target.value)}
                            />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Cài Đặt Giao Diện" key="2">
                    {/* Nội dung cho UI Settings */}
                    <Row gutter={[16, 16]}>
                        
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem] flex items-center'><FaCubes className='mr-1' /> Color Website:</h4>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <Popover
                                    content={colorPicker}
                                    trigger="click"
                                    open={visible}
                                    onOpenChange={setVisible}
                                    >
                                    <Input
                                        value={settings.color}
                                        placeholder="Click to select color..."
                                        readOnly
                                    />
                                </Popover>
                                <div style={{ width: '40px', height: '35px', backgroundColor: settings.color, marginLeft: 10, borderRadius: '20px' }}></div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                <h4 className='text-[1.6rem] flex items-center'>
                    <FaImage className='mr-1' /> Favicon Website:
                    <Popover content={<img src={`${IMG_BACKEND_SETTING}/${settings.favicon}`} alt="Favicon" style={{ width: '100px' }} />} trigger="hover">
                        <FaExclamationTriangle className='text-red-500 ml-1' />
                    </Popover>
                </h4>
                <Upload
                    accept="image/*"  
                    showUploadList={false}  
                    beforeUpload={(file) => {
                        const reader = new FileReader();
                        reader.onload = (e) => {
                            const faviconName = file.name;  
                            setSettings(prev => ({ ...prev, favicon: faviconName }));  
                        };
                        reader.readAsDataURL(file); 
                        return false; 
                    }}
                >
                    <Button>Chọn Favicon</Button>
                </Upload>
            </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Ngân Hàng" key="3">
                    {/* Nội dung cho Ngân hàng */}
                    <Row gutter={[16, 16]}>
                    <Divider orientation="center" > <span className='flex items-center'><FaLock className='mr-1' /> Token Ngân Hàng</span></Divider>
                    <Col span={24}>
                            <h4>Token Autobank:</h4>
                            <span className='text-[12px] text-[#646464] flex items-center '>
                                <FaExclamationTriangle className='text-red-500 mr-1' />
                                Đây là nơi lưu token api phía ngân hàng.
                            </span>
                            {isTokenVisible ? (
                                <Input
                                    value={settings.token}
                                    onChange={(e) => handleValueChange('token', e.target.value)}
                                    placeholder="Enter token..."
                                />
                            ) : (
                                <Button onClick={showPasswordModal}>Xem Token</Button>
                            )}
                        </Col>
                        <Divider orientation="center "> <span className='flex items-center'><FaRegCreditCard className='mr-1' /> Thông Tin Ngân Hàng</span></Divider>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Ngân Hàng:</h4>
                            <div className='flex items-center' >
                            <Select
                                value={bankDetails.short_name}
                                placeholder="Chọn ngân hàng..."
                                onChange={(value) => handleValueChange('short_name', value)} 
                                style={{ width: '100%' }}
                            >
                                {bankList.map((shortName, index) => (
                                    <Select.Option key={index} value={shortName}>
                                        {shortName}
                                    </Select.Option>
                                ))}
                            </Select>
                            <Popover content="Đây là nơi chọn ngân hàng." trigger="hover">
                                <FaExclamationTriangle className='text-red-500 ml-1' />
                            </Popover>
                            </div>
                        </Col>
                        {/* <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Logo Ngân Hàng:</h4>
                            <Input
                                value={settings.contentAutobank}
                                placeholder="Content Autobank..."
                                onChange={(e) => handleValueChange('contentAutobank', e.target.value)}
                            />
                        </Col> */}
                        <Col xs={24} sm={12} md={12} lg={6}>
                        <h4 className='text-[1.6rem]'>Tên Tài Khoản:</h4>
                        <div className='flex items-center' >
                        <Input
                            value={bankDetails.accountName} 
                            placeholder="Tên Tài Khoản..."
                            onChange={(e) => handleValueChange('accountName', e.target.value)} 
                        />
                         <Popover content="Đây là nơi nhập tên tài khoản." trigger="hover">
                                <FaExclamationTriangle className='text-red-500 ml-1' />
                            </Popover>
                        </div>
                    </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Số Tài Khoản:</h4>
                            <div className='flex items-center' >
                            <Input
                            value={bankDetails.accountNumber}
                            placeholder="Số Tài Khoản..."
                            onChange={(e) => handleValueChange('accountNumber', e.target.value)}
                        />
                         <Popover content="Đây là nơi nhập số tài khoản." trigger="hover">
                                <FaExclamationTriangle className='text-red-500 ml-1' />
                            </Popover>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Nội Dung Nạp Tiền:</h4>
                            <div className='flex items-center' > 

                            <Input
                                value={settings.rechargeNotice}
                                placeholder="Nội Dung Nạp Tiền..."
                                onChange={(e) => handleValueChange('rechargeNotice', e.target.value)}
                            />
                             <Popover content={
                                <div style={{ maxWidth: '200px' }}> {/* Điều chỉnh chiều rộng tối đa */}
                                    Đây là nơi nhập nội dung chuyển tiền, khi khách hàng thanh toán
                                    thì nội dung này sẽ nằm ở đầu.   <br /> Ví Dụ: supertech1156.
                                </div>
                                }  
                            trigger="hover">
                                <FaExclamationTriangle className='text-red-500 ml-1' />
                            </Popover>

                            </div>
                           
                        </Col>
                    </Row>
                </TabPane>
                
            </Tabs>
            <Row>
                <Col span={24} style={{ marginTop: '40px' }}>
                    <Button type="primary" onClick={handleSubmit} size="middle">
                        Lưu Cài Đặt
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default AdminSetting;