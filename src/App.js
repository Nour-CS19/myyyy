import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import UserList  from './UserList';
import UserDetail from './UserDetails';
import Weather from './Weather';
//import SignIn from './components/SignIn';
//import SignUp from './components/SignUp';
//import Dashboard from './components/Dashboard';
//import Projects from './components/Projects';
import Users from './Users';
//import Footer from './components/Footer';
import TodoList from './Todolist';
import Contact from './Contact'; // إضافة صفحة جديدة

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/todo-list" element={<TodoList />} />
          <Route path="/contact" element={<Contact />} /> {/* رابط لصفحة الاتصال */}
          <Route path="/UserList" element={<UserList />} />
          <Route path="/UserDetails" element={<UserDetail />} />

          <Route path="/Weather" element={<Weather />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
