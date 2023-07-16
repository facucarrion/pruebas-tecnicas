export type GenreFilter = 'Fantasía' | 'Ciencia ficción' | 'Zombies' | 'Terror'

export interface Filters {
  genre: GenreFilter[]
  pages: number
  search: string
}
