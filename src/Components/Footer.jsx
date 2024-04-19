// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div>
        <p>&copy; 2024 Kenya Institute Of Mass Communication. All rights reserved.</p>
        <p>Contact: info@kimc.com</p>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'skyblue',
    color: '#fff',
    textAlign: 'center',
    padding: '20px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
  },
};

export default Footer;
