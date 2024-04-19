// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'; // Optional CSS for styling

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Courses">Courses</Link>
        </li>
        <li>
          <Link to="/C">Results</Link>
        </li>
        <li>
          <Link to="/Students">Students</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
