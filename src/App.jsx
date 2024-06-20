import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header, Container } from './components'
import { Outlet } from 'react-router-dom'
import { Dots,Bounce } from "react-activity";
import "react-activity/dist/Bounce.css";

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? ( 
    <div className=' w-screen max-w-full min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
    ) : 
      (<div className="flex justify-center items-center min-h-screen font-bold text-5xl text-green-600">
        <Container className="flex justify-center items-center">
            <h2>Loading
            <Bounce color="green-500" size={25} speed={0.9} />
            </h2>
        </Container>
    </div>
    )
}

export default App
