import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar';
import Dashboard from './Components/Dashboard';
import CustomerTable from './Components/Customer';
import { auth } from './firebase';
import Revenue from './Components/revenue';
import Quality from './Components/quality';
import Sales from './Components/sales';
import Marketing from './Components/marketing';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);

        // Set a timeout to automatically log out after 5 minutes
        const timeoutId = setTimeout(() => {
          auth.signOut();
          setUser(null);
        }, 5 * 60 * 1000); // 5 minutes in milliseconds

        // Clear the timeout when the user is active
        document.addEventListener('mousemove', () => {
          clearTimeout(timeoutId);
        });

        document.addEventListener('keypress', () => {
          clearTimeout(timeoutId);
        });
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Router>
        <Navbar user={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          {user && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/customer" element={<CustomerTable />} />
          <Route path="/revenue" element={<Revenue />} />
          <Route path="/quality" element= {<Quality />} />
          <Route path="/sales" element= {<Sales />} />
          <Route path="/marketing" element= {<Marketing />} />

        </Routes>
      </Router>
    </div>
  );
};

export default App;
