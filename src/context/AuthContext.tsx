import { createContext, useContext, useState, type ReactNode } from 'react'

type AuthContextValue = {
  signedIn: boolean
  signIn: () => void
  signOut: () => void
}

const AuthContext = createContext<AuthContextValue | null>(null)

// "Signed in" is one boolean in state – no passwords, no server
export function AuthProvider({ children }: { children: ReactNode }) {
  const [signedIn, setSignedIn] = useState(false)

  const value: AuthContextValue = {
    signedIn,
    signIn: () => setSignedIn(true),
    signOut: () => setSignedIn(false),
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const value = useContext(AuthContext)
  if (!value) throw new Error('useAuth must be used inside AuthProvider')
  return value
}
