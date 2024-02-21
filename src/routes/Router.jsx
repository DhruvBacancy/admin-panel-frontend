import React from "react"
import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import SignIn from "../pages/SignIn"
import Home from "../pages/Home"
import Header from "../components/Header"
import EditUser from "../pages/EditUser"
import { AuthContextExport } from "../util/context/AuthContext"

const Router = () => {
  const { token } = AuthContextExport()
  return (
    <div>
      <Header />
      <Routes>
        {!token ? (
          <>
            <Route path='/register' element={<Register />} />
            <Route path='/signin' element={<SignIn />} />
          </>
        ) : (
          <>
            <Route path='/' element={<Home />} />
            <Route path='/edit/:id' element={<EditUser />} />
          </>
        )}
      </Routes>
    </div>
  )
}

export default Router
