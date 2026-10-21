import { Link, useLocation, useNavigate } from 'react-router'
import Button from '../components/ui/Button'
import Card from '../components/ui/Card'
import { useAuth } from '../context/AuthContext'

type LocationState = { from?: string } | null

function SignIn() {
  const { signedIn, signIn, signOut } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as LocationState)?.from ?? '/liked'

  function handleSignIn() {
    signIn()
    navigate(from, { replace: true })
  }

  if (signedIn) {
    return (
      <Card>
        <h1 className="page-title">You are signed in</h1>
        <Link to="/liked">Go to liked posts</Link>
        <div>
          <Button onClick={signOut}>Sign out</Button>
        </div>
      </Card>
    )
  }

  return (
    <Card>
      <h1 className="page-title">Sign in</h1>
      <p>Sign in to see the posts you liked.</p>
      <div>
        <Button variant="primary" onClick={handleSignIn}>
          Sign in
        </Button>
      </div>
    </Card>
  )
}

export default SignIn
