import { signInWithPopup } from 'firebase/auth'
import React from 'react'
import { auth, provider } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth'

const Home = () => {

  const [user] = useAuthState(auth)

  return (
    <div>
      {user ? (
        <>
          <UserInfo></UserInfo>
          <SignOutButton></SignOutButton>
        </>
      ) : (
        <SigninButton></SigninButton>
      )}
    </div>
  )
}

export default Home


function SigninButton() {
  const signButton = () => {
    signInWithPopup(auth, provider)
  }

  return <button onClick={signButton}>グーグルでサインイン</button>
}

function SignOutButton() {
  const signButton = () => {
    signInWithPopup(auth, provider)
  }

  return <button onClick={() => auth.signOut()}>サインアウト</button>
}


function UserInfo() {

  return (
    <div className="userInfo">
      <img src={auth.currentUser?.photoURL ?? ""} alt="" />
      <p>{auth.currentUser?.displayName}</p>
    </div>
  )
}
