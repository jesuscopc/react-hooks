import React, { useContext } from 'react';
import { userContext } from './UserContext';

export const HomeScreen = () => {
  const { user } = useContext(userContext);
  return (
    <div>
      <h1>HomeScreen</h1>
      <hr/>
      <pre className="container">
        { JSON.stringify(user, null, 3)}
      </pre>
    </div>
  )
}
