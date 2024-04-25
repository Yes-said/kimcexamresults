import React from 'react';

const Home = () => {
  return (
    <div
      style={{
        height: '100%',
        overflowY: 'auto', // Enable vertical scrolling if content exceeds container height
        padding: '20px', // Add padding for spacing
      }}
    >
      <div
        style={{
          maxWidth: '800px', // Limit content width for better readability on larger screens
          margin: '0 auto', // Center content horizontally
        }}
      >
        <h1>Welcome to the Student Result Management System!</h1>
        <p style={{ fontSize: '1.2em' }}>
          We're thrilled to have you here. This platform is designed to help you
          stay informed about your academic progress and achievements. From
          checking grades to tracking your performance across different courses,
          this system is your go-to resource for academic insights.
        </p>
        <p style={{ fontSize: '1.2em' }}>
          Explore the various features available to you and feel free to reach
          out if you have any questions or need assistance navigating the
          system. We're here to support you on your educational journey. Wishing
          you success and meaningful learning experiences ahead!
        </p>
        <p style={{ fontSize: '1.2em' }}>Happy exploring!</p>
      </div>
    </div>
  );
};

export default Home;
