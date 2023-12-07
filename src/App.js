import React, { useEffect, useState   } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Dashboard from './Components/Dashboard';
import CustomerTable from './Components/Customer';
import { auth } from './firebase';

function App() {
  const [userName, setUserName] = useState("");
useEffect(() => {
  auth.onAuthStateChanged((user) => {
    if (user) {
      setUserName(user.displayName);
    }else setUserName("");
    
  });
}, []);


  return (
    <div className="App">
        <Router>
          <Routes>
          <Route path="/" element={<Home name={userName}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard name={userName} />} />
          <Route path="/customer" element={<CustomerTable />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
