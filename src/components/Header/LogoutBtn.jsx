import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'
import { toast } from 'react-toastify'

function LogoutBtn() {
  
  

    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
        .then( () => {
            dispatch(logout())
            toast.success('🦄 Logout Successful !', {
              position: "top-right",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              // transition: Bounce,
              });    // Set success message
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn
