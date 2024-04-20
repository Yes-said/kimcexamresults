import React from 'react';
import { Layout } from 'antd'; // Import Layout component from Ant Design
import './Footer.css'; // Import external CSS file for additional styling

const { Footer: AntFooter } = Layout; // Destructure Footer from Layout

const Footer = () => {
  return (
    <AntFooter className="footer">
      © {new Date().getFullYear()} Kenya Institute Of Mass Communication. All rights reserved
    </AntFooter>
  );
};

export default Footer;
