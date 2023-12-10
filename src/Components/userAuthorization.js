// useAuthorization.js

import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { firestore, auth } from '../firebase';

const useAuthorization = (allowedRoles) => {
  const [user, loading, error] = useAuthState(auth);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (loading) {
        // Loading state, handle accordingly
        return;
      }

      if (error) {
        // Handle error state
        return;
      }

      if (!user) {
        // Redirect or handle unauthorized access
        return;
      }

      // Query the user document based on UID
      const userRef = firestore.collection('Users').get();
      const userSnapshot = await userRef.get();

      
      if (!userSnapshot.exists) {
        // Redirect or handle unauthorized access
        setIsAuthorized(false);
        return;
      }

      const userData = userSnapshot.data();

      if (!allowedRoles.includes(userData.Role)) {
        // Redirect or handle unauthorized access
        setIsAuthorized(false);
        return;
      }

      console.log(userData);
      // User is authorized
      setIsAuthorized(true);
    };

    fetchData();
  }, [user, loading, error, allowedRoles]);

  return { isAuthorized };
};

export default useAuthorization;
