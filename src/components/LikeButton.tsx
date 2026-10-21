import { useLikes } from '../context/LikesContext'
import Button from './ui/Button'

type LikeButtonProps = {
  postId: number
}

function LikeButton({ postId }: LikeButtonProps) {
  const { likes, addLike } = useLikes()
  const count = likes[postId] ?? 0

  return (
    <Button variant="primary" onClick={() => addLike(postId)}>
      Like: {count}
    </Button>
  )
}

export default LikeButton
