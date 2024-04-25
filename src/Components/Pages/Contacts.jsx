import React from 'react';

const Contacts = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    overflowY: 'auto', // Enable vertical scrolling
    maxHeight: 'calc(100vh - 100px)', // Set maximum height for scrolling
    fontSize: '16px'
  };

  const headingStyle = {
    marginTop: '20px'
  };

  const paragraphStyle = {
    marginBottom: '10px'
  };

  const strongStyle = {
    fontWeight: 'bold'
  };

  return (
    <div style={containerStyle}>
      <div>
        <h2 style={headingStyle}>Contact Form</h2>
        <p style={paragraphStyle}>
          Provide a contact form that allows users to fill out their name, email address, subject, and message.
          This form should be easy to use and submit.
        </p>

        <h2 style={headingStyle}>Contact Information</h2>
        <p style={paragraphStyle}>
          <strong style={strongStyle}>Email Address:</strong> support@resultsystem.com
        </p>
        <p style={paragraphStyle}>
          <strong style={strongStyle}>Phone Number:</strong> +1234567890
        </p>
        <p style={paragraphStyle}>
          <strong style={strongStyle}>Office Address:</strong> 123 Main Street, City, Country
        </p>
        <p style={paragraphStyle}>
          <strong style={strongStyle}>Support Hours:</strong> Monday to Friday, 9 AM to 5 PM
        </p>
        
        <h2 style={headingStyle}>Social Media Links</h2>
        <p style={paragraphStyle}>
          <strong style={strongStyle}>Twitter:</strong> <a href="https://twitter.com/resultsystem">@resultsystem</a>
        </p>
        <p style={paragraphStyle}>
          <strong style={strongStyle}>Facebook:</strong> <a href="https://facebook.com/resultsystem">resultsystem</a>
        </p>
        
        <h2 style={headingStyle}>FAQ Section</h2>
        <p style={paragraphStyle}>
          Include a list of frequently asked questions (FAQs) to help users find answers quickly.
        </p>
        
        <h2 style={headingStyle}>Technical Support</h2>
        <p style={paragraphStyle}>
          For technical issues, contact IT at <strong style={strongStyle}>techsupport@resultsystem.com</strong>.
        </p>
        
        <h2 style={headingStyle}>Feedback Option</h2>
        <p style={paragraphStyle}>
          Submit feedback or suggestions to help improve the system.
        </p>
        
        <h2 style={headingStyle}>Response Time</h2>
        <p style={paragraphStyle}>
          We typically respond to inquiries within 24-48 hours.
        </p>
        
        <h2 style={headingStyle}>Privacy Policy</h2>
        <p style={paragraphStyle}>
          <a href="/privacy-policy">Privacy Policy</a>
        </p>
        
        <h2 style={headingStyle}>Emergency Contact</h2>
        <p style={paragraphStyle}>
          In case of emergencies, dial 911.
        </p>
        
        <h2 style={headingStyle}>Additional Notes</h2>
        <p style={paragraphStyle}>
          Include any other relevant information or instructions for users.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
