import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // إضافة ملف CSS للتنسيق

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/todo-list">To-Do List</Link></li> {/* رابط لـ To-Do List */}
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/UserList">UsersList</Link></li>
        <li><Link to="/Weather">Weather</Link></li>

      </ul>
    </nav>
  );
}

export default Navbar;
