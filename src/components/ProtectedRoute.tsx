import { Navigate, Outlet, useLocation } from 'react-router'
import { useAuth } from '../context/AuthContext'

// Layout route: checks sign-in before rendering the child page
function ProtectedRoute() {
  const { signedIn } = useAuth()
  const location = useLocation()

  if (!signedIn) {
    // remember where the reader wanted to go
    return <Navigate to="/signin" replace state={{ from: location.pathname }} />
  }

  return <Outlet />
}

export default ProtectedRoute
