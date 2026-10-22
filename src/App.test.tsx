import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import App from './App'
import { posts } from './data/posts'

// Render the whole app at a given URL
function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App', () => {
  it('shows one card per post in the array', () => {
    renderAt('/posts')
    expect(screen.getAllByRole('article')).toHaveLength(posts.length)
  })

  it('shows the sign-in page on /liked when signed out, and the page after signing in', async () => {
    const user = userEvent.setup()
    renderAt('/liked')

    expect(screen.getByRole('heading', { name: 'Sign in' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Sign in' }))
    expect(screen.getByRole('heading', { name: 'Liked posts' })).toBeInTheDocument()
  })

  it('shows a clear message for a post id that does not exist', () => {
    renderAt('/posts/999')
    expect(screen.getByRole('heading', { name: 'Post not found' })).toBeInTheDocument()
  })

  it('shows the 404 page for an unknown URL', () => {
    renderAt('/banana')
    expect(screen.getByRole('heading', { name: /404/ })).toBeInTheDocument()
  })
})
