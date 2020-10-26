import React from 'react'
import {Link} from 'react-router-dom';
import {Layout,Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
  } from '@ant-design/icons';



const  Nav=({collapsed})=> {

  const {Sider } = Layout;




    return (
        <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<UserOutlined />}>
            <Link to="/">Login</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>   
              <Link to="/vehicle/List">Vehiculos</Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            Cerrar Sesión
          </Menu.Item>
         
        </Menu>
      </Sider>
    )
}

export default Nav;
