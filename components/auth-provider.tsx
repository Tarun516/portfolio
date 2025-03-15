"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type AuthContextType = {
  isAuthenticated: boolean
  login: () => void
  logout: () => void
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Check if the user is authenticated
    const hasAuthCookie = document.cookie.includes("auth=true")
    setIsAuthenticated(hasAuthCookie)
  }, [])

  const login = () => {
    // In a real app, you would call an API to authenticate the user
    document.cookie = "auth=true; max-age=86400; path=/"
    setIsAuthenticated(true)
  }

  const logout = () => {
    document.cookie = "auth=; max-age=0; path=/"
    setIsAuthenticated(false)
  }

  return <AuthContext.Provider value={{ isAuthenticated, login, logout }}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)

