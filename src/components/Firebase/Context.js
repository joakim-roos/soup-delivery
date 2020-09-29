import React, { useContext } from 'react';

const FirebaseContext = React.createContext(null);

/* export const withFirebase = Component => props => {
  let firebase = useContext(FirebaseContext)

  return <Component {...props} firebase={firebase} />
} */

export const useFirebase = () => {
  const firebase = useContext(FirebaseContext)
  return firebase
}

export default FirebaseContext;