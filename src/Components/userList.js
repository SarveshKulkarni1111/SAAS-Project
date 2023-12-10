import React, { useState, useEffect } from 'react';
import { firestore } from './firebase';
import { doc, getDoc } from 'firebase/firestore';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const collectionRef = firestore.collection('Users');
        const snapshot = await collectionRef.get();

        const usersData = [];
        for (const docRef of snapshot.docs) {
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            usersData.push({
              id: docRef.id,
              ...docSnap.data(),
            });
          }
        }

        setUsers(usersData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <strong>Name:</strong> {user.name}, <strong>Age:</strong> {user.age}, <strong>Role:</strong> {user.role}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;