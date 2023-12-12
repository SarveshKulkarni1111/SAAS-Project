import React from 'react';
import './Customer.css'; // Import the CSS file
import Sidebar from './Sidebar';

const CustomerTable = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', city: 'Chicago' },
    { id: 4, name: 'Vaibahv', email: 'Vaibhav@example.com', city: 'Delhi' },
    { id: 5, name: 'Sarvesh', email: 'Sarvesh@example.com', city: 'Mumbai' },
    { id: 6, name: 'Aditya', email: 'Aditya@example.com', city: 'Pune' },
    { id: 7, name: 'Rohan', email: 'Rohan@example.com', city: 'Nagpur' },
    // Add more customer data as needed
  ];

  return (
    <div className='app-container'>
        <Sidebar />
        <div className='main-content'>
       
      <table className="customer-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>City</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(customer => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default CustomerTable;
