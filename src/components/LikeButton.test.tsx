import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LikesProvider } from '../context/LikesContext'
import LikeButton from './LikeButton'

describe('LikeButton', () => {
  it('adds a like on click, and each post keeps its own count', async () => {
    const user = userEvent.setup()
    render(
      <LikesProvider>
        <LikeButton postId={1} />
        <LikeButton postId={2} />
      </LikesProvider>,
    )

    const [first, second] = screen.getAllByRole('button')
    await user.click(first)
    await user.click(first)

    expect(first).toHaveTextContent('Like: 2')
    expect(second).toHaveTextContent('Like: 0')
  })
})
