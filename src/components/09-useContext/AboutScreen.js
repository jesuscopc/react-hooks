import React, { useContext } from 'react';
import { userContext } from './UserContext';

export const AboutScreen = () => {
  const { user, setUser } = useContext(userContext)
  return (
    <div>
      <h1>AboutSCreen</h1>
      <hr/>

      <pre>
        { JSON.stringify(user, null, 3)}
      </pre>

      <button
        className="btn btn-warning"
        onClick={ () => setUser({})}
      >
        Logout
      </button>
    </div>
  )
}
