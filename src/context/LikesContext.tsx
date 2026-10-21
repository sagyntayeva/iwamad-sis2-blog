import { createContext, useContext, useState, type ReactNode } from 'react'

type LikesContextValue = {
  likes: Record<number, number> // post id → likes
  addLike: (postId: number) => void
}

const LikesContext = createContext<LikesContextValue | null>(null)

export function LikesProvider({ children }: { children: ReactNode }) {
  const [likes, setLikes] = useState<Record<number, number>>({})

  function addLike(postId: number) {
    setLikes((prev) => ({ ...prev, [postId]: (prev[postId] ?? 0) + 1 }))
  }

  return <LikesContext.Provider value={{ likes, addLike }}>{children}</LikesContext.Provider>
}

export function useLikes() {
  const value = useContext(LikesContext)
  if (!value) throw new Error('useLikes must be used inside LikesProvider')
  return value
}
