import { Link, useParams } from 'react-router'
import Card from '../components/ui/Card'
import Tag from '../components/ui/Tag'
import { posts } from '../data/posts'

function PostPage() {
  const { id } = useParams()
  // useParams gives a string, ids are numbers
  const post = posts.find((p) => p.id === Number(id))

  if (!post) {
    return (
      <Card>
        <h1 className="page-title">Post not found</h1>
        <p>There is no post with id "{id}".</p>
        <Link to="/posts">← All posts</Link>
      </Card>
    )
  }

  return (
    <article className="post stack">
      <Link to="/posts">← All posts</Link>
      <h1 className="page-title">{post.title}</h1>
      <p className="muted">{post.course}</p>
      <div className="tag-list">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      {post.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </article>
  )
}

export default PostPage
