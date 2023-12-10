// App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import CustomerTable from './Components/Customer';
import CreateUser from './Components/CreateUser';
import { auth } from './firebase';
import Revenue from './Components/revenue';
import Quality from './Components/quality';
import Sales from './Components/sales';
import Marketing from './Components/marketing';

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;
  return user ? children : <Navigate to="/login" replace />;
};

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      setUser(authUser || null);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customer" element={<CustomerTable />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/quality" element={<Quality />} />
          <Route path="/sales" element={<Sales />} />
          <Route path="/marketing" element={<Marketing />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
