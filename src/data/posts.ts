import type { Post } from '../types'

// Add an object here → a new card and a new /posts/<id> page appear
export const posts: Post[] = [
  {
    id: 1,
    title: 'Making Snake in Pygame',
    course: 'PP2 · Python',
    tags: ['Python', 'Pygame'],
    summary: 'A classic Snake game on a grid, with score and levels that make it faster.',
    body: [
      'My Snake game draws the field as a grid of cells. The snake is a list of cells, and every frame it moves one cell in the direction of the arrow key.',
      'Eating food adds one point. Every 5 points the level goes up and the game speed increases, so it gets harder the longer you play. The score and level are shown at the top of the window.',
    ],
  },
  {
    id: 2,
    title: 'A small Paint app in Pygame',
    course: 'PP2 · Python',
    tags: ['Python', 'Pygame'],
    summary: 'Drawing with colours, two brush shapes and an eraser.',
    body: [
      'The top panel has colour squares, a square brush, a round brush and an eraser. Clicking a colour changes the active colour, and moving the mouse paints with the chosen shape.',
      'Every painted point is saved in a list and redrawn each frame. This was my first program where the screen depends on data that the user creates.',
    ],
  },
  {
    id: 3,
    title: 'My first semantic HTML page',
    course: 'IWaMAD Week 1',
    tags: ['HTML5', 'Git'],
    summary: 'A profile page in plain HTML with anchor navigation, a table and a form.',
    body: [
      'In Week 1 I set up my tools and built a profile page using only HTML5: header, nav, main, sections and footer.',
      'The navigation links jump to sections on the same page, my goals are in a table, and the contact form uses native required fields.',
    ],
  },
  {
    id: 4,
    title: 'A profile card in React and TypeScript',
    course: 'IWaMAD Week 3',
    tags: ['React', 'TypeScript'],
    summary: 'The same profile split into typed, reusable components.',
    body: [
      'In Week 3 I rebuilt my profile with React components: Header, ProfileCard, SkillBadge and Footer.',
      'Each component has typed props, and the skill badges are rendered from an array with .map(). This is the same idea I use for the posts in this blog.',
    ],
  },
  {
    id: 5,
    title: 'Routing, Context and my first test',
    course: 'IWaMAD Week 4',
    tags: ['React Router', 'Vitest'],
    summary: 'Several pages with React Router, shared state with Context and a Vitest test.',
    body: [
      'In Week 4 my app got Home, Skills, Contact and a 404 page inside one layout route.',
      'A like counter was shared through React Context, and I wrote my first component test with Testing Library to check that a click changes the number.',
    ],
  },
]
