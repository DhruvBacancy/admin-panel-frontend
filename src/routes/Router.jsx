import React from "react"
import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import SignIn from "../pages/SignIn"
import Home from "../pages/Home"
import Header from "../components/Header"

const Router = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  )
}

export default Router
