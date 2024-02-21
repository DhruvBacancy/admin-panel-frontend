// Logout.js
import React, { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContextExport } from "../util/context/AuthContext"

const Logout = () => {
  const { logout } = AuthContextExport()
  const navigate = useNavigate()

  useEffect(() => {
    logout()
    localStorage.removeItem("token")
    navigate("/signin")
  }, [])

  return null
}

export default Logout
