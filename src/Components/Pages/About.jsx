import React from 'react';

const About = () => {
  const containerStyle = {
    maxWidth: '100%',
    overflowX: 'hidden',
    overflowY: 'auto',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const contentStyle = {
    maxWidth: '600px',
    margin: '0 auto',
    fontSize: '16px',
    lineHeight: '1.6',
  };

  const responsiveContentStyle = {
    '@media (max-width: 768px)': {
      fontSize: '14px',
    },
  };

  return (
    <div style={containerStyle}>
      <div style={{ ...contentStyle, ...responsiveContentStyle }}>
        <b>School Name:</b> Kenya Institute Of Mass Communication<br/><br/>
        <b>Address:</b> Kenya Institute of Mass Communication<br/>
        P.O. Box 42422 – 00100 Uholo Road,<br/>
        Off Mombasa Road<br/>
        Nairobi, Kenya<br/><br/>
        <b>Telephone:</b> +254-020-699 7000, Cell: 0708 262 895<br/>
        <b>Email:</b> info@kimc.ac.ke<br/>
        <b>Website:</b> <a href="http://www.kimc.ac.ke" target="_blank" rel="noopener noreferrer">http://www.kimc.ac.ke</a><br/><br/>
        <b>Administrator Contacts</b><br/><br/>
        <b>Name:</b> Said Bob Hassan<br/>
        <b>Phone:</b> 0769716787<br/>
        <b>Email:</b> bobsaid358@gmail.com

      </div>
    </div>
  );
};

export default About;
