export type Post = {
  id: number
  title: string
  course: string // where the project was made, e.g. "IWaMAD Week 3"
  tags: string[]
  summary: string
  body: string[] // one string per paragraph
}
