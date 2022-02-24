export interface Character {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  image: string
  created: string
}

export interface PageInfo {
  pages: number
  count: number
  next: number
  prev: number
  items: number
  current: number
}
