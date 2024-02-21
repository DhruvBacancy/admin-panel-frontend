import React, { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import SignIn from "../pages/SignIn"
import Home from "../pages/Home"
import Header from "../components/Header"
import EditUser from "../pages/EditUser"
import { AuthContextExport } from "../util/context/AuthContext"
import Error404 from "../pages/Error"
import Logout from "../pages/Logout"

const Router = () => {
  const { login } = AuthContextExport()
  const token = localStorage.getItem("token")
  useEffect(() => {
    if (token) {
      login(token)
    }
  }, [])
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
            <Route path='/logout' element={<Logout />} />
          </>
        )}
        <Route path='*' element={<Error404 />} />
      </Routes>
    </div>
  )
}

export default Router
