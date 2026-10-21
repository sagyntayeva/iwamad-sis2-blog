import { Link } from 'react-router'
import type { Post } from '../types'
import Card from './ui/Card'
import Tag from './ui/Tag'

type PostCardProps = {
  post: Post
}

function PostCard({ post }: PostCardProps) {
  return (
    <Card as="article" className="post-card">
      <h2 className="post-card__title">{post.title}</h2>
      <p className="muted">{post.course}</p>
      <div className="tag-list">
        {post.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <p>{post.summary}</p>
      <div className="post-card__actions">
        <Link to={`/posts/${post.id}`}>Read more</Link>
      </div>
    </Card>
  )
}

export default PostCard
