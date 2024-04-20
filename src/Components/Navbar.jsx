import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Sider } = Layout;

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={toggleCollapsed}
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        marginTop: '64px', // Space below TopNav
        width: collapsed ? 80 : 200, // Adjusted width for responsiveness
      }}
    >
      <div className='logo'>
        <Link to="/">Website</Link>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Link to="/About">About</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/Documentation">Documentation</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/Contacts">Contacts</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Navbar;
