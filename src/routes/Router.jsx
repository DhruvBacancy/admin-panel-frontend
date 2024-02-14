import React from "react"
import { Route, Routes } from "react-router-dom"
import Register from "../pages/Register"
import SignIn from "../pages/SignIn"

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/signin' element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default Router
