import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const TopNav = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About</Link>
      </Menu.Item>
      <Menu.Item key="documentation">
        <Link to="/documentation">Documentation</Link>
      </Menu.Item>
      <Menu.Item key="contacts">
        <Link to="/contacts">Contacts</Link>
      </Menu.Item>
    </Menu>
  );
};

export default TopNav;
