import { useState, useEffect } from 'react'
import { useFirebase } from '../Firebase';

export const useAuthentication = () => {
  const firebase = useFirebase();

  const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem('authUser')))

  useEffect(() => {
    console.log(firebase)
    const listener = firebase.auth.onAuthStateChanged(
      authUser => {
        if (authUser) {
          localStorage.setItem('authUser', JSON.stringify(authUser))
          firebase
            .user(authUser.uid)
            .once('value')
            .then(snapshot => {
              const dbUser = snapshot.val()
              console.log(dbUser.roles)

              if (!dbUser.roles) dbUser.roles = {}


              console.log(dbUser.roles)
              authUser = {
                uid: authUser.uid,
                email: authUser.email,
                ...dbUser,
              }
              setAuthUser(authUser)
            })
        } else {
          localStorage.removeItem('authUser');
          setAuthUser(null)
        }
      });
    return () => listener()
  }, [firebase])

  return authUser
}