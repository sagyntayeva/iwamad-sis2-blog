import { Link } from 'react-router'
import PostCard from '../components/PostCard'
import Button from '../components/ui/Button'
import { useAuth } from '../context/AuthContext'
import { useLikes } from '../context/LikesContext'
import { posts } from '../data/posts'

// Protected page: only for a signed-in reader
function Liked() {
  const { signOut } = useAuth()
  const { likes } = useLikes()
  const likedPosts = posts.filter((post) => (likes[post.id] ?? 0) > 0)

  return (
    <div className="stack">
      <h1 className="page-title">Liked posts</h1>
      {likedPosts.length === 0 ? (
        <p>
          You have not liked any posts yet. <Link to="/posts">Browse posts</Link>
        </p>
      ) : (
        <ul className="post-grid">
          {likedPosts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      )}
      <div>
        <Button onClick={signOut}>Sign out</Button>
      </div>
    </div>
  )
}

export default Liked
