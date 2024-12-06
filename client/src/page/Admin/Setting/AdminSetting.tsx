import React, { useEffect, useState } from 'react';
import { Input, Popover, Button, Row, Col } from 'antd';
import { SketchPicker } from 'react-color';
import { getsetting, updatesettingId } from '../../../service/setting/setting.service';

function AdminSetting() {
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
                author: settingsMap[4],
                color: settingsMap[3]
            });
            setOriginalSettings({
                title: settingsMap[1],
                description: settingsMap[2],
                author: settingsMap[4],
                color: settingsMap[3]
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
                    const id = key === 'title' ? 1 : key === 'description' ? 2 : key === 'color' ? 3 : 4;
                    updates.push(updatesettingId(id, settings[key]));
                }
            });
            await Promise.all(updates);
            alert('Cập nhật cài đặt thành công!');
        } catch (error) {
            console.error('lỗi cập nhật cài đặt:', error);
        }
    };

    const colorPicker = (
        <SketchPicker color={settings.color} onChangeComplete={(color) => handleValueChange('color', color.hex)} />
    );

    return (
        <div className="min-h-screen p-6 bg-gray-100">
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <h2 className="text-[2.2rem] pb-[20px]">Cài Đặt Website: {settings.title}</h2>
                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <h4 className='text-[1.6rem]'>Title Website:</h4>
                    <Input
                        value={settings.title}
                        placeholder="Title Website..."
                        onChange={(e) => handleValueChange('title', e.target.value)}
                    />
                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <h4 className='text-[1.6rem]'>Description Website:</h4>
                    <Input
                        value={settings.description}
                        placeholder="Description Website..."
                        onChange={(e) => handleValueChange('description', e.target.value)}
                    />
                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <h4 className='text-[1.6rem]'>Color Website:</h4>
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
                </Col>
                <Col xs={24} sm={12} md={12} lg={6}>
                    <h4 className='text-[1.6rem]'>Author Website:</h4>
                    <Input
                        value={settings.author}
                        placeholder="Author Website..."
                        onChange={(e) => handleValueChange('author', e.target.value)}
                    />
                </Col>
                <Col span={24}>
                    <Button type="primary" onClick={handleSubmit} style={{ marginTop: 20 }}>
                        Lưu Ngay
                    </Button>
                </Col>
            </Row>
        </div>
    );
}

export default AdminSetting;