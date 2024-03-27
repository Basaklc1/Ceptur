import * as React from 'react';
import { useEffect, useState } from 'react';
import { firebase } from './config/firebase'
import AuthStack from './src/hooks/navigation/authStack';
import UserStack from './src/hooks/navigation/userStack';
 
//appin başladığı yer
function App() {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState()
//user login olduğu zamna bigileri state alıyoruz
  function onAuthStateChanged(user:any){
    setUser(user)
    if(initializing) setInitializing(false)
  }

  useEffect(() => {
    const subscriber = firebase.auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  },[])

  if(initializing) return null;
//kullanıcı login değil ise
  if(!user) return <AuthStack />
//kullanıcı login ise
  return <UserStack />
}

export default App;