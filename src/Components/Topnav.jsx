import React from 'react';
import { Menu, Button, Modal, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import Logo from '../assets/Logo.png';
const { Item } = Menu;
const { TextArea } = Input;

const TopNav = () => {
  const [loginVisible, setLoginVisible] = React.useState(false);
  const [signupVisible, setSignupVisible] = React.useState(false);

  const showLoginModal = () => {
    setLoginVisible(true);
  };

  const showSignupModal = () => {
    setSignupVisible(true);
  };

  const handleLoginCancel = () => {
    setLoginVisible(false);
  };

  const handleSignupCancel = () => {
    setSignupVisible(false);
  };

  const handleLogin = (values) => {
    console.log('Login:', values);
    // Perform login logic here
    setLoginVisible(false);
  };

  const handleSignup = (values) => {
    console.log('Signup:', values);
    // Perform signup logic here
    setSignupVisible(false);
  };

  return (
    <>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['home']}
        style={{
          lineHeight: '64px',
          height: '64px', // Fixed height to create space
          width: '100%', // Take up full width of the viewport
          position: 'fixed',
          top: 0,
          zIndex: 1000,
          backgroundColor: '#001529',
        }}
      >
        <div className='logo'>
       <Link to="/">
            <img src={Logo} alt="Logo" style={{ width: '60px', height: 'auto' }} />
          </Link>
      </div>
        <Item key="home">
          <Link to="/">Home</Link>
        </Item>
        <Item key="about">
          <Link to="/about">About</Link>
        </Item>
        <Item key="documentation">
          <Link to="/documentation">Documentation</Link>
        </Item>
        <Item key="contacts">
          <Link to="/contacts">Contacts</Link>
        </Item>
        <Item key="login" style={{ float: 'right' }}>
          <Button type="link" onClick={showLoginModal}>
            Login
          </Button>
        </Item>
        <Item key="signup" style={{ float: 'right' }}>
          <Button type="primary" onClick={showSignupModal}>
            Sign Up
          </Button>
        </Item>
      </Menu>

      {/* Login Modal */}
      <Modal
        title="Login"
        visible={loginVisible}
        onCancel={handleLoginCancel}
        footer={null}
      >
        <Form
          name="login"
          onFinish={handleLogin}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* Signup Modal */}
      <Modal
        title="Sign Up"
        visible={signupVisible}
        onCancel={handleSignupCancel}
        footer={null}
      >
        <Form
          name="signup"
          onFinish={handleSignup}
          layout="vertical"
          initialValues={{ remember: true }}
        >
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input a username!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input a password!' }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default TopNav;
