import React from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='flex w-full h-24 bg-indigo-500 text-white'>
        <div className='flex justify-between items-center w-full px-4'>
          <div>
            {/* Logo */}
            <img src='/path/to/logo.png' alt='Logo' className='h-10' />
          </div>
          <div className='text-center'>
            {/* Page Title */}
            <h1 className='text-xl font-bold'>Admin Panel</h1>
          </div>
          <div className='flex justify-end items-center'>
            {/* Navigation Links */}
            <button onClick={() => navigate("/")} className='mr-4'>
              Home
            </button>
            <button onClick={() => navigate("/logout")} className='mr-4'>
              Logout
            </button>

            {/* User Profile */}
            {/* <div className='flex items-center'>
              <span>Admin Name</span>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
