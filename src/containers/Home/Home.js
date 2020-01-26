import React from 'react'
import Login from '../../components/Login/Login';
import SignUp from '../../components/SignUp/SignUp';

export default function Home() {
  return (
    <div>
      <h2>
        Home
      </h2>
      <Login />
      <SignUp />
    </div>
  )
}
