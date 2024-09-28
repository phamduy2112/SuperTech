import React, {  useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import {
   
    TeamOutlined,

    DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Dropdown, Layout, Menu, Space, theme } from "antd";
import { getLocalStorage, removeLocalStorage } from "../../utils";
import { ACCESS_TOKEN } from "../../constants";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";

import { getProfileThunk, setUser } from "../../redux/auth/auth.slice";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem("Quản lý users", "sub1", <TeamOutlined />, [
        getItem(<NavLink to="createuser">Create user</NavLink>, "1"),
        getItem(<NavLink to="users">Users</NavLink>, "2"),
    ]),
    getItem("Quản lý phim", "sub2",<i className="fa-solid fa-film"></i> , [
        getItem(<NavLink to="createfilm">Create film</NavLink>, "3"),
        getItem(<NavLink to="films">Films</NavLink>, "4"),
    ]),
];

const AdminTemplate: React.FC = () => {
    const dispatch = useAppDispatch();
    const user: any = useAppSelector((state) => state.authReducer.user);
    const maLoaiNguoiDung = user?.maLoaiNguoiDung;
    const navigate = useNavigate();
    console.log(user);
    useEffect(() => {
        dispatch(getProfileThunk());
    }, []);

    const handlelogout = () => {
        dispatch(setUser(null));
        //Xoá localStorage
        removeLocalStorage(ACCESS_TOKEN);
        //Thực tế làm việc sẽ làm call api để đăng xuất
        navigate("/login");
    };

    const dropDownItems: MenuProps["items"] = [
        {
            key: "1",
            label: <NavLink to="/">Quay lại trang chủ</NavLink>,
        },
        {
            key: "4",
            danger: true,
            label: <button onClick={handlelogout}>Đăng xuất</button>,
        },
    ];

    useEffect(() => {
        if (
            !getLocalStorage(ACCESS_TOKEN) ||
            (maLoaiNguoiDung && maLoaiNguoiDung !== "QuanTri")
        ) {
            alert("Bạn không có quyền truy cập vào trang này");
            navigate("/");
        }
    }, [user]);

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    if(maLoaiNguoiDung !== 'QuanTri'){
        return null
    }
    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
            >
                <div className="demo-logo-vertical" />
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["1"]}
                    mode="inline"
                    items={items}
                />
            </Sider>
            <Layout>
                <Header style={{ padding: 0, background: colorBgContainer }}>
                    <div className="pr-10 pt-1 text-right">
                        <Dropdown menu={{ items: dropDownItems }}>
                            <span>
                                <Space>
                                    <div className="space-x-2">
                                        <i className="fa-regular fa-user rounded-full bg-slate-200 p-3"></i>
                                        <span>
                                            {user.taiKhoan}
                                        </span>
                                    </div>
                                    <DownOutlined />
                                </Space>
                            </span>
                        </Dropdown>
                    </div>
                </Header>
                <Content style={{ margin: "0 16px" }}>
                    <Breadcrumb style={{ margin: "16px 0" }}>
                        {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                        <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                    </Breadcrumb>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AdminTemplate;
