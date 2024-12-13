import React, { useEffect, useState } from 'react';
import { Input, Popover, Button, Row, Col, Modal, Tabs, Divider } from 'antd';
import { FaExclamationTriangle, FaPlus,FaBookmark,FaUserAlt,FaBell,FaCubes,FaImage } from 'react-icons/fa';
import { SketchPicker } from 'react-color';
import { getsetting, updatesettingId } from '../../../service/setting/setting.service';

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
            console.error('Failed to fetch settings:', error);
        }
    };

    useEffect(() => {
        fetchSettings();
    }, []);

    const handleValueChange = (field, value) => {
        setSettings(prev => ({ ...prev, [field]: value }));
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
            await Promise.all(updates);
            alert('Cập nhật cài đặt thành công!');
            window.location.reload();
        } catch (error) {
            console.error('Lỗi cập nhật cài đặt:', error);
        }
    };

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
                        {/* <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Logo Website:</h4>
                            <Input
                                value={settings.logo}
                                placeholder="Logo Website..."
                                onChange={(e) => handleValueChange('logo', e.target.value)}
                            />
                        </Col> */}
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem] flex items-center'><FaImage className='mr-1' /> Favicon Website:</h4>
                            <Input
                                value={settings.favicon}
                                placeholder="Favicon Website..."
                                onChange={(e) => handleValueChange('favicon', e.target.value)}
                            />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tab="Ngân Hàng" key="3">
                    {/* Nội dung cho Advanced Settings */}
                    <Row gutter={[16, 16]}>
                    <Divider orientation="center">Token Ngân Hàng</Divider>
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
                        <Divider orientation="center">Thông Tin Ngân Hàng</Divider>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Ngân Hàng:</h4>
                            <Input
                                value={settings.contentAutobank}
                                placeholder="Content Autobank..."
                                onChange={(e) => handleValueChange('contentAutobank', e.target.value)}
                            />
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
                            <Input
                                value={settings.contentAutobank}
                                placeholder="Content Autobank..."
                                onChange={(e) => handleValueChange('contentAutobank', e.target.value)}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Số Tài Khoản:</h4>
                            <Input
                                value={settings.contentAutobank}
                                placeholder="Content Autobank..."
                                onChange={(e) => handleValueChange('contentAutobank', e.target.value)}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Content Autobank:</h4>
                            <Input
                                value={settings.contentAutobank}
                                placeholder="Content Autobank..."
                                onChange={(e) => handleValueChange('contentAutobank', e.target.value)}
                            />
                        </Col>
                        <Col xs={24} sm={12} md={12} lg={6}>
                            <h4 className='text-[1.6rem]'>Nội Dung Nạp Tiền:</h4>
                            <Input
                                value={settings.rechargeNotice}
                                placeholder="Nội Dung Nạp Tiền..."
                                onChange={(e) => handleValueChange('rechargeNotice', e.target.value)}
                            />
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