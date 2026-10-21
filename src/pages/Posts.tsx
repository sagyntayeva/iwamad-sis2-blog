import PostCard from '../components/PostCard'
import { posts } from '../data/posts'

function Posts() {
  return (
    <>
      <h1 className="page-title">Posts</h1>
      <ul className="post-grid">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default Posts
