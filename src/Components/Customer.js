import React from 'react';
import './Customer.css'; // Import the CSS file
import LoggedInNav from './LoggedInNav';
import Sidebar from './Sidebar';

const CustomerTable = () => {
  const customers = [
    { id: 1, name: 'John Doe', email: 'john@example.com', city: 'New York' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', city: 'Chicago' },
    // Add more customer data as needed
  ];

  return (
    <div>
        <LoggedInNav />
        <Sidebar />
      <h2>Customer Details</h2>
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
  );
};

export default CustomerTable;
