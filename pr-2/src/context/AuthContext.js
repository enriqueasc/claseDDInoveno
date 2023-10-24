import React, { useState, useEffect, createContext } from "react"
import { storageController } from "../api/token"
import { userController } from "../api/users"
import { tokenExpired } from "../utils/tokenExpired"

export const AuthContext = createContext()

export const AuthProvider = (props) => {
  
  const { children } = props

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const login = async (token) => {
    try {
      await storageController.setToken(token)
      const response = await userController.getMe(token)
      setUser(response)
      setLoading(false)
      console.log(response)
    } catch (error) {
      console.log("authcontext error: ", error)
      setLoading(false)
    }
  }

  const getSession = async () => {
    const token = await storageController.getToken()
    if (!token) {
      logout()
      setLoading(false)
      return
    }
    tokenExpired(token) ? logout() : login(token)
  }

  useEffect(() => {
    getSession()
  }, [])

  const logout = async () => {
    try {
      await storageController.removeToken()
      setUser(null)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }

  const upDateUser = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    })
  }

  const data = {
    user,
    login,
    logout,
    upDateUser,
  }
  if (loading) return null

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>
}
