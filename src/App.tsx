import { Route, Routes } from 'react-router'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './context/AuthContext'
import { LikesProvider } from './context/LikesContext'
import Home from './pages/Home'
import Posts from './pages/Posts'
import PostPage from './pages/PostPage'
import Contact from './pages/Contact'
import SignIn from './pages/SignIn'
import Liked from './pages/Liked'
import NotFound from './pages/NotFound'

function App() {
  return (
    <AuthProvider>
      <LikesProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signin" element={<SignIn />} />
            {/* Protected pages */}
            <Route element={<ProtectedRoute />}>
              <Route path="/liked" element={<Liked />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </LikesProvider>
    </AuthProvider>
  )
}

export default App
